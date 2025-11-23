import { StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import AppButton from '../../Components/AppComp/AppButton'
import Input from '../../Components/AppComp/Input'
import { useDispatch, useSelector } from 'react-redux'
import { setEye, setEye2 } from '../../Slices/EyeSlice'
import Feather from '@expo/vector-icons/Feather';
import ModalComponent from '../../Components/AppComp/ModalComponent'


const SifreniziBelirleyin = ({ navigation }: any) => {

  const [yeniSifre, setYeniSifre] = useState("");
  const [yeniSifreTekrar, setYeniSifreTekrar] = useState("");
  const [visible, setVisible] = useState(false);


  const dispatch = useDispatch();

  const eye = useSelector((state: any) => state.Eye.eye)
  const eye2 = useSelector((state: any) => state.Eye.eye2)

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Yeni Şifrenizi Belirleyin</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          Şifrenizi Minimum 6 karakter{'\n'}
          1 rakam ve 1 harf olacak şekilde{'\n'}
          belirleyiniz.
        </Text>
      </View>

      <View style={styles.InputWrapper}>
        <Input Title='Yeni Şifreniz'
          placeholder='Lütfen yeni şifrenizi belirleyin.'
          height={72}
          width={330}
          keyboardType='default'
          onChangeText={(text) => { setYeniSifre(text) }}
          value={yeniSifre}
          icon={eye ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
          onIconPress={() => { dispatch(setEye(!eye)) }}
          secureTextEntry={eye}
        />
        <Input Title='Şifreyi Tekrarla'
          placeholder='Lütfen yeni şifrenizi tekrar girin.'
          height={72}
          width={330}
          keyboardType='default'
          onChangeText={(text) => { setYeniSifreTekrar(text) }}
          value={yeniSifreTekrar}
          icon={eye2 ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
          onIconPress={() => { dispatch(setEye2(!eye2)) }}
          secureTextEntry={eye2}
        />

      </View>

      <View style={styles.backButtonWrapper}>
        <AppButton title='Şifremi Yenile'
          paddingHorizontal={32}
          paddingVertical={8}
          backgroundColor='#0568C3'
          borderRadius={8}
          color='white'
          width={330}
          height={40}
          fontSize={16}
          fontWeight={600}
          onPress={() => setVisible(true)}
        />

        <ModalComponent title=' Şifreniz Yenilendi '
          text='Yeni şifrenizle giriş yapabilirsiniz'
          ButtonTitle='Giriş Yap'
          visible={visible}
          onClose={() => { setVisible(false); navigation.navigate("girisYap"); }} />

      </View>
    </View>
  )
}

export default SifreniziBelirleyin

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    width: 309,
    height: 37,
    marginTop: 186,
    marginLeft: 37,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#1366B2",
    fontWeight: 300,
    fontSize: 32,
  },
  textWrapper: {
    width: 309,
    height: 54,
    marginTop: 28,
    marginLeft: 37,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
    color: "#1E232C",
    lineHeight: 20,
    letterSpacing: 15 * 0.01,
    textAlign: "center"
  },
  InputWrapper: {
    width: 320,
    height: 150,
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 80,
  },
  backButtonWrapper: {
    width: 330,
    height: 40,
    alignSelf: "center",
    marginTop: 80,
  }
})