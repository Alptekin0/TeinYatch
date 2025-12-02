import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import ImkanlarComp from '../../../Components/AcenteComp/ImkanlarComp'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import AppButton from '../../../Components/AppComp/AppButton'

const EkstraHizmetler = ({ navigation }: any) => {

     const Organizasyonlar = [
          { id: "1", label: "Evlenme Teklifi " },
          { id: "2", label: "Doğum Günü " },
          { id: "3", label: "Kına " },
          { id: "4", label: "Bekarlığa Veda " },
          { id: "5", label: "Toplantı " },
     ];
     const Hizmetler = [
          { id: "1", label: "Servis Hizmeti" },
          { id: "2", label: "Özel Dj" },
          { id: "3", label: "Fotoğraf ve Video Çekimi " },
          { id: "4", label: "Boğazda Lazer Gösterisi" },
     ];
     const YemekMenuleri = [
          { id: "1", label: "Klasik Yemek Menüsü" },
          { id: "2", label: "Kokteyl Menü" },
          { id: "3", label: "Açık Büfe Kahvaltı Menü" },
     ];

     return (
          <View>
               <Header text='Deniz Taşıtı Ekle' />
               <AcenteStepper currentStep={5} />
               <ImkanlarComp icon={<MaterialCommunityIcons name="party-popper" size={24} color="#1366B2" />}
                    title='Organizasyonlar' items={Organizasyonlar} />
               <View style={{ marginTop: 10 }}></View>
               <ImkanlarComp icon={<Fontisto name="cocktail" size={24} color="#1366B2" />}
                    title='Hizmetler' items={Hizmetler} />
               <View style={{ marginTop: 10 }}></View>
               <ImkanlarComp icon={<MaterialCommunityIcons name="food-fork-drink" size={24} color="#1366B2" />}
                    title='Yemek Menüleri' items={YemekMenuleri} />

               <View style={{ marginTop: 10 }}></View>


               <View style={{ alignItems: "center", marginTop: 30, marginBottom: 50 }}>
                    <AppButton width={240}
                         height={44}
                         borderRadius={5}
                         color='white'
                         fontSize={18}
                         title='Kaydet ve Devam et'
                         fontWeight={600}
                         onPress={() => navigation.navigate('Aciklamalar')}
                         backgroundColor='#1366B2' />
               </View>
          </View>
     )
}

export default EkstraHizmetler

const styles = StyleSheet.create({})