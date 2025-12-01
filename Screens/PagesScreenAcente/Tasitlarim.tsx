import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TasitlarimMain from './TasitlarimScreen/TasitlarimMain';
import DenizTasitiEkle from './TasitlarimScreen/DenizTasitiEkle';

const Stack = createStackNavigator();

const Tasitlarim = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='TasitlarimMain' component={TasitlarimMain} />
      <Stack.Screen name='DenizTasitiEkle' component={DenizTasitiEkle} />
    </Stack.Navigator>
  )
}

export default Tasitlarim

const styles = StyleSheet.create({})