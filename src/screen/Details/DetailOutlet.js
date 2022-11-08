import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Card } from "@rneui/themed";
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
export default function DetailOutlet({ route }) {
  const { imageData, desc, title } = route.params;
  return (
    <View style={Styles.container}>
      <Card containerStyle={Styles.cardStyle}>
        <Image source={imageData} style={Styles.cardImages} />
        <CardTitle>{title}</CardTitle>
        <Text style={Styles.fontTxt}>{desc}</Text>
        <View style={{ borderRadius: 10 }}>
          <TouchableOpacity style={Styles.button}>
            <View>
              <Text style={Styles.btnText}>Reserve Table</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Card>
    </View>
  );
}
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardImages: {
    borderRadius: 10,
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
  fontTxt: {
    fontFamily: "Roboto",
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
    height: 60,
    backgroundColor: "#FF7A00",
    top:10
  },
});
