import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native";

export default function Restourants(props) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
    <View style={Styles.container} >
      <Image style={Styles.image}    
       source={props.mySlide}
        />
    </View>
    </TouchableOpacity>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    justifyContent:'space-between',
    alignContent:'center',
    marginTop:30,
    marginLeft: 10
  },
  image: {
      flex:1 , 
      width: undefined, 
      height: undefined,
      borderRadius:10
  }
});
