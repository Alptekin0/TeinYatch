import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Odeme from './YatDetayForSale/Odeme';
import Main from './YatDetayForSale/Main';
import Ekspertiz from './YatDetayForSale/Ekspertiz';
import Onay from './YatDetayForSale/Onay';


const Stack = createStackNavigator();


const YatDetayForSale = ({ route }: any) => {
  const { yatId } = route.params;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "white" } }}>
      <Stack.Screen name='Main' component={Main} initialParams={{ yatId }} />
      <Stack.Screen name='Ekspertiz' component={Ekspertiz} initialParams={{ yatId }} />
      <Stack.Screen name='Odeme' component={Odeme} initialParams={{ yatId }} />
      <Stack.Screen name='Onay' component={Onay} initialParams={{ yatId }} />
    </ Stack.Navigator>
  )
}

export default YatDetayForSale

const styles = StyleSheet.create({})