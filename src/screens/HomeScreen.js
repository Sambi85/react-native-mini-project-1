import React from "react";
import { Button, Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
      
      <Button 
        onPress={()=> navigation.navigate("Components")}
        title='Go to Components Demo'
      />

      <Button
        onPress={ () => navigation.navigate("List")}
        title="Go to List Demo"
      />

      <Button
      onPress={()=> navigation.navigate("Image")}
      title="Go to Image Demo"
      />

      {/* <TouchableOpacity onPress={()=> props.navigation.navigate("List")}>
        <Text>Hello</Text>
      </TouchableOpacity> */}

    </View>
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
