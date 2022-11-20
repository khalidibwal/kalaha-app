import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import { Card } from "@rneui/themed";

export default function HistoryCard(){
    return(
        <Card containerStyle={Styles.cardStyle}>
            <Text style={Styles.cardTxt}>No Recent History</Text>
        </Card>
    )
}

const Styles = StyleSheet.create({
    cardStyle:{
        borderRadius:10
    },
    cardTxt:{
        fontSize:10,
        fontFamily:'normal',
        textAlign:'center'
    }
})