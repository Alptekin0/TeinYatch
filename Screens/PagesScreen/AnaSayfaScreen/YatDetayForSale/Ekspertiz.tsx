import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../Components/AppComp/AppPagesHeader'
import Input from '../../../../Components/AppComp/Input'
import EkspertizPaket from '../../../../Components/MainPageComp/YatDetayComp/SatinAl/EkspertizPaket'
import AppButton from '../../../../Components/AppComp/AppButton'


const Ekspertiz = ({ navigation }: any) => {

     const [sehir, setSehir] = useState("");

     return (
          <View>
               <Header text='Ekspertiz' />
               <Text style={styles.title}> Uzman gözünden detaylı ve avantajlı ekspertiz paketleri ile deniz taşıtınızı güvenle alın ! </Text>

               <View style={styles.inputWrapper}>
                    <Input width={365}
                         height={72}
                         Title='Şehir'
                         placeholder='Şehir Seçiniz'
                         keyboardType='default'
                         value={sehir}
                         onChangeText={(text) => setSehir(text)} />
                    <Input width={365}
                         height={72}
                         Title='Bölge (Opsiyonel)'
                         placeholder='Bölge Seçiniz'
                         keyboardType='default'
                         value={sehir}
                         onChangeText={(text) => setSehir(text)} />
               </View>

               <EkspertizPaket />

               <View style={styles.buttonWrapper}>
                    <AppButton width={350}
                         height={48}
                         backgroundColor='#1366B2'
                         borderRadius={5}
                         color='white'
                         fontSize={18}
                         title='Ekspertiz Talep Et'
                         fontWeight={600}
                         onPress={() => navigation.navigate('Odeme')} />
               </View>


          </View>
     )
}

export default Ekspertiz

const styles = StyleSheet.create({
     title: {
          fontSize: 24,
          color: "#1366B2",
          alignSelf: "center",
          textAlign: "center",
          marginTop: 40,
          fontWeight: 300,
     },
     inputWrapper: {
          alignSelf: "center",
          marginTop: 30,
          gap: 20,
     },
     buttonWrapper: {
          alignSelf: "center",
          marginTop: 165,
     }
})