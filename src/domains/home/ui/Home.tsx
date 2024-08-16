import AppScreen from "../../../shared/ui/AppScreen";
import { Button } from "react-native";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";

function Home({ navigation }: StackScreenProps<any>) {
  const handleOnAnimationPress = useCallback(() => {
    navigation.navigate("Card Animation");
  }, []);

  return (
    <AppScreen>
      <Button title="Card Animation" onPress={handleOnAnimationPress} />
    </AppScreen>
  );
}

export default Home;
