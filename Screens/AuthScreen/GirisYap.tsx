import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import LoginForm from '../../Components/LoginComp/LoginForm'
import TeinYatchText from '../../Components/AppComp/TeinYatchText'


const GirisYap = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icons/Yatch.jpg")} style={styles.image} />
      <TeinYatchText />
      <View style={styles.titleContainer}>
        <LoginForm />
      </View>
    </View>
  )
}

export default GirisYap

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 207.86,
    marginTop: 95,
    marginLeft: 41,
    resizeMode: "contain"
  },
  titleContainer: {
    width: 278,
    height: 56,
    marginTop: -10,
    marginLeft: 57,
    alignItems: "center"
  },
})