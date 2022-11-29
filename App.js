import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React,{useState} from 'react';
import MainStackNavigator from './routes/MainStackNavigator';
import { Contextprv } from './src/contexts/Contextprv';

export default function App() {
  const [dataName, setdataname] = useState('')
  const [myUser, setMyUser] = useState('')
  const [myEmail, setMyEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [myToken, setMyToken] = useState('')
  const [myOutlet, setMyOutlet] = useState('')
  const [myDate, setMyDate] = useState('')
  const SyncData = {
    myUser, setMyUser,
    dataName, setdataname,
    myEmail, setMyEmail,
    Phone, setPhone,
    myToken, setMyToken,
    myOutlet, setMyOutlet,
    myDate, setMyDate
  }
  return (
    <Contextprv.Provider value={SyncData}>
    <MainStackNavigator />
    </Contextprv.Provider>
  );
}
