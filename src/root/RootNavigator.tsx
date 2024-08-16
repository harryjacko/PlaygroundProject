import {createStackNavigator} from '@react-navigation/stack';
import Home from '../domains/home/ui/Home';
import {NavigationContainer} from '@react-navigation/native';
import Animation from '../domains/animations/ui/Animation';

const Stack = createStackNavigator();

const rootScreens = [
  <Stack.Screen name="Home" component={Home} key={'home'} />,
  <Stack.Screen name="Animation" component={Animation} key={'animation'} />,
];

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>{rootScreens}</Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
