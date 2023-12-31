import {useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_800ExtraBold} from '@expo-google-fonts/inter';
import {Loading} from './src/components/Loading';
import { StatusBar } from 'react-native';

import Main from './src/Main';


export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold, 
    Inter_700Bold, 
    Inter_800ExtraBold
  });
  if(!fontsLoaded) {
    return (
      <Loading />
    )} 
  return (
    <>
      <Main />
      <StatusBar barStyle="light-content" backgroundColor="#09090A" translucent />
    </>
  );
};
