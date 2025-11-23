import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AnaSayfa, Rezervasyonlarım, Favorilerim, ProfileNavigator } from '../Screens/PagesScreen';

import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



SplashScreen.preventAutoHideAsync();

const Tab = createBottomTabNavigator();

const PagesNavigation = () => {

     // Kullanıcı uygulamaya giriş yaptıktan sonra karşılaşacağı sayfaların navigatorü

     return (
          <Tab.Navigator
               screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                         let iconName: keyof typeof Ionicons.glyphMap = 'home';

                         if (route.name === 'AnaSayfa') {
                              iconName = 'home-outline';
                         } else if (route.name === 'Rezervasyonlarım') {
                              iconName = 'help-buoy-outline';
                         } else if (route.name === 'Favorilerim') {
                              iconName = 'heart-outline';
                         } else if (route.name === 'Profilim') {
                              iconName = 'person-outline';
                         }

                         return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#1366B2',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    cardStyle: { backgroundColor: 'white' },
               })}
          >
               <Tab.Screen name="AnaSayfa" component={AnaSayfa} />
               <Tab.Screen name="Rezervasyonlarım" component={Rezervasyonlarım} />
               <Tab.Screen name="Favorilerim" component={Favorilerim} />
               <Tab.Screen name="Profilim" component={ProfileNavigator}
                    options={({ route }) => ({
                         tabBarStyle: ((route) => {  // Tab barı sadece profil sayfasında göster sonrasında gizle
                              const routeName = getFocusedRouteNameFromRoute(route) ?? 'Profil';
                              if (routeName === 'Profil') {
                                   return { display: 'flex' };
                              }
                              return { display: 'none' };
                         })(route),
                    })}/>
          </Tab.Navigator>

     )
}

export default PagesNavigation

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
     },
})