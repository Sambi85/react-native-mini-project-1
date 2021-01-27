import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {   
    const greeting = <Text>{"Hello There!"}</Text>
    
    return (
        <View>
        <Text style={styles.header}>Getting started with react Native!</Text>
         {greeting}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 45
    }
});

export default ComponentsScreen;