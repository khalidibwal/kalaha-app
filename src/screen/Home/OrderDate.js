import React, {useContext} from "react";
import { View, Text, StyleSheet } from "react-native";
import { Contextprv } from "../../contexts/Contextprv";
export default function OrderDate(){
    const {myUser} = useContext(Contextprv)
    return(
        <View style={styles.container}>
            <Text>Welcome, {myUser}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });