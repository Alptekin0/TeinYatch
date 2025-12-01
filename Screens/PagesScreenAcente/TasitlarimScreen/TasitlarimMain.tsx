import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppButton from '../../../Components/AppComp/AppButton'

const TasitlarimMain = ({ navigation }: any) => {
     return (
          <View>
               <Text style={styles.pageTitle}>Deniz Taşıtlarım</Text>
               <Image style={styles.image} source={require("../../../assets/icons/acenteMain.png")} />
               <Text style={styles.title}>Kayıtlı taşıt bulunmuyor !</Text>
               <Text style={styles.text}>Henüz taşıt eklemediniz. Taşıtınızı eklemeye{'\n'} başlayın.</Text>
               <View style={styles.buttonWrapper}>
                    <AppButton width={240}
                         height={44}
                         backgroundColor='#1366B2'
                         borderRadius={5}
                         color='white'
                         title='Taşıt Ekle'
                         fontSize={19}
                         fontWeight={600}
                         onPress={() => navigation.navigate('DenizTasitiEkle')} />
               </View>
          </View>
     )
}

export default TasitlarimMain

const styles = StyleSheet.create({
     pageTitle: {
          fontSize: 24,
          alignSelf: "center",
          marginTop: 60,
          letterSpacing: 0.5,
          fontWeight: 400,
     },
     image: {
          width: 240,
          height: 240,
          marginTop: 85,
          marginLeft: 77,
     },
     title: {
          fontSize: 22,
          fontWeight: 700,
          alignSelf: "center",
          color: "#4A5568",
          letterSpacing: 1,
     },
     text: {
          fontSize: 15,
          color: "#4A5568",
          marginTop: 20,
          alignSelf: "center",
          letterSpacing: 1,
          textAlign: "center",
     },
     buttonWrapper: {
          alignSelf: "center",
          marginTop: 50,
     }
})