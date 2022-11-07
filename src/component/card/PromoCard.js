import React from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity} from "react-native"
import { Card } from "@rneui/themed";
import { ScrollView } from "react-native";

export default function PromoCard(){
    return(
        <>
         <TouchableOpacity>
                <View style={Styles.container}>
                    <Image style={Styles.image} source={require('../../../assets/Images/HomeStorage/promo.png')} />

                </View>
            </TouchableOpacity>
        </>
    )
}

const Styles = StyleSheet.create({
    container : {
        width : '100%',
        height : 100,
        marginBottom : 25,
        borderRadius : 15,
        backgroundColor : '#FFFFFF',

    },

    image : {
        marginRight:10,
        borderRadius:10,
        height : 160
    },
})

