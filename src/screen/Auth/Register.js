import React, {useContext, useState} from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Contextprv } from "../../contexts/Contextprv";
import { Input } from "@rneui/themed";
import { Card } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function Register() {
  const {
    myUser, setMyUser, 
    dataName, setdataname,
    myEmail, setMyEmail,
    Phone, setPhone
  } = useContext(Contextprv)
  const [mypassword, setPassword] = useState('')
  const defaultValues = {
    username:myUser,
    email:myEmail,
    password:mypassword,
    phone:Phone,
    name:dataName
  }
  const navigation = useNavigation();
  const Navtologin =()=> {
    navigation.navigate("login");
  }
  const HandleUser = e =>{
    setMyUser(e)
  }
  const HandleName = e => {
    setdataname(e)
  }
  const handleEmail = e => {
    setMyEmail(e)
  }
  const HandlePassword = e =>{
    setPassword(e)
  }
  const handlePhone = e =>{
    setPhone(e)
  }
  const HandleSubmit = (event) => {
    axios
      .post(
        `https://x8ki-letl-twmt.n7.xano.io/api:0HPUwqAg/auth/signup`,
        defaultValues
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
        <Input placeholder="Username" onChangeText={HandleUser} />
        <Input placeholder="Name" onChangeText={HandleName}/>
        <Input placeholder="email" onChangeText={handleEmail} />
        <Input placeholder="Password" type="password" onChangeText={HandlePassword} />
        <Input placeholder="Phone" onChangeText={handlePhone}/>
        <TouchableOpacity style={Styles.appButtonContainer} activeOpacity={0.7} onPress={HandleSubmit}>
          <Text style={Styles.appButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={Styles.txtCenter}>Already have account ? </Text>
        <TouchableOpacity onPress={() => Navtologin()}>
          <Text style={Styles.txtCenter}>Click Here</Text>
        </TouchableOpacity>
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
