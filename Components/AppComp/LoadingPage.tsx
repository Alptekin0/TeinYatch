import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();


const LoadingPage = ({ navigation }: any) => {

     // Bekleme sürelerinde kullanıcıya gösterilecek sayfa(Loading Page)

     const [appIsReady, setAppIsReady] = useState(false);  // istek sonrası veya işlem sonrası beklemelerde kullanıacak daha sonradan redux içine alınmalı.

     useEffect(() => {
          setTimeout(() => {
               navigation.navigate("girisYap")
          }, 2000);
     }, [])


     return (
          <View>
               <Image source={require("../../assets/icons/Yatch.jpg")} style={styles.image} />
               <View style={styles.textContainer}>
                    <Text style={styles.firstText}>Hayalinizdeki Yat Şimdi Sadece Bir Tık Uzağınızda!</Text>
                    <Text style={styles.secondText}> Lüks Yatlar Satın Alın, Kiralayın! </Text>
                    <Text style={styles.thirdText}> İstediğiniz Organizasyonu Planlayın! </Text>
               </View>
          </View>
     )
}

export default LoadingPage

const styles = StyleSheet.create({
     image: {
          width: 350,
          height: 225.5,
          marginTop: 216,
          marginLeft: 22,
     },
     textContainer: {
          width: 302,
          height: 60,
          marginTop: 40.5,
          marginLeft: 45,
          alignItems: "center",
     },
     firstText: {
          fontSize: 13,
          fontFamily: "Nunito",
          fontWeight: "700",
          lineHeight: 19,
          letterSpacing: 1,
          color: "rgba(30, 35, 44)",
     },
     secondText: {
          fontSize: 13,
          fontFamily: "Nunito",
          color: "rgba(30, 35, 44, 0.44)",

     },
     thirdText: {
          color: "rgba(30, 35, 44, 0.16)",
     }

})