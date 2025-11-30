import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../Components/AppComp/AppPagesHeader'
import TextWithSpace from '../../../../Components/AppComp/TextWithSpace'
import { SatilikYat } from '../../../../Fake-Data/SatilikYatlar/SatilikYat'
import ClosableAreaCard from '../../../../Components/RezervasyonComp/ClosableAreaCard'
import ClosableAreaEFT from '../../../../Components/RezervasyonComp/ClosableAreaEFT'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import RadioButtonComponent from '../../../../Components/AppComp/RadioButtonComponent'
import AppButton from '../../../../Components/AppComp/AppButton'
import FormWrapper from '../../../../Components/AppComp/FormWrapper'
import { ScrollView } from 'react-native-gesture-handler'



const Odeme = ({ route, navigation }: any) => {

     const { yatId } = route.params;
     const selectedYat = SatilikYat.find((y) => y.id === yatId);

     const [sozlesmeCheck, setSozlesmeCheck] = useState(false);

     return (
          <FormWrapper scrollHeight={180}>
               <ScrollView contentContainerStyle = {{paddingBottom : 60}}>
                    <View>
                         <Header text='Ödeme' />

                         <View style={{ alignSelf: "center", marginTop: 30 }}>
                              <Text style={styles.title}>Toplam Ödeme Tutarı</Text>
                              <View style={{ marginTop: 10 }}></View>
                              <TextWithSpace text='Tutar' fiyat={selectedYat?.fiyat} />
                         </View>
                         <View style={styles.divider}></View>

                         <View style={{ alignSelf: "center", marginTop: 30 }}>
                              <View style={{ alignItems: "center", flexDirection: "row", gap: 5 }}>
                                   <FontAwesome6 name="money-bills" size={18} color="#1366B2" />
                                   <Text style={styles.title}>Ödeme Seçenekleri</Text>
                              </View>
                              <View style={{ marginTop: 25 }}></View>
                              <ClosableAreaCard />
                              <View style={{ marginTop: 20 }}></View>
                              <ClosableAreaEFT />
                         </View>

                         <View style={{ marginTop: 0, marginRight: 10, }}>
                              <RadioButtonComponent
                                   checked={sozlesmeCheck}
                                   height={150}
                                   width={320}
                                   text='Ön Bilgilendirme Koşullarını, Cayma Hakkı ve Mesafeli Satış Sözleşmesi’ni okudum, onaylıyorum.'
                                   onPress={() => setSozlesmeCheck(!sozlesmeCheck)} />
                         </View>

                         <View style={{ alignItems: "center", marginTop: 10 }}>
                              <AppButton backgroundColor='#1366B2'
                                   borderRadius={5}
                                   color='white'
                                   fontSize={17}
                                   height={48}
                                   width={330}
                                   title='Onayla'
                                   fontWeight={600}
                                   onPress={() => { navigation.navigate('Onay') }} />
                         </View>

                    </View>
               </ScrollView>
          </FormWrapper>
     )
}

export default Odeme

const styles = StyleSheet.create({
     title: {
          fontSize: 20,
          color: "#1366B2",
          fontWeight: 600,
     },
     divider: {
          height: 1,
          backgroundColor: "#C9D2D6",
          width: 355,
          alignSelf: "center",
          marginTop: 10,
     }
})