import React,{useContext} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Contextprv } from "../../contexts/Contextprv";
import HomeCard from "../../component/card/HomeCard";
import PromoCard from "../../component/card/PromoCard";
import FeedBack from "../../component/card/FeedBack";

export default function HomeScreen() {
  const {dataName} = useContext(Contextprv)
  return (
    <>
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.fontText}>Hello,{dataName} </Text>
      </View>
      <View style={styles.description}>
        <Text style={styles.fontDescription}>
          What do you want to do today?{" "}
        </Text>
      </View>
      <MaterialIcons
        name="notifications-none"
        size={24}
        color="black"
        style={styles.notif}
      />
      <HomeCard />
        <ScrollView horizontal>
        <PromoCard />
        <PromoCard />
        <PromoCard />
        </ScrollView>
        <FeedBack />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  title: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 30,
    top: 50,
  },
  description: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    left: 30,
    top: 80,
  },
  notif: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    right: 30,
    top: 50,
  },
  fontText: {
    fontSize: 20
  },
  fontDescription: {
    fontSize: 10,
  },
  fontPromo:{
    fontWeight:'bold',
    left:30,
    marginTop:100
  },
  promoScroll:{
    flex:1
  }
});
