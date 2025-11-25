import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import YatOzellikDetay from './YatOzellikDetay'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Feather from '@expo/vector-icons/Feather';
import ModalComponent from '../../AppComp/ModalComponent';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const YatOzellikler = () => {

     const [visible, setVisible] = useState(false)

     return (
          <View>
               <Text style={styles.OzelliklerTitle}>
                    Özellikler
               </Text>
               <YatOzellikDetay ozellik='Taşıt Tipi' tip='Motoryat' icon=<FontAwesome6 name="ship" size={24} color="#1366B2" /> />
               <YatOzellikDetay ozellik='Kapasite' tip='20 kişilik' icon=<FontAwesome6 name="person" size={24} color="#1366B2" /> />
               <YatOzellikDetay ozellik='Marka/Model' tip='Özel Yapım' icon=<FontAwesome6 name="ticket-simple" size={24} color="#1366B2" /> />
               <YatOzellikDetay ozellik='Son Bakım Yılı' tip='2023' icon=<Feather name="settings" size={24} color="#1366B2" /> />

               <TouchableOpacity style={styles.tumunuGorWrapper}>
                    <Text style={styles.tumunuGor} onPress={() => setVisible(true)}>Tümünü Gör</Text>
               </TouchableOpacity>
               <ModalComponent title={'Özellikler\n'}
                    text={'● Air Condition (Klima)\n ● Jeneratör Otomatik\n ● Kaptan\n ● GPS\n ● Navigasyon Derinlik Sensörü\n ● Elektrikli Çapa Vinci\n ● Hidrolik Platform\n ● Bow Thruster (Burun Manevra Pervanesi)\n'}
                    icon={<MaterialCommunityIcons name="anchor" size={24} color="#1366B2" />}
                    ButtonTitle='Kapat'
                    visible={visible}
                    onClose={() => setVisible(false)} />
          </View>
     )
}

export default YatOzellikler

const styles = StyleSheet.create({
     OzelliklerTitle: {
          fontWeight: 600,
          fontSize: 18,
     },
     tumunuGorWrapper: {
          width: 100,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "flex-end",
     },
     tumunuGor: {
          color: "#1366B2",
          fontSize: 16,
     }
})