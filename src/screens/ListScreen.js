import React from 'react';
import { FlatList, Text, StyleSheet} from 'react-native'

const ListScreen = () => {

    const friends = [
        
        { name: "Friend #1", age: '20'},
        { name: "Friend #2", age: '25' },
        { name: "Friend #3", age: '28' },
        { name: "Friend #4", age: '70' },
        { name: "Friend #5", age: '50' },
        { name: "Friend #6", age: '42' },
        { name: "Friend #7", age: '22' },
        { name: "Friend #8", age: '35' },
        { name: "Friend #9", age: '19' },
        { name: "Friend #10", age: '29' }
    ]
    return (

    <FlatList
        showVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends} 
        renderItem={({ item }) => {
            return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
        }}
    />

    );
};

const styles = StyleSheet.create({ 
    textStyle: { 
        marginVertical: 2
    }
});

export default ListScreen;