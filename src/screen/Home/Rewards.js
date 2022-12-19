import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { Card, LinearProgress } from "@rneui/themed";
import { MaterialIcons } from "expo-vector-icons";

export default function Rewards(){
    return(
        <View style={Styles.container}>
            <View>
            <Card containerStyle={Styles.card}>
            <Image source={require('../../../assets/Images/Logo/fnb.png')} style={Styles.logo}/>
            <LinearProgress color="gold" style={{height:20, borderRadius:10}}/>   
                <Text style={Styles.textpoint}>Reward Point</Text>
                <View style={Styles.rowCard}>
                    <View style={{justifyContent:'center', alignSelf:'center'}}>
                    <MaterialIcons name='star' size={30} color='gold'/>
                    </View>
                    
                <Text style={Styles.numberPoint}>0</Text>
                
                </View>  
                         
            </Card>
            </View>
            
        </View>
    )
}

const Styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#131312'
    },
    rowCard:{
        flexDirection:'row',
        justifyContent:'center'
    },
    card:{
        borderRadius:10,
        width:'90%'
    },
    textpoint:{
        textAlign:'center',
        fontSize:15,
        fontWeight:'300',
        letterSpacing:3,
    },
    numberPoint:{
        fontSize:30,
        textAlign:'center'
    },
    logo:{
        width:80,
        height:80,
        justifyContent:'center',
        alignSelf:'center'
    }
})