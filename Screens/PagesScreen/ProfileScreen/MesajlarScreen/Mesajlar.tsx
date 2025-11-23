import { StyleSheet, View } from 'react-native'
import React from 'react'
import Header from "../../../../Components/AppComp/AppPagesHeader"
import MesajlarComp from '../../../../Components/ProfileComp/MesajlarComp'

const kisiler = [
     { id: 1, isim: "Ali yılmaz" },
     { id: 2, isim: "Betül yılmaz" },
     { id: 3, isim: "Azmi Sabun" },
     { id: 4, isim: "Cemalettin BıyıkBüken" },
]

const Mesajlar = ({ navigation }: any) => {
     return (
          <View>
               <Header text='Mesajlarım' />
               <View style={{ marginTop: 20 }}></View>
               <MesajlarComp kisiIsmi={kisiler[0].isim} onPress={() => navigation.navigate("MesajDetay", { isim: kisiler[0].isim })} />
               <MesajlarComp kisiIsmi={kisiler[1].isim} onPress={() => navigation.navigate("MesajDetay", { isim: kisiler[1].isim })} />
               <MesajlarComp kisiIsmi={kisiler[2].isim} onPress={() => navigation.navigate("MesajDetay", { isim: kisiler[2].isim })} />
               <MesajlarComp kisiIsmi={kisiler[3].isim} onPress={() => navigation.navigate("MesajDetay", { isim: kisiler[3].isim })} />
          </View>
     )
}

export default Mesajlar

const styles = StyleSheet.create({})