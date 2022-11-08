import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import RestoScreen from "../../component/Outlet/RestoScreen";
import { useNavigation } from "@react-navigation/native";

export default function Outlet() {
  const navigation = useNavigation();
  const slides = {
    den: require("../../../assets/Images/Outles/DEN/den.jpg"),
    pier: require("../../../assets/Images/Outles/PIER/pier1.jpg"),
    wharf: require("../../../assets/Images/Outles/WHARF/wharf2.jpg"),
  };
  const slidetxt = {
    den: 'restoran lokal  yang berdiri sejak tahun 1995, merupakan restoran keluarga dengan konsep casual dining yang menyajikan menu-menu makanan khas yang disajikan secara fresh food (dimasak setelah makanan dipsesan).'
  }
  return (
    <View style={Styles.container}>
      <ScrollView>
        <RestoScreen
        onPress={()=> navigation.navigate('Reserve',{
          imageData:slides.den,
          desc: slidetxt.den,
          title: 'DEN Of Kalaha'
        })} 
        buttonTitle="DEN Of Kalaha" 
        OutletImage={slides.den} />
        <RestoScreen 
        onPress={()=> navigation.navigate('Reserve',{
          imageData:slides.pier,
          desc: slidetxt.den,
          title: 'PIER By Kalaha'
        })} 
        buttonTitle="PIER By Kalaha" 
        OutletImage={slides.pier} />
        <RestoScreen 
        onPress={()=> navigation.navigate('Reserve',{
          imageData:slides.wharf,
          desc: slidetxt.den,
          title: 'Kalaha@TheWHARF'
        })} 
        buttonTitle="Kalaha@TheWHARF" 
        OutletImage={slides.wharf} />
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
