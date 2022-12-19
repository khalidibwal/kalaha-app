import React, {useState, useContext} from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { Contextprv } from "../../contexts/Contextprv";
import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import { AntDesign } from "expo-vector-icons";

export default function FoodCard(props) {
  const {myMenu, setMenuTitle} = useContext(Contextprv)
  const [myQty, setMyQty] = useState(0)
  const navigation = useNavigation();
  const addQty = () =>{
    setMyQty(myQty + 1)
  }
  const subtractQty = ()=>{
    if(myQty <= 0) {
      return;
    } else {
      setMyQty(myQty - 1);
    }
  }
  return (
    <>
      <View style={Styles.container}>
        <Image style={Styles.image} source={props.source} />
        <View>
          <Text style={Styles.txtUnversal2}>{props.menuTitle}</Text>
        </View>
        <View style={Styles.qtyBtn}>
          <TouchableOpacity style={Styles.minusBtn} onPress={subtractQty}>
            <AntDesign name="minussquareo" color="#131312" size={30} />
          </TouchableOpacity>
          <View style={{ flex: 1, alignSelf: "center" }}>
            <Text style={{ textAlign: "center" }}>{myQty}</Text>
          </View>
          <TouchableOpacity style={Styles.plusBtn} onPress={addQty}>
            <AntDesign name="plussquareo" color="#131312" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const Styles = StyleSheet.create({
  card: {
    width: 170,
    height: 500,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  cardImage: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
  },
  container: {
    width: 190,
    height: 200,
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    width: "100%",
    height: 200,
    borderRadius: 10,
    resizeMode: "cover",
  },
  qtyBtn: {
    flexDirection: "row",
  },
  minusBtn: {
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  plusBtn: {
    alignSelf: "flex-end",
  },
  txtUnversal2: {
    justifyContent: "center",
    alignSelf: "center",
    fontSize: 13,
    fontWeight: "300",
    letterSpacing: 3,
    marginTop: 15,
    margin: 10,
    textTransform: "capitalize",
  },
});
