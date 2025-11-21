import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../Components/AppComp/LoadingPage'
import { GirisYap, Kaydol, SifremiUnuttum, SifreYenilemeMail, SifreYenilemeTelefon, DogrulamaMail, DogrulamaTelefon, SifreniziBelirleyin } from '../Screens/AuthScreen'


export type AuthStackParamList = {
     loadingPage: undefined;
     girisYap: undefined;
     kaydol: undefined;
     sifremiUnuttum: undefined;
     SifreYenilemeMail: undefined;
     SifreYenilemeTelefon: undefined;
     DogrulamaMail: undefined;
     DogrulamaTelefon: undefined;
     SifreniziBelirleyin: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation = () => {

     // Kullanıcı uygulamaya ilk girdiği zaman karşılaşacağı giriş yap ve kaydol sayfaları navigator'ü

     return (
          <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#ffffff' } }}>
               {/*    <Stack.Screen name="loadingPage" component={LoadingPage} /> */}
               <Stack.Screen name="girisYap" component={GirisYap} />
               <Stack.Screen name="kaydol" component={Kaydol} />
               <Stack.Screen name="sifremiUnuttum" component={SifremiUnuttum} />
               <Stack.Screen name="SifreYenilemeMail" component={SifreYenilemeMail} />
               <Stack.Screen name="SifreYenilemeTelefon" component={SifreYenilemeTelefon} />
               <Stack.Screen name="DogrulamaMail" component={DogrulamaMail} />
               <Stack.Screen name="DogrulamaTelefon" component={DogrulamaTelefon} />
               <Stack.Screen name="SifreniziBelirleyin" component={SifreniziBelirleyin} />
          </Stack.Navigator>
     )
}

export default AuthNavigation

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
     },
})