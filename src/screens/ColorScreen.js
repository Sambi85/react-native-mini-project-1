import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
    const [counter, setCounter] = useState(0);


    return(
        <View>
            <Button title="Add a Color"/>
            <View 
            style={{ height: 100, width: 100, backgroundColor: 'rgb(0, 25, 0)' 
        }}/>
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`
}

const styles = StyleSheet.create({});

export default ColorScreen;