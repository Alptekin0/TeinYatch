import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import Input from '../../../Components/AppComp/Input'
import FormWrapper from '../../../Components/AppComp/FormWrapper'
import AppButton from '../../../Components/AppComp/AppButton'
import ModalComponent from '../../../Components/AppComp/ModalComponent'


const Sirketim = ({ navigation } : any ) => {

     const [cariUnvan, setCariUnvan] = useState('');
     const [sirketIsmi, setSireketIsmi] = useState('');
     const [vergiNo, setVergiNo] = useState('');
     const [vergiDairesi, setVergiDairesi] = useState('');
     const [yetkiliKisiAdi, setYetkiliKisiAdi] = useState('');
     const [sirketMail, setSirketMail] = useState('');
     const [telefonNo, setTelefonNo] = useState('');
     const [adres, setAdres] = useState('');
     const [IBAN, setIBAN] = useState('');
     const [visible, setVisible] = useState(false);

     return (
          <FormWrapper scrollHeight={250}>
               <View>
                    <Header text='Şirketim' />
                    <Image style={styles.image} source={require('../../../assets/icons/tein-logo.jpg')} />
                    <TouchableOpacity>
                         <Text style={styles.text}>Fotoğrafı Değiştirin</Text>
                    </TouchableOpacity>

                    <View style={styles.inputWrapper}>

                         <Input width={330}
                              height={72}
                              Title='Cari Ünvan'
                              placeholder='Cari Ünvan'
                              keyboardType='default'
                              value={cariUnvan}
                              onChangeText={(text) => setCariUnvan(text)} />

                         <Input width={330}
                              height={72}
                              Title='Şirket İsmi'
                              placeholder='Şirket İsmi'
                              keyboardType='default'
                              value={sirketIsmi}
                              onChangeText={(text) => setSireketIsmi(text)} />

                         <Input width={330}
                              height={72}
                              Title='Vergi Numarası'
                              placeholder='Vergi Numarası'
                              keyboardType='default'
                              value={vergiNo}
                              onChangeText={(text) => setVergiNo(text)} />

                         <Input width={330}
                              height={72}
                              Title='Vergi Dairesi'
                              placeholder='Vergi Dairesi'
                              keyboardType='default'
                              value={vergiDairesi}
                              onChangeText={(text) => setVergiDairesi(text)} />

                         <Input width={330}
                              height={72}
                              Title='Yetkili Kişi Adı'
                              placeholder='Yetkili Kişi Adı'
                              keyboardType='default'
                              value={yetkiliKisiAdi}
                              onChangeText={(text) => setYetkiliKisiAdi(text)} />

                         <Input width={330}
                              height={72}
                              Title='Şirket Maili'
                              placeholder='Şirket Maili'
                              keyboardType='default'
                              value={sirketMail}
                              onChangeText={(text) => setSirketMail(text)} />

                         <Input width={330}
                              height={72}
                              Title='Şirket Telefonu'
                              placeholder='Şirket Telefonu'
                              keyboardType='default'
                              value={telefonNo}
                              onChangeText={(text) => setTelefonNo(text)} />

                         <Input width={330}
                              height={72}
                              Title='Adres'
                              placeholder='Adres'
                              keyboardType='default'
                              value={adres}
                              onChangeText={(text) => setAdres(text)} />

                         <Input width={330}
                              height={72}
                              Title='IBAN'
                              placeholder='IBAN'
                              keyboardType='default'
                              value={IBAN}
                              onChangeText={(text) => setIBAN(text)} />

                    </View>

                    <View style={{ marginBottom: 70, alignSelf: "center", }}>
                         <AppButton width={240}
                              height={44}
                              backgroundColor='#1366B2'
                              borderRadius={5}
                              color='white'
                              fontSize={19}
                              fontWeight={600}
                              title='Kaydet'
                              onPress={() => setVisible(true)} />
                    </View>

                    <ModalComponent ButtonTitle='Tamam'
                         text='Şirket Bilgileriniz Başarıyla kaydedildi.'
                         onClose={() => {setVisible(false); navigation.navigate('ProfilimMain')}}
                         title='Kayıt Başarılı'
                         visible={visible} />
               </View>
          </FormWrapper>
     )
}

export default Sirketim

const styles = StyleSheet.create({
     image: {
          width: 120,
          height: 120,
          borderRadius: 60,
          resizeMode: "contain",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignSelf: "center",
          marginTop: 20,
     },
     text: {
          fontSize: 18,
          textAlign: "center",
          marginTop: 10,
          color: "#1366B2",
     },
     inputWrapper: {
          alignSelf: "center",
          marginBottom: 30,
     }
})