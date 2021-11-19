import React from 'react';
import { StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import MainStack from './navigate'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  if (fontsLoaded){
    return (
      <MainStack/>
    );
  } else 
    return <AppLoading onError={console.warn}/>;
}

const styles = StyleSheet.create({

});
