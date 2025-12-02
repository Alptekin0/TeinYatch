import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MainPageCard from '../../../Components/ProfileComp/isIlanlariComp/MainPageCard'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Header from '../../../Components/AppComp/AppPagesHeader';


const InsanKaynaklari = () => {
  return (
    <View>
      <Header text='İnsan Kaynakları' />
      <View style={{ marginTop: 30 }}>
        < MainPageCard icon={<AntDesign name="idcard" size={24} color="#1366B2" />}
          title='Personel Ara'
          text='Tekneniz için ihtiyacınız olan personelleri bulun !'
          onPress={() => ''} />

        < MainPageCard icon={<MaterialCommunityIcons name="file-document-plus-outline" size={24} color="#1366B2" />}
          title='İş İlanı Ver'
          text='Tekneniz için ihtiyacınız olan personeller için iş ilanı verebilirsiniz'
          onPress={() => ''} />

        < MainPageCard icon={<MaterialCommunityIcons name="file-document-check-outline" size={24} color="#1366B2" />}
          title='İlanlarım'
          text='Verdiğiniz ilanları buradan yönetebilirsiniz'
          onPress={() => ''} />
      </View>
    </View>
  )
}

export default InsanKaynaklari

const styles = StyleSheet.create({})