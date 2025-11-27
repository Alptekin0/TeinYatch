import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Info from '../AppComp/Info';
import Ionicons from '@expo/vector-icons/Ionicons';


const ClosableAreaEFT = () => {
     const [close, setClose] = useState(true);

     const [height, setHeight] = useState(48);
     const [display, setDisplay] = useState<'flex' | 'none'>('none');

     const [color, setColor] = useState('#1366B2');

     const AreaClose = () => {
          setClose(true);
          setHeight(48);
          setDisplay('none');
          setColor('black');
     }

     const AreaOpen = () => {
          setHeight(320);
          setClose(false);
          setDisplay('flex');
          setColor('#1366B2');
     }

     console.log(close);

     return (
          <View style={[styles.container, { height }]}>

               <View style={styles.titleWrapper}>
                    <MaterialCommunityIcons name="bank-transfer" size={20} color={color} />
                    <Text style={[styles.title, { color }]}>EFT/Havale ile Ödeme</Text>
                    {close ?
                         <TouchableOpacity style={styles.button} onPress={AreaOpen}>
                              <SimpleLineIcons name="arrow-down" size={22} color={color} />
                         </TouchableOpacity>
                         :
                         <TouchableOpacity style={styles.button} onPress={AreaClose}>
                              <SimpleLineIcons name="arrow-up" size={22} color={color} />
                         </TouchableOpacity>
                    }
               </View>
               <View style={[styles.bodyWrapper, { display }]}>
                    <Text style={styles.bodyTitle}>Hesap Bilgileri : </Text>
                    <Text style={styles.bodyText}>
                         Garanti Bankası {'\n'}{'\n'}
                         Tein Teknoloji A.Ş. {'\n'}{'\n'}
                         TR XXXXXXXXXXXXXXX {'\n'}{'\n'}
                    </Text>
                    <View style={styles.warning}>
                         <Ionicons name="warning-outline" size={24} color={color} />
                         <Text>
                              Açıklama kısmına mutlaka Rezervasyon Ad,{'\n'}Soyad yazınız.{'\n'}Alıcı olarak mutlaka Tein Teknoloji olarak{'\n'}belirtiniz.
                         </Text>
                    </View>
               </View>
          </View>
     )
}

export default ClosableAreaEFT

const styles = StyleSheet.create({
     container: {
          width: 356,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignItems: "center",
          padding: 10
     },
     titleWrapper: {
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     button: {
          width: 40,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
     },
     title: {
          fontWeight: 500,
          fontSize: 18,
     },
     bodyWrapper: {
          width: "100%",
          height: 260,
          padding: 20,
          alignItems: "flex-start",
          justifyContent: "flex-start",
     },
     bodyTitle: {
          fontSize: 20,
          color: "#1366B2",
     },
     bodyText: {
          marginTop: 20,
          fontSize: 18,
     },
     warning: {
          flexDirection: "row",
          alignItems: "center",
          gap: 15
     }
})