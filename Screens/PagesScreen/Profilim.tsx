import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ProfileMenu from '../../Components/ProfileComp/ProfileMenu'
import Feather from '@expo/vector-icons/Feather';

const Profilim = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../../assets/icons/user.png')} />
      <Text style={styles.userName}>Test User</Text>
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
      <ProfileMenu text='Kişisel Bilgilerim' icon={<Feather name="user" size={27} color="black" />} />
    </View>
  )
}

export default Profilim

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  avatar: {
    width: 120,
    height: 120,
    marginTop: 86,
    marginLeft: 136,
    borderWidth: 1,
    borderRadius: 60,
    backgroundColor: "#F2F9FF",
    borderColor: "#CCE7FF",
  },
  userName: {
    marginTop: 12,
    alignSelf: "center",
    fontSize: 24,
    color: "#1366B2",
    marginBottom: 10,
  }
})