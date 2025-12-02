import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Tasitlarim from '../Screens/PagesScreenAcente/Tasitlarim';
import Rezervasyonlar from '../Screens/PagesScreenAcente/Rezervasyonlar';
import Odemeler from '../Screens/PagesScreenAcente/Odemeler';
import Profilim from '../Screens/PagesScreenAcente/Profilim';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const PagesNavigationAcente = () => {

     // Acente uygulamaya giriş yaptıktan sonra karşılaşacağı sayfaların navigatorü

     return (

          <Tab.Navigator
               screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {

                         if (route.name === 'Tasitlarim') {
                              return <FontAwesome6 name="ship" size={size} color={color} />
                         } else if (route.name === 'Rezervasyonlar') {
                              return <Ionicons name="help-buoy-outline" size={size} color={color} />;
                         } else if (route.name === 'Odemeler') {
                              return <FontAwesome6 name="money-bills" size={size} color={color} />;
                         } else if (route.name === 'Profilim') {
                              return <Ionicons name={'person-outline'} size={size} color={color} />;
                         }


                    },
                    tabBarActiveTintColor: '#1366B2',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    sceneContainerStyle: { backgroundColor: '#fff' },
               })}

          >
               <Tab.Screen name='Tasitlarim' component={Tasitlarim}
                    options={({ route }) => ({
                         tabBarStyle: ((route) => {  // Tab barı sadece profil sayfasında göster sonrasında gizle
                              const routeName = getFocusedRouteNameFromRoute(route) ?? 'TasitlarimMain';
                              if (routeName === 'TasitlarimMain') {
                                   return { display: 'flex' };
                              }
                              return { display: 'none' };
                         })(route),
                    })}
               />
               <Tab.Screen name='Rezervasyonlar' component={Rezervasyonlar} />
               <Tab.Screen name='Odemeler' component={Odemeler} />
               <Tab.Screen name='Profilim' component={Profilim}
                    options={({ route }) => ({
                         tabBarStyle: ((route) => {  // Tab barı sadece profil sayfasında göster sonrasında gizle
                              const routeName = getFocusedRouteNameFromRoute(route) ?? 'ProfilimMain';
                              if (routeName === 'ProfilimMain') {
                                   return { display: 'flex' };
                              }
                              return { display: 'none' };
                         })(route),
                    })} />
          </Tab.Navigator>

     )
}

export default PagesNavigationAcente

const styles = StyleSheet.create({})