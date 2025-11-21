import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../../Components/AppComp/Input'
import AppButton from '../../Components/AppComp/AppButton'

const DogrulamaMail = ({ navigation }: any) => {

  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Şifre Yenileme</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          Şifre yenileme bağlantısını{'\n'}gönderebilmemiz için e-posta{'\n'}adresinize ihtiyacımız var.
        </Text>
      </View>

      <View style={styles.inputWrapper}>
        <Input Title='E-Mail'
          height={72}
          width={330}
          keyboardType='email-address'
          placeholder='E-Mail'
          onChangeText={(text) =>
            setEmail(text)} value={email} />
      </View>

      <View style={styles.buttonWrapper}>
        <AppButton width={330}
          height={40}
          onPress={() => (navigation.navigate("SifreYenilemeMail"))}
          paddingHorizontal={32}
          paddingVertical={8}
          title='Devam Et'
          color='white'
          fontSize={16}
          fontWeight={600}
          backgroundColor='#0568C3'
          borderRadius={8} />

        <AppButton width={330}
          height={40}
          onPress={() => (navigation.navigate("sifremiUnuttum"))}
          paddingHorizontal={32}
          paddingVertical={8}
          title='Önceki sayfaya dön'
          color='white'
          fontSize={16}
          fontWeight={600}
          backgroundColor='#0568C3'
          borderRadius={8} />
      </View>

    </View >
  )
}

export default DogrulamaMail

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleWrapper: {
    width: 331,
    height: 45,
    marginTop: 186,
    marginLeft: 37,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    color: "#1366B2",
    fontWeight: 300,
    fontSize: 39,
  },
  textWrapper: {
    width: 330,
    height: 69,
    marginTop: 22,
    marginLeft: 38,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
    color: "#1E232C",
    lineHeight: 20,
    letterSpacing: 15 * 0.02,
  },
  inputWrapper: {
    alignSelf: "center",
    marginTop: 100,
  },
  buttonWrapper: {
    alignSelf: "center",
    width: 340,
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 150,
  }
})