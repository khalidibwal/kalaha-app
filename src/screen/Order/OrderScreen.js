import React, {useContext} from "react";
import {View, StyleSheet, Text} from 'react-native'
import { Contextprv } from "../../contexts/Contextprv";


export default function OrderScreen(){
    const {myMenu} = useContext(Contextprv)

    return(
        <View style={Styles.container}>
           {myMenu.map((res)=>{
                return(
                    <>
                    <Text>{res.menu}</Text>
                    <Text>{res.qty}</Text>
                    </>
                    
                )
            })}
        </View>
    )
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    }
})