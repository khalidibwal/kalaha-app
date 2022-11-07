import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import MainStackNavigator from './routes/MainStackNavigator';

export default function App() {
  return (
    <MainStackNavigator />
  );
}
