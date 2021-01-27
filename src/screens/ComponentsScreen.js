import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {   
    const yourName = 'Sam';
    
    return (
        <View>
        <Text style={styles.header}>Getting started with react native!</Text>
        <Text>{`My name is ${yourName}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }

    
});

export default ComponentsScreen;