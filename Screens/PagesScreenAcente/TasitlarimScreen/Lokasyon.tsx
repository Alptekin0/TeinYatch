import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import Header from '../../../Components/AppComp/AppPagesHeader'
import Info from '../../../Components/AppComp/Info'
import Input from '../../../Components/AppComp/Input'
import Ionicons from '@expo/vector-icons/Ionicons';
import AppButton from '../../../Components/AppComp/AppButton'
import FormWrapper from '../../../Components/AppComp/FormWrapper'

const Lokasyon = ({ navigation }: any) => {

  const [sehir, setSehir] = useState('');
  const [bulunduguLiman, setBulunduguLiman] = useState('');
  const [digerLimanlar, setDigerLimanlar] = useState('');

  const [check, setCheck] = useState(false);


  return (
    <FormWrapper scrollHeight={150}>

      <View>
        <Header text='Deniz Taşıtı Ekle' />
        <AcenteStepper currentStep={1} />
        <View style={{ marginLeft: 10, marginTop: 10, }}>
          <Info text='Burada taşıtınızın bulunduğu ve gidebileceği diğer liman seçimlerini yapabilirsiniz.' />
        </View>

        <View style={{ marginTop: 40, alignSelf: "center", }}>
          <Input Title='Şehir'
            placeholder='Şehir Seçiniz'
            height={72}
            width={365}
            value={sehir}
            onChangeText={(text) => setSehir(text)}
            keyboardType='default'
          />
          <Input Title='Bulunduğu Liman'
            placeholder='Liman Seçiniz'
            height={72}
            width={365}
            value={bulunduguLiman}
            onChangeText={(text) => setBulunduguLiman(text)}
            keyboardType='default'
          />

        </View>



        <TouchableOpacity style={styles.radioButtonWrapper} onPress={() => setCheck(!check)}>
          {check ? <Ionicons name="radio-button-on" size={24} color="black" /> : <Ionicons name="radio-button-off" size={24} color="black" />}
          <Text style={{ marginLeft: 10 }}>Farklı bir limandan binilebilir mi ?</Text>
        </TouchableOpacity>

        {
          check ?
            <View style={{ alignSelf: "center", marginTop: 10, }}>
              <Input Title='Diğer Limanlar'
                placeholder='Liman Seçiniz'
                height={72}
                width={365}
                value={digerLimanlar}
                onChangeText={(text) => setDigerLimanlar(text)}
                keyboardType='default'
              />
            </View>
            : <></>
        }

        <View style={{ alignItems: "center", marginTop: 220 }}>
          <AppButton width={240}
            height={44}
            borderRadius={5}
            color='white'
            fontSize={18}
            title='Kaydet ve Devam et'
            fontWeight={600}
            onPress={() => navigation.navigate('Fiyatlar')}
            backgroundColor='#1366B2' />
        </View>




      </View>
    </FormWrapper>
  )
}

export default Lokasyon

const styles = StyleSheet.create({
  radioButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 20,
  }
})