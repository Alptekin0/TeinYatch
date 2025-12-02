import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ProfilimMain from './ProfilimScreen/ProfilimMain';
import { Mesajlarim, Bildirimlerim, Guvenlik, SSS, Destek, CikisYap } from '../PagesScreen/ProfileScreen';
import Sirketim from './ProfilimScreen/Sirketim';
import SatilikDenizTasitlari from './ProfilimScreen/SatilikDenizTasitlari';
import InsanKaynaklari from './ProfilimScreen/InsanKaynaklari';

const Stack = createStackNavigator();

const Profilim = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>

      <Stack.Screen name="ProfilimMain" component={ProfilimMain} />
      <Stack.Screen name="Sirketim" component={Sirketim} />
      <Stack.Screen name="SatilikDenizTasitlari" component={SatilikDenizTasitlari} />
      <Stack.Screen name="InsanKaynaklari" component={InsanKaynaklari} />
      <Stack.Screen name="Mesajlarim" component={Mesajlarim} />
      <Stack.Screen name="Bildirimlerim" component={Bildirimlerim} />
      <Stack.Screen name="Guvenlik" component={Guvenlik} />
      <Stack.Screen name="Destek" component={Destek} />
      <Stack.Screen name="SSS" component={SSS} />


    </Stack.Navigator>
  )
}

export default Profilim

const styles = StyleSheet.create({})