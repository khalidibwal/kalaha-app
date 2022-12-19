import React, { useState, useEffect, useContext } from "react";
import { Contextprv } from "../../contexts/Contextprv";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList, Image, ScrollView, Text, TouchableOpacity } from "react-native";
import FoodCard from "../../component/card/FoodCard";
import { Card } from "@rneui/themed";
import axios from "axios";

export default function FoodMenu() {
  const navigation = useNavigation();
  const { rpeople } = useContext(Contextprv);
  const [menuDEN, setMenuDEN] = useState([]);

  useEffect(() => {
    const getMenuDen = () => {
      axios
        .get("https://x8ki-letl-twmt.n7.xano.io/api:0HPUwqAg/menu_den")
        .then((response) => setMenuDEN(response.data));
    };
    getMenuDen();
  }, []);
  function ToCart(){
    navigation.navigate('order')
  }
  return (
    <View style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.twoColumn}>
        {menuDEN.map((res) => {
          return (
            <FoodCard source={{uri: res.images.url}} menuTitle={res.menu}/>
          );
        })}
      </ScrollView>
      <View style={Styles.footer}>
      <TouchableOpacity
        style={Styles.appButtonContainer}
        onPress={() => ToCart()}
      >
        <Text style={Styles.appButtonText}>Next</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  twoColumn: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent:'center',
    alignSelf:'center'
  },
  appButtonContainer: {
    marginTop: 10,
    marginBottom:5,
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
