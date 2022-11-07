import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RestoScreen from "../../component/Outlet/RestoScreen";

export default function Outlet() {
  const slides = {
    den: require("../../../assets/Images/Outles/DEN/den.jpg"),
    pier: require("../../../assets/Images/Outles/PIER/pier1.jpg"),
    wharf: require("../../../assets/Images/Outles/WHARF/wharf2.jpg"),
  };
  return (
    <View style={Styles.container}>
      <Text>Dine In</Text>
      
      <ScrollView>
      <RestoScreen buttonTitle="DEN Of Kalaha" OutletImage={slides.den} />
      <RestoScreen buttonTitle="PIER By Kalaha" OutletImage={slides.pier} />
      <RestoScreen buttonTitle="Kalaha@TheWHARF" OutletImage={slides.wharf} />
      </ScrollView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
