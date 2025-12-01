import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '../AppComp/Input'

const TasitEkleInputs = () => {

     const [tasitTipi, setTasitTipi] = useState('');
     const [Marka, setMarka] = useState('');
     const [model, setModel] = useState('');
     const [tasitIsmi, setTasitIsmi] = useState('');
     const [tasitYili, setTasitYili] = useState('');
     const [sonBakim, setSonBakim] = useState('');
     const [tuvalet, setTuvalet] = useState('');
     const [tamKapasite, setTamKapasite] = useState('');
     const [tasitUzunluğu, setTasitUzunlug] = useState('');
     const [bayrak, setBayrak] = useState('');
     const [yapimMalzemesi, setYapimMalzemesi] = useState('');

     return (
          <View>
               <Input width={365}
                    height={72}
                    Title='Taşıt Tipi'
                    placeholder='Taşıt Tipi Seçiniz'
                    keyboardType='default'
                    value={tasitTipi}
                    onChangeText={(text) => setTasitTipi(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Marka'
                    placeholder='Marka Giriniz'
                    keyboardType='default'
                    value={Marka}
                    onChangeText={(text) => setMarka(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Model'
                    placeholder='Modeli Seçiniz'
                    keyboardType='default'
                    value={model}
                    onChangeText={(text) => setModel(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Taşıt İsmi'
                    placeholder='Taşıt İsmi Giriniz'
                    keyboardType='default'
                    value={tasitIsmi}
                    onChangeText={(text) => setTasitIsmi(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Taşıt Yılı'
                    placeholder='Taşıt Yılı'
                    keyboardType='default'
                    value={tasitYili}
                    onChangeText={(text) => setTasitYili(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Son Bakım Onarim Yılı'
                    placeholder='Son Bakım Onarim Yılı'
                    keyboardType='default'
                    value={sonBakim}
                    onChangeText={(text) => setSonBakim(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Tuvalet Sayısı'
                    placeholder='Tuvalet Sayısı'
                    keyboardType='default'
                    value={tuvalet}
                    onChangeText={(text) => setTuvalet(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Tam Kapasite'
                    placeholder='Tam Kapasite'
                    keyboardType='default'
                    value={tamKapasite}
                    onChangeText={(text) => setTamKapasite(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Tam Kapasite'
                    placeholder='Tam Kapasite'
                    keyboardType='default'
                    value={tasitUzunluğu}
                    onChangeText={(text) => setTasitUzunlug(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Bayrak'
                    placeholder='Bayrak seçiniz'
                    keyboardType='default'
                    value={bayrak}
                    onChangeText={(text) => setBayrak(text)}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Yapım Malzemesi'
                    placeholder='Yapım Malzemesi Seçiniz'
                    keyboardType='default'
                    value={yapimMalzemesi}
                    onChangeText={(text) => setYapimMalzemesi(text)}
                    autoCapitalize='sentences'
               />

          </View>
     )
}

export default TasitEkleInputs

const styles = StyleSheet.create({})