import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

export default function FeedBack() {
  return (
    <View>
      <TouchableOpacity >
        <View style={Styles.container}>
          <View>
            <Image
              source={require("../../../assets/Images/HomeStorage/feedbacks.png")}
            />
          </View>
          <View>
           <Text style={Styles.gridtxt}>Enjoy Using The App? Fill in the feedback here!</Text>
          </View>
          <View>
            <Image
              source={require("../../../assets/Images/HomeStorage/arrows.png")}
              style={Styles.arrow}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFFAEC",
    bottom: 100,
  },

  gridtxt: {
    alignSelf: "flex-end",
    maxWidth: 200,
    color:'#FF7A00',
    top:20,
    left:20
  },
  arrow:{
    top:30,
    bottom:1,
    left:30
  }

});
