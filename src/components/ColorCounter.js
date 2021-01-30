import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const ColorCounter = () => {
    return <View>
        <Text>Red</Text>
        <Button title='Increase Red'/>
        <Button title='Decrease Red'/>
    </View>
}

const styles = StyleSheet.create({});

export default ColorCounter;