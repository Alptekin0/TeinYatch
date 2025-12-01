import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilimMain from './ProfilimScreen/ProfilimMain';
import { Kisiselbilgiler, Mesajlarim, Bildirimlerim, İsİlanlari, Guvenlik, SSS, Destek, CikisYap } from '../PagesScreen/ProfileScreen';
import Mesajlar from '../PagesScreen/ProfileScreen/MesajlarScreen/Mesajlar';

const Stack = createStackNavigator();

const Profilim = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='ProfilimMain' component={ProfilimMain} />
      <Stack.Screen name='Kisiselbilgiler' component={Kisiselbilgiler} />
      <Stack.Screen name='Mesajlarim' component={Mesajlarim} />
      <Stack.Screen name='Bildirimlerim' component={Bildirimlerim} />
      <Stack.Screen name='İsİlanlari' component={İsİlanlari} />
      <Stack.Screen name='Guvenlik' component={Guvenlik} />
      <Stack.Screen name='SSS' component={SSS} />
      <Stack.Screen name='Destek' component={Destek} />
      <Stack.Screen name='CikisYap' component={CikisYap} />
    </Stack.Navigator>
  )
}

export default Profilim

const styles = StyleSheet.create({})