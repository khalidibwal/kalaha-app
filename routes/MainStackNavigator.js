import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../src/screen/Home/HomeScreen';
import TestScreen from '../src/screen/Home/TestScreen';
import Outlet from '../src/screen/Home/Outlet';
import DetailOutlet from '../src/screen/Details/DetailOutlet';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Octicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function MainStackNavigator() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={MyTabs} options={{headerShown:false}}/>
        <Stack.Screen name="Test" component={TestScreen}/>
        <Stack.Screen name="Outlet" component={Outlet}/>
        <Stack.Screen name="Reserve" component={DetailOutlet}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home" component={HomeScreen}
        options={{
            tabBarIcon:()=>{
                return(
                    <AntDesign name="home" size={24} color="black" />
                )
            },
            headerShown: false
        }} />
        <Tab.Screen name="Order" component={TestScreen}
        options={{
            tabBarIcon:()=>{
                return(
                    <Octicons name="list-ordered" size={24} color="black" />
                )
            },
            headerShown: false
        }} />
      </Tab.Navigator>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
