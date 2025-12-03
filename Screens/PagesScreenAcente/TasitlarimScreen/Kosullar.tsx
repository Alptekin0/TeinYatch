import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import Input from '../../../Components/AppComp/Input'
import AppButton from '../../../Components/AppComp/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { AddiptalSuresi, AddKiralamaSuresi, AddOzelGun } from '../../../Slices/YatEkleBilgileriSlice'

const Kosullar = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const iptalSuresi = useSelector((state: any) => state.YatEkleBilgileri.iptalSuresi);
  const kiralmaSuresi = useSelector((state: any) => state.YatEkleBilgileri.kiralmaSuresi);
  const OzelGun = useSelector((state: any) => state.YatEkleBilgileri.OzelGun);

  return (
    <View>
      <Header text='Deniz Taşıtı Ekle' />
      <AcenteStepper currentStep={3} />

      <View style={styles.inputWrapper}>
        <Input width={365}
          height={72}
          Title='Ücretsiz İptal Süresi (Gün)'
          placeholder='Ücretsiz İptal Süresi Belirleyiniz.'
          keyboardType='number-pad'
          value={iptalSuresi}
          onChangeText={(text) => dispatch(AddiptalSuresi(text))} 
          maxLength={2}/>

        <View style={{ marginTop: 20 }}></View>

        <Input width={365}
          height={72}
          Title='Minimum Kiralama Süresi (saat)'
          placeholder='Minimum Kiralama Süresi Belirleyiniz.'
          keyboardType='number-pad'
          value={kiralmaSuresi}
          onChangeText={(text) => dispatch(AddKiralamaSuresi(text))} 
          maxLength={2}/>

        <View style={{ marginTop: 20 }}></View>

        <Input width={365}
          height={72}
          Title='Özel Günler İçin Minimum Kiralama Süresi (saat)'
          placeholder='Minimum kiralama süresi belirleyiniz'
          keyboardType='number-pad'
          value={OzelGun}
          onChangeText={(text) => dispatch(AddOzelGun(text))}
          maxLength={2} />
      </View>

      <View style={{ alignItems: "center", marginTop: 280 }}>
        <AppButton width={240}
          height={44}
          borderRadius={5}
          color='white'
          fontSize={18}
          title='Kaydet ve Devam et'
          fontWeight={600}
          onPress={() => navigation.navigate('İmkanlar')}
          backgroundColor='#1366B2' />
      </View>
    </View>
  )
}

export default Kosullar

const styles = StyleSheet.create({
  inputWrapper: {
    alignSelf: "center",
    marginTop: 20,
  }
})