import {PropsWithChildren} from 'react';
import {ScrollView, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import measurements from '../measurements';

interface AppScreenProps extends PropsWithChildren {}

const Screen = styled.View`
  flex: 1;
  padding: ${measurements.margin}px;
  background-color: black;
`;

function AppScreen(props: AppScreenProps) {
  return (
    <Screen>
      <ScrollView>{props.children}</ScrollView>
    </Screen>
  );
}

export default AppScreen;
