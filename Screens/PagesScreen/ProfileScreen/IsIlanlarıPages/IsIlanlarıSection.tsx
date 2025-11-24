import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import MainIsIlanlarıSection from './SectionIsIlanlarıScreen/MainIsIlanlarıSection';
import IlanArayınız from './SectionIsIlanlarıScreen/IlanArayınız';

const Stack = createStackNavigator();

const IsIlanlarıSection = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name='MainIsIlanlarıSection' component={MainIsIlanlarıSection} />
      <Stack.Screen name='IlanArayınız' component={IlanArayınız} />
    </Stack.Navigator>
  )
}

export default IsIlanlarıSection

const styles = StyleSheet.create({})