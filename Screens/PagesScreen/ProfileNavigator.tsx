import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Kisiselbilgiler, Mesajlarim, Bildirimlerim, İsİlanlari, Guvenlik, SSS, Destek, CikisYap } from "./ProfileScreen/index"
import Profilim from './ProfileScreen/Profilim'


const Stack = createStackNavigator();

const ProfileNavigator = () => {
     return (
          <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
               <Stack.Screen name='Profil' component={Profilim} />
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

export default ProfileNavigator