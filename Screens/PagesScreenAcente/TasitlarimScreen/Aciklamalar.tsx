import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import Input from '../../../Components/AppComp/Input'
import Info from '../../../Components/AppComp/Info'
import AppButton from '../../../Components/AppComp/AppButton'



const Aciklamalar = ({ navigation }: any) => {
  const [aciklama, setAciklama] = useState('');
  return (
    <View>
      <Header text='Deniz Taşıtı Ekle' />
      <AcenteStepper currentStep={6} />
      <View style={{ marginLeft: 10, marginTop: 20 }}>
        <Info text='Burada müşterilerinizin sizi daha iyi tanıması için şirketiniz ve taşıtınız hakkında daha fazla açıklama yazabilirsiniz.' heigth={50} />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={{ fontSize: 16, color: "#1366B2", marginBottom: 2, }}>Açıklama</Text>
        <TextInput style={styles.input} placeholder='Açıklamanızı buraya yazabilirsiniz.' multiline textAlignVertical="top" maxLength={1500} />
      </View>
      <View style={{ alignItems: "center", marginTop: 30, marginBottom: 50 }}>
        <AppButton width={240}
          height={44}
          borderRadius={5}
          color='white'
          fontSize={18}
          title='Kaydet ve Devam et'
          fontWeight={600}
          onPress={() => navigation.navigate('Fotograflar')}
          backgroundColor='#1366B2' />
      </View>
    </View>
  )
}

export default Aciklamalar

const styles = StyleSheet.create({
  input: {
    width: 368,
    height: 140,
    borderWidth: 1,
    borderColor: "#1366B2",
    borderRadius: 5,
    padding: 10,
  },
  inputWrapper: {
    alignSelf: "center",
    marginTop: 20,
  }
})