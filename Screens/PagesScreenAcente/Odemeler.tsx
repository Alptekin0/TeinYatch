import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OdemelerMain from './OdemelerScreen/OdemelerMain';


const Stack = createStackNavigator();

const Odemeler = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='OdemelerMain' component={OdemelerMain} />
    </Stack.Navigator>
  )
}

export default Odemeler

const styles = StyleSheet.create({})