import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Input from '../AppComp/Input'
import { useDispatch, useSelector } from 'react-redux';
import { AddYapimMalzemesi, AddBayrak, AddMarka, Addmodel, AddsonBakim, AddtamKapasite, AddtasitIsmi, AddtasitTipi, AddtasitUzunlugu, AddtasitYili, Addtuvalet } from '../../Slices/YatEkleBilgileriSlice'



const TasitEkleInputs = () => {

     const dispatch = useDispatch();

     const tasitTipi = useSelector((state: any) => state.YatEkleBilgileri.tasitTipi);
     const Marka = useSelector((state: any) => state.YatEkleBilgileri.Marka);
     const model = useSelector((state: any) => state.YatEkleBilgileri.model);
     const tasitIsmi = useSelector((state: any) => state.YatEkleBilgileri.tasitIsmi);
     const tasitYili = useSelector((state: any) => state.YatEkleBilgileri.tasitYili);
     const sonBakim = useSelector((state: any) => state.YatEkleBilgileri.sonBakim);
     const tuvalet = useSelector((state: any) => state.YatEkleBilgileri.tuvalet);
     const tamKapasite = useSelector((state: any) => state.YatEkleBilgileri.tamKapasite);
     const tasitUzunlugu = useSelector((state: any) => state.YatEkleBilgileri.tasitUzunlugu);
     const bayrak = useSelector((state: any) => state.YatEkleBilgileri.bayrak);
     const yapimMalzemesi = useSelector((state: any) => state.YatEkleBilgileri.yapimMalzemesi);


     return (
          <View>
               <Input width={365}
                    height={72}
                    Title='Taşıt Tipi'
                    placeholder='Taşıt Tipi Seçiniz'
                    keyboardType='default'
                    value={tasitTipi}
                    onChangeText={(text) => dispatch(AddtasitTipi(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Marka'
                    placeholder='Marka Giriniz'
                    keyboardType='default'
                    value={Marka}
                    onChangeText={(text) => dispatch(AddMarka(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Model'
                    placeholder='Modeli Seçiniz'
                    keyboardType='default'
                    value={model}
                    onChangeText={(text) => dispatch(Addmodel(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Taşıt İsmi'
                    placeholder='Taşıt İsmi Giriniz'
                    keyboardType='default'
                    value={tasitIsmi}
                    onChangeText={(text) => dispatch(AddtasitIsmi(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Taşıt Yılı'
                    placeholder='Taşıt Yılı'
                    keyboardType='default'
                    value={tasitYili}
                    onChangeText={(text) => dispatch(AddtasitYili(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Son Bakım Onarim Yılı'
                    placeholder='Son Bakım Onarim Yılı'
                    keyboardType='default'
                    value={sonBakim}
                    onChangeText={(text) => dispatch(AddsonBakim(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Tuvalet Sayısı'
                    placeholder='Tuvalet Sayısı'
                    keyboardType='default'
                    value={tuvalet}
                    onChangeText={(text) => dispatch(Addtuvalet(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Tam Kapasite'
                    placeholder='Tam Kapasite'
                    keyboardType='default'
                    value={tamKapasite}
                    onChangeText={(text) => dispatch(AddtamKapasite(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Taşıt Uzunluğu'
                    placeholder='Taşıt Uzunluğu'
                    keyboardType='default'
                    value={tasitUzunlugu}
                    onChangeText={(text) => dispatch(AddtasitUzunlugu(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Bayrak'
                    placeholder='Bayrak seçiniz'
                    keyboardType='default'
                    value={bayrak}
                    onChangeText={(text) => dispatch(AddBayrak(text))}
                    autoCapitalize='sentences'
               />
               <Input width={365}
                    height={72}
                    Title='Yapım Malzemesi'
                    placeholder='Yapım Malzemesi Seçiniz'
                    keyboardType='default'
                    value={yapimMalzemesi}
                    onChangeText={(text) => dispatch(AddYapimMalzemesi(text))}
                    autoCapitalize='sentences'
               />

          </View>
     )
}

export default TasitEkleInputs

const styles = StyleSheet.create({})