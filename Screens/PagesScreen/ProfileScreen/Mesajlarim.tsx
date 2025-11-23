import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Mesajlar from './MesajlarScreen/Mesajlar';
import MesajDetay from './MesajlarScreen/MesajDetay';

const Stack = createStackNavigator();

const Mesajlarim = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      <Stack.Screen name='Mesajlar' component={Mesajlar} />
      <Stack.Screen name='MesajDetay' component={MesajDetay} />
    </Stack.Navigator>
  )
}

export default Mesajlarim


