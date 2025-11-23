import React from 'react'
import Bildirim from '../../../Components/ProfileComp/BildirimlerComp/Bildirim'
import Header from "../../../Components/AppComp/AppPagesHeader"
import { FlatList, StyleSheet, View } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';



const DATA = [

  {
    id: 1,
    icon: < AntDesign name="check-circle" size={30} color="#24AA18" />,
    bildirimBaslik: 'Rezervasyon Onayı',
    bildirimYazi: 'Rezervasyonunuz onaylandı. Rezervasyonunuzla ilgili detaylara rezervasyonlarım sayfasından ulaşabilirsiniz.',
  },

  {
    id: 2,
    icon: <Feather name="x" size={30} color="#B33434" />,
    bildirimBaslik: 'Rezervasyon İptali',
    bildirimYazi: 'Rezervasyon iptal isteğiniz onaylanmıştır. Geri ödeme en kısa sürede hesabınıza aktarılacaktır.',
  },

  {
    id: 3,
    icon: < Feather name="trending-down" size={30} color="#1366B2" />,
    bildirimBaslik: 'Fiyat Alarmı!',
    bildirimYazi: 'İlgilendiğiniz satılık tekne ilanının fiyatı düştü. Bu bildirime tıklayarak detaylara ulaşabilirsiniz.',
  },

  {
    id: 4,
    icon: <MaterialCommunityIcons name="fruit-watermelon" size={34} color="#a01b1bff" />,
    bildirimBaslik: 'Yazın Keyfini Çıkarın',
    bildirimYazi: 'Bizim için en güzel tatil sevdiklerinizle geçirdiğiniz vakitlerdir.',
  },

  {
    id: 5,
    icon: <FontAwesome6 name="ship" size={30} color="#237EEF" />,
    bildirimBaslik: 'Yat Keyfiniz Kış Mevsiminde de Sürsün',
    bildirimYazi: 'Kışa uygun yatlar ile kış mevsiminde de keyfinize devam edin !',
  },

  {
    id: 6,
    icon: <MaterialCommunityIcons name="ship-wheel" size={35} color="#457570ff" />,
    bildirimBaslik: 'Yeni Yat teklifleri sizinle',
    bildirimYazi: 'Yepyeni yatlar katalogumuza eklendi. Değerlendirmek isteyebilirsin !',
  },

  {
    id: 7,
    icon: <FontAwesome6 name="ship" size={30} color="#237EEF" />,
    bildirimBaslik: 'Yat Keyfiniz Kış Mevsiminde de Sürsün',
    bildirimYazi: 'Kışa uygun yatlar ile kış mevsiminde de keyfinize devam edin !',
  },

]


const Bildirimlerim = () => {
  return (
    <View style={styles.container}>
      <Header text='Bildirimlerim' />

      <FlatList data={DATA}

        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item }) => (
          <Bildirim
            icon={item.icon}
            bildirimBaslik={item.bildirimBaslik}
            bildirimYazi={item.bildirimYazi}
          />
        )}
      />

    </View>
  )
}

export default Bildirimlerim

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  }
})
