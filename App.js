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
  const [myTitle, setMyTitle] = useState('')
  const [myDate, setMyDate] = useState('')
  const [timeRes, setTimeres] = useState('')
  const [rpeople, setPeople] = useState('')
  const [myMenu, setMenuTitle] = useState([])
  const SyncData = {
    myUser, setMyUser,
    dataName, setdataname,
    myEmail, setMyEmail,
    Phone, setPhone,
    myToken, setMyToken,
    myOutlet, setMyOutlet,
    myTitle, setMyTitle,
    myDate, setMyDate,
    timeRes, setTimeres,
    rpeople, setPeople,
    myMenu, setMenuTitle
  }
  return (
    <Contextprv.Provider value={SyncData}>
    <MainStackNavigator />
    </Contextprv.Provider>
  );
}
