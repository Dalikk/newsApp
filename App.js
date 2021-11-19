import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from './styles/style';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if (font){
    return (
      <View style ={gStyle.main}>
        <Text style={gStyle.title}>Hello!</Text>
        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <AppLoading 
          startAsync={fonts} 
          onFinish={setFont(true)} 
        />
    );
  }
}

const styles = StyleSheet.create({

});
