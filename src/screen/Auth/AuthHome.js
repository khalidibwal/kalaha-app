import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AuthHome() {
  return (
    <View style={Styles.container}>
    <TouchableOpacity style={Styles.appButtonContainer} activeOpacity={0.7}>
      <Text style={Styles.appButtonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity style={Styles.appButtonContainer} activeOpacity={0.7}>
      <Text style={Styles.appButtonText}>Sign Up</Text>
    </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignContent:'center',
    backgroundColor:'black'
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom:10
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
