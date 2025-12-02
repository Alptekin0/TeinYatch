import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import AntDesign from '@expo/vector-icons/AntDesign';
import Input from '../../../Components/AppComp/Input';
import Info from '../../../Components/AppComp/Info';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import AppButton from '../../../Components/AppComp/AppButton';



const Fiyatlar = ({ navigation }: any) => {

     const [saatlikUcret, setSaatlikUcret] = useState('');
     const [gecelikUcret, setGecelikUcret] = useState('');
     const [check, setCheck] = useState(false);
     const [fiyatCheck, setFiyatCheck] = useState(false);

     return (
          <View>
               <Header text='Deniz Taşıtı Ekle' />
               <AcenteStepper currentStep={2} />

               <View style={styles.titleWrapper}>
                    <AntDesign name="clock-circle" size={24} color="black" />
                    <Text style={styles.text}>Saatlik Fiyatlar</Text>
               </View>

               <View style={styles.inputWrapper}>
                    <Input Title='Saatlik Ücret'
                         width={330}
                         height={72}
                         placeholder=''
                         keyboardType='number-pad'
                         value={saatlikUcret}
                         onChangeText={(text) => setSaatlikUcret(text)} />
               </View>
               <View style={styles.infoWrapper}>
                    <Info text='Belirlediğiniz ücret her 1 saat için uygulanacaktır.' />
               </View>

               <View style={styles.titleWrapper}>
                    <MaterialCommunityIcons name="calendar-range" size={24} color="black" />
                    <Text style={styles.text}>Gecelik Fiyatlar</Text>
               </View>

               <View style={styles.inputWrapper}>
                    <Input Title='Gecelik Ücret'
                         width={330}
                         height={72}
                         placeholder=''
                         keyboardType='number-pad'
                         value={gecelikUcret}
                         onChangeText={(text) => setGecelikUcret(text)} />
               </View>

               <View style={styles.infoWrapper}>
                    <Info text='Belirlediğiniz ücret her 1 gece için uygulanacaktır.' />
               </View>


               <TouchableOpacity style={styles.radioButtonWrapper} onPress={() => setCheck(!check)}>
                    {check ? <Ionicons name="radio-button-on" size={24} color="black" /> : <Ionicons name="radio-button-off" size={24} color="black" />}
                    <Text style={{ marginLeft: 10 }}>Belirlediğim fiyatlar her zaman geçerli olsun.</Text>
               </TouchableOpacity>

               <View style={styles.infoWrapper}>
                    <Info text='“Belirlediğim fiyatlar her zaman geçerli olsun” seçeneğini seçtiğinizde, fiyatlarınız siz değiştirene kadar aynı şekilde kalacaktır.' heigth={50} />
               </View>

               <TouchableOpacity style={styles.radioButtonWrapper} onPress={() => setFiyatCheck(!fiyatCheck)}>
                    {fiyatCheck ?
                         <Ionicons name="radio-button-on" size={24} color="black" />
                         : <Ionicons name="radio-button-off" size={24} color="black" />}
                    <Text style={{ marginLeft: 10 }}>Fiyat güncellemesi için bildirim almak istiyorum.</Text>
               </TouchableOpacity>

               <View style={styles.infoWrapper}>
                    <Info text='“Fiyat güncellemesi için bildirim almak istiyorum” seçeneğini seçtiğinizde, fiyatlarınızı güncellemeniz için her hafta ve özel/tatil günlerinde periyodik olarak bir bildirim alacaksınız.' heigth={50} />
               </View>

               <View style={styles.buttonWrapper}>
                    <AppButton
                         width={240}
                         height={44}
                         backgroundColor='#1366B2'
                         borderRadius={5}
                         color='white'
                         fontSize={19}
                         onPress={() => navigation.navigate('Kosullar')}
                         title='Kaydet ve Devam Et'
                         fontWeight={600}
                    />
               </View>



          </View>
     )
}

export default Fiyatlar

const styles = StyleSheet.create({
     titleWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginLeft: 16,
          marginTop: 20,
     },
     text: {
          fontSize: 19,
          fontWeight: 'bold',
     },
     radioButtonWrapper: {
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 15,
          marginTop: 20,
     },
     inputWrapper: {
          alignSelf: "center",
     },
     infoWrapper: {
          marginLeft: 20,
          marginTop: 5,
     },
     buttonWrapper: {
          alignSelf: "center",
          marginTop: 50,
     }
})