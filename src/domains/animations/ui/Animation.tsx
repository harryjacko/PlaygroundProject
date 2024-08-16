import AppScreen from "../../../shared/ui/AppScreen";
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from "@shopify/react-native-skia";
import styled from "styled-components/native";
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

const rectPadding = 12;
const height = 200;
const width = 320;
const padding = 50;
const rotationRange = 8;

const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

const RoundRec = styled(Animated.View)`
  background-color: white;
  height: ${height - rectPadding / 2}px;
  width: ${width - rectPadding / 2}px;
  position: absolute;
  border-radius: 18px;
  z-index: 100;
`;

function Gradient() {
  return (
    <Canvas
      style={{
        width: width + padding,
        height: height + padding,
      }}>
      <RoundedRect
        r={20}
        x={padding / 2}
        y={padding / 2}
        height={height}
        width={width}
        color={"white"}>
        <SweepGradient
          colors={["#39FF14", "#00FFFF", "#9900FF", "#39FF14"]}
          c={vec((width + padding) / 2, (height + padding) / 2)}
        />
        <BlurMask blur={8} style={"solid"} />
      </RoundedRect>
    </Canvas>
  );
}

// topLeft 10 -10
// bottomLeft -10 -10
// bottomRight -10 10
// topRight 10 10

function Animation() {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onBegin((e) => {
      x.value = withTiming(
        interpolate(
          e.y,
          [0, width],
          [rotationRange, -rotationRange],
          Extrapolation.CLAMP,
        ),
        { easing: Easing.elastic() },
      );
      y.value = withTiming(
        interpolate(
          e.x,
          [0, height],
          [-rotationRange, rotationRange],
          Extrapolation.CLAMP,
        ),
        { easing: Easing.elastic() },
      );
    })
    .onUpdate((e) => {
      x.value = interpolate(
        e.y,
        [0, width],
        [rotationRange, -rotationRange],
        Extrapolation.CLAMP,
      );
      y.value = interpolate(
        e.x,
        [0, height],
        [-rotationRange, rotationRange],
        Extrapolation.CLAMP,
      );
    })
    .onFinalize(() => {
      x.value = withTiming(0, { easing: Easing.elastic() });
      y.value = withTiming(0, { easing: Easing.elastic() });
    });
  const transformStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 300 },
        { rotateX: `${x.value}deg` },
        { rotateY: `${y.value}deg` },
      ],
    };
  }, []);

  return (
    <AppScreen>
      <Wrapper>
        <Gradient />
        <GestureDetector gesture={gesture}>
          <RoundRec style={transformStyle} />
        </GestureDetector>
      </Wrapper>
    </AppScreen>
  );
}

export default Animation;
