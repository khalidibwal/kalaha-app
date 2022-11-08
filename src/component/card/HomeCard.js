import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from "react-native";
import { Card } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

export default function HomeCard(){
  const navigation = useNavigation();
    return(
        <View style={Styles.container}>
            <View style={Styles.item}>
            <TouchableOpacity>
            <Card containerStyle={Styles.cardStyle}>
                <Text style={Styles.cardFont}>New Order</Text>
                <Card.Image resizeMode="cover" source={require('./../../../assets/Images/HomeStorage/neworder.png')} containerStyle={Styles.cardOrder}/>
            </Card>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=> navigation.navigate('Outlet')}>
            <Card containerStyle={Styles.cardStyle}>
                <Text style={Styles.cardFont}>Change Restaurants</Text>
                <Card.Image source={require('./../../../assets/Images/HomeStorage/resto.png')} />
            </Card>
            </TouchableOpacity>
            </View>              
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'flex-start', // if you want to fill rows left to right
        top:101
      },
      item: {
        width: '50%',
        height: '100%'
      },
      cardStyle:{
        borderRadius:20,
        backgroundColor:'#E4C390'
      },
      cardFont:{
        fontFamily:'Roboto',
        fontSize:13,
        alignItems:'flex-start'
      },
      cardOrder:{
        paddingLeft:40
      }
})