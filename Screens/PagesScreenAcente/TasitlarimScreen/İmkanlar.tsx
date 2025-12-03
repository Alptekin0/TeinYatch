import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import ImkanlarComp from '../../../Components/AcenteComp/ImkanlarComp'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AppButton from '../../../Components/AppComp/AppButton'
import { useDispatch, useSelector } from "react-redux";
import { AddGuvenlik, AddImkanlar, AddKullanimKosullari } from '../../../Slices/YatEkleBilgileriSlice'


const İmkanlar = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const imkanlar = [
    { id: "1", label: "İç Mekan Hoparlör" },
    { id: "2", label: "Dış Mekan Hoparlör" },
    { id: "3", label: "WC" },
    { id: "4", label: "Yemek Masası ve Sandalyesi" },
  ];
  const GuvenlikEkipmanlari = [
    { id: "1", label: "Can Simidi" },
    { id: "2", label: "Can Yeleği" },
    { id: "3", label: "Acil Durum Yekesi" },
    { id: "4", label: "Tehlike İşaret Fişeği" },
  ];
  const KullanimKosullari = [
    { id: "1", label: "Dışarıdan alkol getirilemez" },
    { id: "2", label: "Masa ve sandalyeler fiyata dahil" },
    { id: "3", label: "Dışarıdan yiyecek içecek getirilemez" },
    { id: "4", label: "Havai fişek yasaktır" },
  ];
  return (
    <ScrollView>
      <Header text='Deniz Taşıtı Ekle' />
      <AcenteStepper currentStep={4} />
      <ImkanlarComp
        icon={<MaterialIcons name="category" size={24} color="#1366B2" />}
        title='İmkanlar'
        items={imkanlar}
        onSelect={(selectedIds) => {
          const fullItems = imkanlar.filter(item => selectedIds.includes(item.id));
          dispatch(AddImkanlar(fullItems));
        }} />


      <ImkanlarComp icon={<FontAwesome name="life-buoy" size={24} color="#1366B2" />}
        title='Güvenlik Ekipmanları'
        items={GuvenlikEkipmanlari}
        onSelect={(selectedIds) => {
          const fullItems = GuvenlikEkipmanlari.filter(item => selectedIds.includes(item.id));
          dispatch(AddGuvenlik(fullItems));
        }} />

      <ImkanlarComp icon={<MaterialIcons name="gavel" size={24} color="#1366B2" />}
        title='Kullanım Koşulları'
        items={KullanimKosullari}
        onSelect={(selectedIds) => {
          const fullItems = KullanimKosullari.filter(item => selectedIds.includes(item.id));
          dispatch(AddKullanimKosullari(fullItems));
        }} />

      <View style={{ alignItems: "center", marginTop: 40, marginBottom: 50 }}>
        <AppButton width={240}
          height={44}
          borderRadius={5}
          color='white'
          fontSize={18}
          title='Kaydet ve Devam et'
          fontWeight={600}
          onPress={() => navigation.navigate('EkstraHizmetler')}
          backgroundColor='#1366B2' />
      </View>

    </ScrollView>
  )
}

export default İmkanlar

const styles = StyleSheet.create({})