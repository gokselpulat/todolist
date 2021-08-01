import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemList = ({ text }) => {
    return (<View style={style.todo}><Text> {text} </Text></View>)
}


const style = StyleSheet.create({
    todo: {
        padding:10,
        backgroundColor:'#ddd',
        margin:5
    }
});



export default ItemList;

