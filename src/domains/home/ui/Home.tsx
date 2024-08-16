import styled from 'styled-components/native';
import AppScreen from '../../../shared/ui/AppScreen';
import measurements from '../../../shared/measurements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native';
import {useCallback} from 'react';
import {StackNavigationProp, StackScreenProps} from '@react-navigation/stack';

function Home({navigation}: StackScreenProps<any>) {
  const handleOnAnimationPress = useCallback(() => {
    navigation.navigate('Animation');
  }, []);

  return (
    <AppScreen>
      <Button title="Animation" onPress={handleOnAnimationPress} />
    </AppScreen>
  );
}

export default Home;
