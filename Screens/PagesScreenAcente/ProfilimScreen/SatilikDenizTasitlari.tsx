import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import MainPageCard from '../../../Components/ProfileComp/isIlanlariComp/MainPageCard'
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SatilikDenizTasitlari = () => {
  return (
    <View>
      <Header text='Satılık Deniz Taşıtları' />

      <View style={{ marginTop: 30 }}>
        < MainPageCard icon={<Entypo name="magnifying-glass" size={24} color="#1366B2" />}
          title='İlan Ara'
          text='Yüzlerce ilan arasından kendinize en uygununu bulun !'
          onPress={() => ''} />

        < MainPageCard icon={<MaterialCommunityIcons name="file-document-plus-outline" size={24} color="#1366B2" />}
          title='İlan Ver'
          text='Satmak istediğiniz tekneniz için ücretsiz ilan verebilirsiniz '
          onPress={() => ''} />

        < MainPageCard icon={<MaterialCommunityIcons name="file-document-check-outline" size={24} color="#1366B2" />}
          title='İlanlarım'
          text='Verdiğiniz ilanları buradan yönetebilirsiniz'
          onPress={() => ''} />

        < MainPageCard icon={<MaterialCommunityIcons name="shield-plus-outline" size={24} color="#1366B2" />}
          title='Ekspertiz'
          text='Uzman gözünden detaylı hizmet alın !'
          onPress={() => ''} />
      </View>

    </View>
  )
}

export default SatilikDenizTasitlari

const styles = StyleSheet.create({})