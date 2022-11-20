import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import { Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { Card } from "@rneui/themed";
import axios from "axios";

export default function Login() {
  const [myUser, SetMyUser] = useState("");
  const [myPassword, SetMyPassword] = useState("");
  const defaultValues = {
    username: myUser,
    password: myPassword,
  };

  const HandleUser = e => {
    SetMyUser(e);
  };

  const handlePassword = e => {
    SetMyPassword(e);
  };
  const navigation = useNavigation();
  const HandleSubmit = (event) => {
    axios
      .post(
        `https://x8ki-letl-twmt.n7.xano.io/api:0HPUwqAg/auth/login`,
        defaultValues,{
          "headers": {
            'Content-Type': 'application/json',
          }
        }
      )
      .then((response) => {
        if (response.status === 200) {
          navigation.navigate('Home')
        }
      })
      .catch((error)=> alert(error,'Wrong Username or Password'))
  };
  return (
    <ImageBackground
      style={Styles.container}
      source={require("../../../assets/Images/HomeStorage/pizza.png")}
    >
      <Card containerStyle={Styles.card}>
        <Image
          source={require("../../../assets/Images/Logo/fnb.png")}
          style={Styles.logo}
        />
        <Input
          placeholder="Username"
          name="username"
          onChangeText={HandleUser}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          onChangeText={handlePassword}
        />
        <TouchableOpacity
          style={Styles.appButtonContainer}
          activeOpacity={0.7}
          onPress={() => HandleSubmit()}
        >
          <Text style={Styles.appButtonText}>Sign In</Text>
        </TouchableOpacity>
        {/* <Text style={Styles.txtCenter}>OR</Text> */}
        <TouchableOpacity
          style={Styles.appButtonContainer}
          activeOpacity={0.7}
          onPress={() => navigation.navigate("regis")}
        >
          <Text style={Styles.appButtonText}>Register</Text>
        </TouchableOpacity>
        <Text></Text>
      </Card>
    </ImageBackground>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
    resizeMode: "contain",
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#d7be69",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  appButtonText: {
    fontSize: 18,
    fontFamily: "Roboto",
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
  logo: {
    width: 100,
    height: 150,
    bottom: 10,
    left: 120,
  },
  card: {
    borderRadius: 15,
    backgroundColor: "black",
  },
  txtCenter: {
    textAlign: "center",
    marginTop: 10,
    color: "white",
  },
});
