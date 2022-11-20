import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HistoryCard from "../../component/card/HistoryCard";

export default function HistoryScreen() {
  return (
    <View style={Styles.container}>
      <HistoryCard/>
    </View>
  );
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})
