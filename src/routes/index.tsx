import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home  from '../pages/Home'
import Graphics from '../pages/Graphics'

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
      <Stack.Screen name='Graphics' component={Graphics} options={{headerShown:false}}/>
    </Stack.Navigator>
  )}