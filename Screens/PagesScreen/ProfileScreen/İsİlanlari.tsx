import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../../../Components/AppComp/AppPagesHeader"
import { createStackNavigator } from '@react-navigation/stack'
import MainPageIsIlanları from './IsIlanlarıPages/MainPageIsIlanları'
import BasvurularımSection from './IsIlanlarıPages/BasvurularımSection'
import IsIlanlarıSection from './IsIlanlarıPages/IsIlanlarıSection'
import KisiselBilgilerimSection from './IsIlanlarıPages/KisiselBilgilerimSection'



const Stack = createStackNavigator();


const İsİlanlari = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name="MainPageIsIlanları" component={MainPageIsIlanları} />
      <Stack.Screen name="IsIlanlarıSection" component={IsIlanlarıSection} />
      <Stack.Screen name="KisiselBilgilerimSection" component={KisiselBilgilerimSection} />
      <Stack.Screen name="BasvurularımSection" component={BasvurularımSection} />
    </Stack.Navigator>
  )
}

export default İsİlanlari

const styles = StyleSheet.create({})