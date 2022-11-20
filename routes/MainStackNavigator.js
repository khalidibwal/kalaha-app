import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Master from '../src/screen/Home/Master';
import HomeScreen from '../src/screen/Home/HomeScreen';
import TestScreen from '../src/screen/Home/OrderDate';
import Outlet from '../src/screen/Home/Outlet';
import DetailOutlet from '../src/screen/Details/DetailOutlet';
import OrderDate from '../src/screen/Home/OrderDate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Octicons, Fontisto, Ionicons } from '@expo/vector-icons';
import HistoryScreen from '../src/screen/Home/HistoryScreen';
import Login from '../src/screen/Auth/Login';
import Register from '../src/screen/Auth/Register';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ImageHeader = () => (
  <View style={{ backgroundColor: '#eee', height:100 }}>
    <ImageBackground
      source={require('../assets/Images/HomeStorage/header.jpg')}
      style={{height:100}}
    >
      <TouchableOpacity>
      <Ionicons size={20} name="notifications-outline" color={'white'} style={styles.notifIcon}/>
      </TouchableOpacity>
    </ImageBackground>
  </View>
);


export default function MainStackNavigator() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name="regis" component={Register} options={{
      headerShown:false
     }}/>
     <Stack.Screen name="login" component={Login} options={{
      headerShown:false
     }}/>
     
        <Stack.Screen name="Home" component={MyTabs} options={{
          header:()=> {return(<ImageHeader />)},
          headerTitle:()=>{return (<Ionicons size={20} name="notifications-outline" color={'black'}/>)}
        }}/>
        <Stack.Screen name="Test" component={TestScreen}/>
        <Stack.Screen name="history" component={HistoryScreen}/>
        <Stack.Screen name="Outlet" component={Outlet}/>
        <Stack.Screen name="Reserve" component={DetailOutlet}/>
        <Stack.Screen name="tabledate" component={OrderDate}/> 
    </Stack.Navigator>
    </NavigationContainer>
  );
}



function MyTabs() {
    return (
      <Tab.Navigator initialRouteName='Home'>
        <Tab.Screen name="Home"  component={Master}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <AntDesign name="home" size={17} color={focused ? '#D1B000' : 'grey'} />
                )
            },
            tabBarLabel:({focused})=>{return(
              <Text style={styles.labelFont}>Home</Text>
            )},
            headerShown:false
        }} />
        <Tab.Screen name="history" component={HistoryScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <Octicons name="history" size={17} color={focused ? '#D1B000' : 'grey'} />
                )
            },
            tabBarLabel:({focused})=>{return(
              <Text style={styles.labelFont}>History</Text>
            )},
            headerShown: false
        }} />
        <Tab.Screen name="promo" component={TestScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <Fontisto name="ticket" size={17} color={focused ? '#D1B000' : 'grey'} />
                )
            },
            tabBarLabel:({focused})=>{return(
              <Text style={styles.labelFont}>Promo</Text>
            )},
            headerShown: false
        }} />
        <Tab.Screen name="profile" component={TestScreen}
        options={{
            tabBarIcon:({focused})=>{
                return(
                    <Ionicons name="people-sharp" size={17} color={focused ? '#D1B000' : 'grey'} />
                )
            },
            tabBarLabel:({focused})=>{return(
              <Text style={styles.labelFont}>Profile</Text>
            )},
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
  labelFont:{
    textTransform:'uppercase',
    fontSize:7,
    marginBottom: 4
  },
  notifIcon:{
   alignSelf:'flex-end',
   right:30,
   top:50
  }
});
