import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RezervasyonMainScreen from './RezervasyonScreen/RezervasyonMainScreen';
import RezervasyonDetay from './RezervasyonScreen/RezervasyonDetay';

const Stack = createStackNavigator();

const Rezervasyonlar = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='RezervasyonMainScreen' component={RezervasyonMainScreen} />
      <Stack.Screen name='RezervasyonDetay' component={RezervasyonDetay} />
    </Stack.Navigator>
  )
}

export default Rezervasyonlar

const styles = StyleSheet.create({})