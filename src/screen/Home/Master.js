import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import MasterCard from "../../component/card/MasterCard";
import Restourants from "../../component/card/Restourants";
import PromoCard from "../../component/card/PromoCard";

export default function Master() {
  const carousel = {
    sw: require("../../../assets/Images/HomeStorage/newyear.png"),
    ln: require("../../../assets/Images/HomeStorage/ladiesnight.jpg"),
  };
  const resto = {
    den: require("./../../../assets/Images/Outles/DEN/den.jpg"),
    pier: require("./../../../assets/Images/Outles/PIER/pier1.jpg"),
    wharf: require("./../../../assets/Images/Outles/WHARF/wharf2.jpg"),
  };
  const promo = {
    promote: require("./../../../assets/Images/HomeStorage/sale.jpg"),
    rewards: require("./../../../assets/Images/HomeStorage/reward.jpg"),
  };
  return (
    <>
      <View style={Styles.container}>
        <ScrollView horizontal>
          <MasterCard mySlide={carousel.sw} />
          <MasterCard mySlide={carousel.ln} />
        </ScrollView>
        <TouchableOpacity>
          <Text style={Styles.setxt}>See all</Text>
        </TouchableOpacity>
        <ScrollView horizontal>
          <Restourants mySlide={resto.den} />
          <Restourants mySlide={resto.pier} />
          <Restourants mySlide={resto.wharf} />
        </ScrollView>
        <View style={{ flexDirection: "row" }}>
          <PromoCard mySlide={promo.promote} />
          <PromoCard mySlide={promo.rewards} />
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff'
  },
  setxt: {
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 12,
    color: "#D1B000",
    right: 10,
    top: 20,
    fontFamily: "normal",
  },
});
