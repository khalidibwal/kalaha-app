import React, { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import { Avatar } from "@rneui/themed";
import { Contextprv } from "../../contexts/Contextprv";

export default function ProfileScreen(props) {
  const {
    myUser,
    myEmail,
    dataName,
    setDataName,
    myToken,
    setMyToken,
    Phone,
    myOutlet,
  } = useContext(Contextprv);

  return (
    <View style={Styles.container}>
      <Avatar
        size={90}
        rounded
        source={{ uri: "https://randomuser.me/api/portraits/men/35.jpg" }}
        containerStyle={Styles.avatar}
      />
      <Text style={Styles.profileText}>Profile</Text>
      <Card containerStyle={Styles.card}>
        {/* <Text style={Styles.avatext}>{myUser}</Text>
            <Text style={Styles.avatext}>{myEmail}</Text> */}

        <View>
          <Text style={Styles.avatext}>Name</Text>
          <Text style={Styles.avatext}>{dataName}</Text>
          <Card.Divider style={Styles.divider}></Card.Divider>
        </View>
        <View>
          <Text style={Styles.avatext}>Email</Text>
          <Text style={Styles.avatext}>{myEmail}</Text>
          <Card.Divider style={Styles.divider}></Card.Divider>
        </View>
        <View>
          <Text style={Styles.avatext}>Username</Text>
          <Text style={Styles.avatext}>{myUser}</Text>
          <Card.Divider style={Styles.divider}></Card.Divider>
        </View>
        <View>
          <Text style={Styles.avatext}>Phone</Text>
          <Text style={Styles.avatext}>{Phone}</Text>
          <Card.Divider style={Styles.divider}></Card.Divider>
        </View>
        {myOutlet ? (
          <View>
            <Text style={Styles.avatext}>Location</Text>
            <Text style={Styles.avatext}>{myOutlet}</Text>
          </View>
        ) : (
          <View>
            <Text style={Styles.avatext}>Location</Text>
            <Text style={Styles.avatext}>Choose The Restaurants</Text>
          </View>
        )}
      </Card>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131312",
  },
  card: {
    borderRadius: 10,
    top: 50,
    backgroundColor: "#131312",
  },
  avatar: {
    alignContent: "center",
    alignSelf: "center",
    top: 30,
  },
  profileText: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    top: 40,
  },
  avatext: {
    textTransform: "capitalize",
    color: "#fff",
    marginTop:10
  },
  divider: {
    marginTop: 20,
    marginBottom: 10,
  },
  makecolumns: {
    flexDirection: "row",
  },
});
