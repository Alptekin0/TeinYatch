import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import ProfileMenu from '../../../Components/ProfileComp/ProfileMenu'
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvatarComp from '../../../Components/ProfileComp/AvatarComp';

const DATA = [
  { id: 1, text: 'Kişisel Bilgilerim', icon: <Feather name="user" size={27} color="black" />, route: "Kisiselbilgiler" },
  { id: 2, text: 'Mesajlarım', icon: <Feather name="message-circle" size={27} color="black" />, route: "Mesajlarim" },
  { id: 3, text: 'Bildirimlerim', icon: <Feather name="bell" size={27} color="black" />, route: "Bildirimlerim" },
  { id: 4, text: 'İş İlanları', icon: <SimpleLineIcons name="briefcase" size={27} color="black" />, route: "İsİlanlari" },
  { id: 5, text: 'Güvenlik', icon: <Feather name="lock" size={27} color="black" />, route: "Guvenlik" },
  { id: 6, text: 'Sıkça Sorulan Sorular', icon: <FontAwesome6 name="circle-question" size={27} color="black" />, route: "SSS" },
  { id: 7, text: 'Destek', icon: <Feather name="phone" size={27} color="black" />, route: "Destek" },
  { id: 8, text: 'Çıkış Yap', icon: <MaterialIcons name="logout" size={27} color="black" />, route: "CikisYap" },
]

const Profilim = () => {
  return (
    <View style={styles.container}>
      <AvatarComp />
      <Text style={styles.userName}>Test User</Text>

      <FlatList data={DATA}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ProfileMenu text={item.text} icon={item.icon} route={item.route} />)}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Profilim

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  userName: {
    marginTop: 12,
    alignSelf: "center",
    fontSize: 24,
    color: "#1366B2",
    marginBottom: 10,
  }
})