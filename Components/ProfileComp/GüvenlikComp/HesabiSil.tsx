import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../../AppComp/AppButton'
import ModalComponent from '../../AppComp/ModalComponent'
import Ionicons from '@expo/vector-icons/Ionicons';



const HesabiSil = () => {

     const [visible, setVisible] = useState(false)

     return (
          <View style={styles.titleWrapper}>
               <Text style={styles.title}>Hesabı Sil</Text>
               <Text style={styles.text}>
                    Hesabı silerseniz aktif rezervasyonlarınız iptal olmayacaktır ancak kayıtlı tüm teklifleriniz, taşıtlarınız ve fiyatlandırmalarınız silinecektir.
               </Text>

               <View style={styles.buttonWrapper}>

                    <AppButton title='Hesabı Sil'
                         fontSize={20}
                         height={44}
                         width={240}
                         backgroundColor='#DD0808'
                         borderRadius={5}
                         color='white'
                         fontWeight={500}
                         onPress={() => setVisible(true)} />
               </View>

               <ModalComponent visible={visible}
                    ButtonTitle='Hesabı Sil'
                    text='Bu işlem tüm verilerini kalıcı olarak silecek ve geri alınamaz. Emin misin?'
                    title=''
                    onClose={() => setVisible(!visible)} ButtonColor='#DD0808'
                    icon={<Ionicons name="information-circle-outline" size={32} color="#1366B2" />} />

          </View>
     )
}

export default HesabiSil

const styles = StyleSheet.create({
     titleWrapper: {
          width: 332,
          height: 109,
          marginTop: 40,
          gap: 20,
     },
     title: {
          fontSize: 20,
          color: "#1366B2",
          fontWeight: 500,
     },
     text: {
          fontSize: 16,
          lineHeight: 22,
          letterSpacing: 0.4,
     },
     buttonWrapper: {
          alignSelf: "center",
     }
})