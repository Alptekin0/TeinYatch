import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../../Components/AppComp/AppPagesHeader'
import SonucText from '../../../../Components/RezervasyonComp/SonucText'
import AppButton from '../../../../Components/AppComp/AppButton'
import Info from '../../../../Components/AppComp/Info'
import { useDispatch } from 'react-redux'
import { SatilikYat } from '../../../../Fake-Data/SatilikYatlar/SatilikYat'

const Onay = ({ route, navigation }: any) => {

     const dispatch = useDispatch();

     const { yatId } = route.params;
     const selectedYat = SatilikYat.find((y) => y.id === yatId);


     return (
          <View>
               <Header text='Onay' />



               <Image
                    style={styles.image}
                    source={require('../../../../assets/icons/onay_yat.png')}
               />
               <Text style={styles.text}>Satın Alma Talebiniz Alınmıştır !</Text>

               <View style={{ alignSelf: "center", marginTop: 15 }}>
                    <SonucText textFirst='İşlem No' text='#121416' />
                    <SonucText textFirst='Motor Yat' text={selectedYat?.title} />
                    <SonucText textFirst='Lokasyon' text={selectedYat?.bulunduguYer} />
               </View>

               <View style={styles.divider}></View>

               <View style={styles.priceWrapper}>
                    <Text style={{ fontSize: 22, color: "#1366B2" }}>Toplam Ödeme Tutarı</Text>
                    <Text style={{ fontSize: 20, fontWeight: "500" }}>{selectedYat?.fiyat}₺</Text>
               </View>

               <View style={{ alignSelf: "center", marginTop: 220, gap: 15 }}>
                    <Info text='Ödemenizi EFT/Havale ile yaptıysanız, ödemeniz onaylandığında talebiniz tekne sahibine aktarılacaktır.' />
                    <AppButton
                         width={330}
                         height={48}
                         backgroundColor='#1366B2'
                         borderRadius={5}
                         color='white'
                         fontSize={20}
                         fontWeight={600}
                         onPress={() => {
                              navigation.reset({
                                   index: 0,
                                   routes: [{ name: "AnaSayfa" }],
                              });
                         }}
                         title='Ana Menü'
                    />
               </View>



















          </View>
     )
}

export default Onay

const styles = StyleSheet.create({
     image: {
          alignSelf: "center",
          marginTop: 30,
     },
     text: {
          fontSize: 22,
          alignSelf: "center",
          marginTop: 30,
     },
     divider: {
          width: 360,
          borderWidth: 0.2,
          borderColor: "#C9D2D6",
          alignSelf: "center",
          marginTop: 20,
          marginBottom: 20,
     },
     priceWrapper: {
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "space-between",
          width: 350,
     },
});