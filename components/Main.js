import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main() {
    return (
        <View style ={gStyle.main}>
            <Text style={gStyle.title}>Главная страница</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

});