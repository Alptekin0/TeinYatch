import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import AppButton from '../../../Components/AppComp/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { AddYat } from '../../../Slices/AcenteEklenenYat'

const IslemSonucu = ({ navigation }: any) => {

     const dispatch = useDispatch();
     const yatBilgileri = useSelector((state: any) => state.YatEkleBilgileri);

     // Sayfa açıldığında yatı ekle
     useEffect(() => {
          dispatch(AddYat(yatBilgileri));
          console.log(yatBilgileri);
     }, []);


     return (
          <View>
               <Image style={styles.image} source={require('../../../assets/icons/Yatch.jpg')} />
               <Text style={styles.title}>Taşıt ekleme işleminiz başarılı!</Text>
               <Text style={styles.text}>Taşıtlarım ekranından taşıtınızı görüntüleyebilirsiniz.</Text>

               <View style={styles.buttonWrapper}>
                    <AppButton width={240}
                         height={44}
                         backgroundColor='#1366B2'
                         borderRadius={10}
                         color='white'
                         fontSize={19}
                         fontWeight={600}
                         onPress={() => navigation.navigate('TasitlarimMain')}
                         title='Taşıtlarım' />
               </View>
          </View>
     )
}

export default IslemSonucu

const styles = StyleSheet.create({
     image: {
          width: 315,
          height: 208,
          marginTop: 127,
          marginLeft: 49,
     },
     title: {
          fontSize: 22,
          fontWeight: 600,
          alignSelf: "center",
          marginTop: 25,
     },
     text: {
          alignSelf: "center",
          textAlign: "center",
          fontSize: 18,
          fontWeight: 400,
          marginTop: 25,
     },
     buttonWrapper: {
          alignSelf: "center",
          marginTop: 80,
     }
})