import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Touchable} from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

    const [news, setNews] = useState([
        {name: 'Google', anons: 'Google!!!', full: 'Google is cool!'},
        {name: 'Apple', anons: 'Apple!!!', full: 'Apple is cool!'},
        {name: 'Facebook', anons: 'Facebook!!!', full: 'Facebook is cool!'}
    ]);
    
    return (
        <View style ={gStyle.main}>
            <Text style={gStyle.title}>Главная страница</Text>
            <FlatList data={news} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('FullInfo', item)} >
                    <Text>{item.name}</Text>
                    <Text>{item.anons}</Text>
                </TouchableOpacity>
            )}/>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({

});
