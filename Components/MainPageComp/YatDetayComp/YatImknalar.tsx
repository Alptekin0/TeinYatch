import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import YatOzellikDetay from './YatOzellikDetay'
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import ModalComponent from '../../AppComp/ModalComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const YatImknalar = () => {
     const [visible, setVisible] = useState(false);
     return (
          <View>
               <Text style={styles.ImkanlarTitle}>
                    İmkanlar
               </Text>

               <YatOzellikDetay icon={<Feather name="wifi" size={24} color="#1366B2" />}
                    ozellik='Wi-fi'
                    tip='Var' />
               <YatOzellikDetay icon={<Entypo name="sound" size={24} color="#1366B2" />}
                    ozellik={'İç/Dış Mekan \nHoparlör'}
                    tip='Var' />
               <YatOzellikDetay icon={<Entypo name="lifebuoy" size={24} color="#1366B2" />}
                    ozellik={'Güvenlik \nEkipmanları'}
                    tip='Var' />

               <TouchableOpacity style={styles.tumunuGorWrapper} onPress={() => setVisible(true)}>
                    <Text style={styles.tumunuGor}>Tümünü Gör</Text>
               </TouchableOpacity>

               <ModalComponent title={'İmkanlar\n'}
                    text={'● Lüks Salon\n ● TV\n ● Uydu Yayını\n ● Bluetooth Hoparlör\n ● Buzdolabı\n ● Mutfak (Ocak + Fırın)\n ● Yemek Masası\n ● İç Duş & WC\n ● Geniş Güneşlenme Minderleri\n ● Arka Oturma Grubu\n ● Bimini (Gölgelik)\n ● Duş (Dış Mekan)\n'}
                    icon={<MaterialCommunityIcons name="anchor" size={24} color="#1366B2" />}
                    ButtonTitle='Kapat'
                    visible={visible}
                    onClose={() => setVisible(false)} />
          </View>
     )
}

export default YatImknalar

const styles = StyleSheet.create({
     ImkanlarTitle: {
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
     },
})