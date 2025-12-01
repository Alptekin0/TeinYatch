import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import Header from "../../../Components/AppComp/AppPagesHeader"
import AvatarComp from '../../../Components/ProfileComp/AvatarComp'
import Input from '../../../Components/AppComp/Input'
import AppButton from '../../../Components/AppComp/AppButton'
import ModalComponent from '../../../Components/AppComp/ModalComponent'
import FormWrapper from '../../../Components/AppComp/FormWrapper'



const Kisiselbilgiler = () => {

  const [isim, setİsim] = useState("");
  const [soyİsim, setSoyisim] = useState("");
  const [telefon, setTelefon] = useState("");
  const [mail, setMail] = useState("");
  const [dogumTarihi, setDogumTarihi] = useState("");
  const [TelefonNo, setTelefonNo] = useState("");
  const [visible, setVisible] = useState(false);

  return (

    <FormWrapper scrollHeight={280}>

      <View>
        <Header text='Kişisel Bilgilerim' />
        <View style={styles.avatarWrapper}>
          <AvatarComp />
        </View>

        <TouchableOpacity style={styles.degisTextWrapper}>
          <Text style={styles.degisText}>Profil Fotoğrafınızı Değiştirin</Text>
        </TouchableOpacity>

        <View style={styles.inputWrapper}>

          <Input Title='İsim'
            height={47}
            width={330}
            placeholder='İsim'
            keyboardType='default'
            value={isim}
            onChangeText={(text) => setİsim(text)} />

          <Input Title='Soyisim'
            height={47}
            width={330}
            placeholder='Soyisim'
            keyboardType='default'
            value={soyİsim}
            onChangeText={(text) => setSoyisim(text)} />

          <View style={styles.container}>
            <Text style={styles.title}>Telefon Numarası</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>

              <View style={styles.telKodu}>
                <Image style={{ width: 20, height: 20 }} source={require("../../../assets/icons/Turkiye.png")} />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>+90</Text>
              </View>

              <TextInput style={styles.telNoInput}
                value={TelefonNo}
                keyboardType='number-pad'
                onChangeText={(text) => setTelefonNo(text)}
                placeholder='Telefon Numarası'
                maxLength={10}
              />
            </View>
          </View>


          <Input Title='E-Posta'
            height={47}
            width={330}
            placeholder='E-Posta'
            keyboardType='default'
            value={mail}
            onChangeText={(text) => setMail(text)} />

          <Input Title='Doğum Tarihi'
            height={47}
            width={330}
            placeholder='Doğum Tarihi'
            keyboardType='default'
            value={dogumTarihi}
            onChangeText={(text) => setDogumTarihi(text)} />

          <View style={styles.buttonWrapper}>

            <AppButton title='Kaydet'
              fontSize={20}
              height={44}
              width={240}
              backgroundColor='#1366B2'
              borderRadius={5}
              color='white'
              fontWeight={500}
              onPress={() => setVisible(!visible)} />
          </View>


          <ModalComponent title='Başarılı'
            text='Profil Bilgileriniz Başarı ile Oluşturuldu'
            ButtonTitle='Kapat'
            visible={visible}
            onClose={() => setVisible(false)} />
        </View>


      </View>
    </FormWrapper>
  )
}

export default Kisiselbilgiler

const styles = StyleSheet.create({
  avatarWrapper: {
    marginTop: -70,
  },
  degisTextWrapper: {
    alignSelf: "center",
    marginTop: 12,
  },
  degisText: {
    color: "#1366B2",
    fontSize: 16,
    fontWeight: 500,

  },
  inputWrapper: {
    alignSelf: "center",
    marginTop: 40,
    gap: 30,
  },
  buttonWrapper: {
    alignSelf: "center",
    marginTop: 40
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    width: 330,
    height: 72,
    marginBottom: -8,
    marginTop: -8,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#1366B2",
    marginLeft: 2,
    marginBottom: 1
  },
  telKodu: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#1366B2",
    width: 70,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
  },
  telNoInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#1366B2",
    width: 255,
    height: 47
  },
})