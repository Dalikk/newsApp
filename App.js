import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';
import { gStyle } from './styles/style';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';
import Main from './components/Main'

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  if (fontsLoaded){
    return (
      <Main/>
    );
  } else 
    return <AppLoading />;
}

const styles = StyleSheet.create({

});
