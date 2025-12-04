import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { yachts } from '../../../Fake-Data/KiralikYatlar/yat';
import YatDetayTitle from '../../../Components/MainPageComp/YatDetayComp/YatDetayTitle';
import YatOzellikler from '../../../Components/MainPageComp/YatDetayComp/YatOzellikler';
import YatImknalar from '../../../Components/MainPageComp/YatDetayComp/YatImknalar';
import KiralamaSartlari from '../../../Components/MainPageComp/YatDetayComp/KiralamaSartlari';
import KullanimSartlari from '../../../Components/MainPageComp/YatDetayComp/KullanimSartlari';
import YorumlamaVePuanlama from '../../../Components/MainPageComp/YatDetayComp/YorumlamaVePuanlama';
import FiyatVeRezervEt from '../../../Components/MainPageComp/YatDetayComp/FiyatVeRezervEt';
import { useDispatch } from 'react-redux';
import { setYatId } from '../../../Slices/SelectedYat';



const YatDetay = ({ navigation }: any) => {

     const route = useRoute<any>();

     const { yatId } = route.params; // Tıklanılan yatın id'sini aldık.

     const selectedYachts = yachts.find((item) => item.id == yatId)  // Verilerimiz arasından id'si aynı olan yatı çektik.

     const dispatch = useDispatch();
     dispatch(setYatId(selectedYachts))


     if (!selectedYachts) {  // bu kısım eğer yat yoksa hata versin diye attık.
          return (
               <View>
                    <Text>Yat bulunamadı</Text>
               </View>
          );
     }

     return (
          <View style={styles.container}>
               <Image style={styles.image} source={selectedYachts.images[0]} />

               <View style={styles.infoContainer}>

                    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingBottom: 40 }} showsVerticalScrollIndicator={false}>


                         <YatDetayTitle id={selectedYachts.id} title={selectedYachts.title} location={selectedYachts.location} />

                         <View style={styles.divider}></View>

                         <View style={styles.hakkindaWrapper}>
                              <Text style={styles.HakkindaTitle}>
                                   Hakkında
                              </Text>
                              <Text style={styles.HakkindaText}>
                                   Tein Yat ile mavi suların derinliklerine doğru unutulmaz bir yolculuğa çıkmaya hazır mısınız?
                                   Yatımız, lüks ve konforun mükemmel bir kombinasyonunu...
                              </Text>
                         </View>

                         <View style={styles.divider}></View>

                         <YatOzellikler />
                         <View style={styles.divider}></View>

                         <YatImknalar />
                         <View style={styles.divider}></View>

                         <KiralamaSartlari />
                         <View style={styles.divider}></View>

                         <KullanimSartlari />
                         <View style={styles.divider}></View>

                         <YorumlamaVePuanlama puan={selectedYachts.rating} />


                    </ScrollView>
               </View>
               <FiyatVeRezervEt fiyat={selectedYachts.price} onPress={() => navigation.navigate("RezervEt")} hour='/saat' buttonTitle='Rezervasyon Yap' />
          </View>
     )
}

export default YatDetay

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
     hakkindaWrapper: {
          marginTop: 10,
          gap: 10,
     },
     HakkindaTitle: {
          fontWeight: 600,
          fontSize: 18,
     },
     HakkindaText: {
          fontSize: 15,
     },
})