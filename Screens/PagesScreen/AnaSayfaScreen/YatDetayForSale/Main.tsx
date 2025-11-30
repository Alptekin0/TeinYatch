import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { SatilikYat } from '../../../../Fake-Data/SatilikYatlar/SatilikYat';
import { ScrollView } from 'react-native-gesture-handler';
import YatDetayTitle from '../../../../Components/MainPageComp/YatDetayComp/YatDetayTitle';
import YatOzellikler from '../../../../Components/MainPageComp/YatDetayComp/YatOzellikler';
import YatImknalar from '../../../../Components/MainPageComp/YatDetayComp/YatImknalar';
import KiralamaSartlari from '../../../../Components/MainPageComp/YatDetayComp/KiralamaSartlari';
import KullanimSartlari from '../../../../Components/MainPageComp/YatDetayComp/KullanimSartlari';
import YorumlamaVePuanlama from '../../../../Components/MainPageComp/YatDetayComp/YorumlamaVePuanlama';
import FiyatVeRezervEt from '../../../../Components/MainPageComp/YatDetayComp/FiyatVeRezervEt';
import Bilgiler from '../../../../Components/MainPageComp/YatDetayComp/SatinAl/Bilgiler';
import AraMesajButton from '../../../../Components/MainPageComp/YatDetayComp/SatinAl/AraMesajButton';

export default function Main({ route, navigation }: any) {

     const { yatId } = route.params;
     const selectedYat = SatilikYat.find((y) => y.id === yatId);


     return (
          <View style={styles.container}>
               <Image style={styles.image} source={selectedYat?.images[0]} />

               <View style={styles.infoContainer}>

                    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>


                         <YatDetayTitle title={selectedYat?.title} location={selectedYat?.bulunduguYer} />

                         <View style={styles.divider}></View>

                         <View style={styles.aciklamaWrapper}>
                              <Text style={styles.aciklamaTitle}>
                                   Açıklama
                              </Text>
                              <Text style={styles.aciklamaText}>
                                   Tein Yat ile mavi suların derinliklerine doğru unutulmaz bir yolculuğa çıkmaya hazır mısınız?
                                   Yatımız, lüks ve konforun mükemmel bir kombinasyonunu...
                              </Text>
                         </View>

                         <View style={styles.divider}></View>

                         <Bilgiler yatId={yatId} />
                         <View style={styles.divider}></View>

                         <YatImknalar />
                         <View style={styles.divider}></View>

                         <AraMesajButton />




                    </ScrollView>
               </View>
               <FiyatVeRezervEt fiyat={selectedYat?.fiyat} onPress={() => navigation.navigate("Ekspertiz")} buttonTitle='Satın Al' hour='' />
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     image: {
          width: 393,
          height: 299,
     },
     infoContainer: {
          width: "100%",
          flex: 1,
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
          paddingTop: 15,
          paddingHorizontal: 12,
          marginTop: -20,
          backgroundColor: "white",
     },
     divider: {
          width: 380,
          height: 1,
          alignSelf: "center",
          backgroundColor: "#C9D2D6",
          marginTop: 15,
          marginBottom: 8,
     },
     aciklamaWrapper: {
          marginTop: 10,
          gap: 10,
     },
     aciklamaTitle: {
          fontWeight: 600,
          fontSize: 18,
     },
     aciklamaText: {
          fontSize: 15,
     },
})