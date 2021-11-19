import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);
  


  return (
    <View style ={gStyle.main}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
