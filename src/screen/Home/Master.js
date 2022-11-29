import React, { useEffect, useContext } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Contextprv } from "../../contexts/Contextprv";
import MasterCard from "../../component/card/MasterCard";
import Restourants from "../../component/card/Restourants";
import PromoCard from "../../component/card/PromoCard";

export default function Master(props) {
  const Navigation = useNavigation();
  const {
    myToken, setMyToken, 
    myEmail, setMyEmail, 
    dataName, setdataname,
    Phone, setPhone,
  } = useContext(Contextprv)

  useEffect(() => {
    const Token = props.route.params.myToken;
    console.warn(Token)
    const isAuthorized = () => {
      axios
        .get(`https://x8ki-letl-twmt.n7.xano.io/api:0HPUwqAg/auth/me`, {
          headers: {
            Authorization: Token,
          },
        })
        .then((response) => {
          if (response.data.username !== null) {
            console.warn(response.data)
            setMyToken(Token)
            setMyEmail(response.data.email)
            setdataname(response.data.name)
            setPhone(response.data.phone)
          } else {
            Navigation.navigate('login');
          }
        })
        .catch(error => console.warn(error,'error data'))
    };
    isAuthorized();
  }, []);

  function ToAllOutlets(){
    Navigation.navigate('Outlet')
  }

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
        <TouchableOpacity onPress={()=> ToAllOutlets()}>
          <Text style={Styles.setxt}>See all</Text>
        </TouchableOpacity>
        <ScrollView horizontal>
          <Restourants mySlide={resto.den} onPress={()=> ToAllOutlets()} />
          <Restourants mySlide={resto.pier} onPress={()=> ToAllOutlets()} />
          <Restourants mySlide={resto.wharf} onPress={()=> ToAllOutlets()} />
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
    flex: 1,
    backgroundColor: "#131312",
  },
  setxt: {
    textAlign: "right",
    textTransform: "uppercase",
    fontSize: 12,
    color: "#D1B000",
    right: 10,
    top: 10,
    fontFamily: "normal",
  },
});
