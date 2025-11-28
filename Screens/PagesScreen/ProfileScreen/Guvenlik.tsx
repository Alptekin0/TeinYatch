import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from "../../../Components/AppComp/AppPagesHeader"
import Input from '../../../Components/AppComp/Input'
import Info from '../../../Components/AppComp/Info'
import AppButton from '../../../Components/AppComp/AppButton'
import HesabiSil from '../../../Components/ProfileComp/GüvenlikComp/HesabiSil'
import Feather from '@expo/vector-icons/Feather';
import FormWrapper from '../../../Components/AppComp/FormWrapper'




const Guvenlik = () => {
  const [mevcutSifre, setMevcutSifre] = useState("");
  const [yeniSifre, setYeniSifre] = useState("");
  const [mevcutSifreEye, setMevcutSifreEye] = useState(true);
  const [yeniSifreEye, setYeniSifreEye] = useState(true);

  return (
    <FormWrapper scrollHeight={420}>
      <View>
        <Header text='Güvenlik' />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Şifre Değiştir </Text>
          <Text style={styles.text}>
            Şifreniz en az bir harf, rakam veya özel karakter içermelidir. Ayrıca şifreniz en az 8 karakterden oluşmalıdır.
          </Text>

          <View style={styles.inputWrapper}>

            <Input Title='Mevcut Şifreniz'
              placeholder='Mevcut Şifreniz'
              width={330}
              height={72}
              keyboardType='default'
              secureTextEntry={mevcutSifreEye}
              value={mevcutSifre}
              onChangeText={(text) => setMevcutSifre(text)}
              autoCapitalize='none'
              icon={mevcutSifreEye ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
              onIconPress={() => { setMevcutSifreEye(!mevcutSifreEye) }}

            />
            <Input Title='Yeni Şifreniz'
              placeholder='Yeni Şifreniz'
              width={330}
              height={72}
              keyboardType='default'
              secureTextEntry={yeniSifreEye}
              value={yeniSifre}
              onChangeText={(text) => setYeniSifre(text)}
              autoCapitalize='none'
              icon={yeniSifreEye ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
              onIconPress={() => { setYeniSifreEye(!yeniSifreEye) }}


            />
            <Info text='Güvenliğiniz için adınız, soyadınız, doğum tarihinizi içermeyen bir şifre belirlemenizi öneririz .' />


          </View>

          <View style={{ alignSelf: "center" }}>
            <AppButton title='Kaydet'
              fontSize={20}
              height={44}
              width={240}
              backgroundColor='#1366B2'
              borderRadius={5}
              color='white'
              fontWeight={500}
              onPress={() => ""} />
          </View>

          <HesabiSil />


        </View>
      </View>
    </FormWrapper>
  )
}

export default Guvenlik

const styles = StyleSheet.create({
  titleWrapper: {
    width: 352,
    height: 69,
    marginTop: 25,
    marginLeft: 31,
    gap: 20,
  },
  title: {
    fontSize: 20,
    color: "#1366B2",
    fontWeight: 500,
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: 0.4,
  },
  inputWrapper: {
    gap: 25,
    marginTop: 25,
  }
})