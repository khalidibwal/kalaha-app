import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native";

export default function RestoScreen(props) {
  return (
    <View style={Styles.container}>
      <Card containerStyle={Styles.cardStyle}>
        <Image source={props.OutletImage} style={Styles.cardImages} />
        <View style={{ borderRadius: 10 }}>
          <TouchableOpacity onPress={props.onPress} style={Styles.appButtonContainer}>
            <View>
              <Text style={Styles.appButtonText}>{props.buttonTitle}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container:{
    backgroundColor:'black'
  },
  linearGradient: {
    borderRadius: 50,
  },
  btnText: {
    color: "white",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    top: 10,
  },
  button: {
    borderRadius: 50,
    height: 40,
    backgroundColor: "#FF7A00",
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardImages: {
    borderRadius: 10,
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#D1B000",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 100,
  },
  appButtonText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});
