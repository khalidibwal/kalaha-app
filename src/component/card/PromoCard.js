import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native";

export default function PromoCard(props) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
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
    width: 200,
    height: 200,
    justifyContent:'space-between',
    alignContent:'center',
    marginTop:10,
    marginBottom:10,
    marginLeft: 5
  },
  image: {
      flex:1 , 
      width: undefined, 
      height: undefined,
      borderRadius:10,
  }
});
