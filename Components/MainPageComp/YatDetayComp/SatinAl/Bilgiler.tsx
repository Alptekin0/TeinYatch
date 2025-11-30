import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SatilikYat } from '../../../../Fake-Data/SatilikYatlar/SatilikYat'

interface BilgilerProps {
     yatId: number
}

const Bilgiler = ({ yatId }: BilgilerProps) => {

     const selectedYat = SatilikYat.find((y) => y.id === yatId);

     return (
          <View style={styles.container}>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> İlan Tarihi </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.ilanTarihi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> İlan No </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.ilanNo} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Türü </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.tur} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Marka </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.marka} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Model </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.model} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Üretim Yılı </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.uretimYili} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Boy (metre) </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.boyMetre} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> En (metre) </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.enMetre} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Gövde Malzemesi </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.govdeMalzemesi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Kamera Sayısı </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.kameraSayisi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Yatak Sayısı </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.yatakSayisi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Motor Adedi </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.motorAdedi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Motor Gücü </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.motorGucuHP} HP</Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Yakıt Tipi </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.yakitTipi} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Kimden </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.kimden} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Durumu </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.durumu} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Bandıra </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.bandira} </Text>
               </View>
               <View style={styles.bilgiBlok}>
                    <Text style={styles.bilgiTitle}> Bulunduğu Yer </Text>
                    <Text style={styles.bilgiText}> {selectedYat?.bulunduguYer} </Text>
               </View>
          </View>
     )
}

export default Bilgiler

const styles = StyleSheet.create({
     container: {

     },
     bilgiBlok: {
          width: 353,
          height: 25,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
     },
     bilgiTitle: {
          fontSize: 16,
          fontWeight: 600,
     },
     bilgiText: {
          fontSize: 16,
     },

})