import React, { useReducer } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 15;
const reducer = (state, action) => {
    // state === { red: number, green: number, blue: number }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15}

    switch (action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };

        case 'green':
            return { ...state, green: state.green + action.amount };
        
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        
        default:
            return state; 
    }
}

const SquareScreen = () => {
     const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    
    return (
    <View>
        
        <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
            color='Red'
        />
        
        <ColorCounter 
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} 
            color='Green'
        />
        
        <ColorCounter 
            onIncrease={() => setColor('blue' , COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
            color='Blue'
        />
        <View style={{height: 200, width: 150, backgroundColor: `rgb(${red},${green},${blue})` }}/>

    </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;