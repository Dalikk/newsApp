import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_600SemiBold, Montserrat_300Light } from '@expo-google-fonts/montserrat';

// const fonts = () => Font.loadAsync({
//   'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
//   'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
// });

export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_300Light
  });

  if (fontsLoaded){
    return (
      <View style ={gStyle.main}>
        <Text style={gStyle.title}>Hello!</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else 
    return <AppLoading />;
  
}

const styles = StyleSheet.create({

});
