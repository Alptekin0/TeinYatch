import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TasitlarimMain from './TasitlarimScreen/TasitlarimMain';
import DenizTasitiEkle from './TasitlarimScreen/DenizTasitiEkle';
import Lokasyon from './TasitlarimScreen/Lokasyon';
import Fiyatlar from './TasitlarimScreen/Fiyatlar';
import Kosullar from './TasitlarimScreen/Kosullar';
import İmkanlar from './TasitlarimScreen/İmkanlar';
import EkstraHizmetler from './TasitlarimScreen/EkstraHizmetler';
import Aciklamalar from './TasitlarimScreen/Aciklamalar';
import Fotograflar from './TasitlarimScreen/Fotograflar';
import IslemSonucu from './TasitlarimScreen/IslemSonucu';
import TasitDetay from './TasitlarimScreen/TasitDetay';



const Stack = createStackNavigator();

const Tasitlarim = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='TasitlarimMain' component={TasitlarimMain} />
      <Stack.Screen name='DenizTasitiEkle' component={DenizTasitiEkle} />
      <Stack.Screen name='Lokasyon' component={Lokasyon} />
      <Stack.Screen name='Fiyatlar' component={Fiyatlar} />
      <Stack.Screen name='Kosullar' component={Kosullar} />
      <Stack.Screen name='İmkanlar' component={İmkanlar} />
      <Stack.Screen name='EkstraHizmetler' component={EkstraHizmetler} />
      <Stack.Screen name='Aciklamalar' component={Aciklamalar} />
      <Stack.Screen name='Fotograflar' component={Fotograflar} />
      <Stack.Screen name='IslemSonucu' component={IslemSonucu} />
      <Stack.Screen name='TasitDetay' component={TasitDetay} />
    </Stack.Navigator>
  )
}

export default Tasitlarim

const styles = StyleSheet.create({})