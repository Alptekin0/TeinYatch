import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EkstraHizmetler } from '../../../Fake-Data/EkstraHizmetler'
import { RootState, AppDispatch } from '../../../Redux/store'
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator'
import Header from '../../../Components/AppComp/AppPagesHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TextWithSpace from '../../../Components/AppComp/TextWithSpace'
import ClosableAreaCard from '../../../Components/RezervasyonComp/ClosableAreaCard'
import ClosableAreaEFT from '../../../Components/RezervasyonComp/ClosableAreaEFT'
import RadioButtonComponent from '../../../Components/AppComp/RadioButtonComponent'
import AppButton from '../../../Components/AppComp/AppButton'
import { setTotalPrice } from '../../../Slices/TotalPrice'


const RezervOdeme = ({ navigation }: any) => {

  const dispatch = useDispatch<AppDispatch>()
  const selectedOptions = useSelector((state: RootState) => state.EkstraHizmet.selectedOptions)
  const YatIdRedux = useSelector((state: any) => state.YatId.yatId);

  const [sozlesmeCheck, setSozlesmeCheck] = useState(false);


  const totalPrice = EkstraHizmetler
    .flatMap(cat => cat.options)
    .filter(opt => selectedOptions[opt.id])
    .reduce((sum, opt) => sum + opt.price, 0)

  dispatch(setTotalPrice(totalPrice + YatIdRedux.price));

  return (
    <View>
      <Header text='Rezervasyon Yap' />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 160 }}>
        <StepIndicatorComp currentStep={2} />


        <View style={styles.bodyWrapper}>
          <Text style={styles.title}>Toplam Ödeme Tutarı</Text>
          <View style={{ marginTop: 10 }}></View>
          <TextWithSpace text='Tutar' fiyat={YatIdRedux.price} />
          <TextWithSpace text='Ekstra Hizmet Bedeli' fiyat={totalPrice} />
          <View style={styles.divider}></View>

          <TextWithSpace text='Toplam' fiyat={YatIdRedux.price + totalPrice} />
          <TextWithSpace text='Ön Ödeme Tutarı' fiyat={(YatIdRedux.price + totalPrice) / 2} />
          <TextWithSpace text='Teknede Verilecek Tutar' fiyat={(YatIdRedux.price + totalPrice) / 2} />

          <Text style={[styles.title, { marginTop: 30 }]}>Ödeme Seçenekleri</Text>
          <View style={styles.divider}></View>

          <ClosableAreaCard />
          <View style={{ marginTop: 20 }}></View>
          <ClosableAreaEFT />

          <View style={{ marginTop: 95 }}>
            <RadioButtonComponent
              checked={sozlesmeCheck}
              height={150}
              width={320}
              text='Ön Bilgilendirme Koşullarını, Cayma Hakkı ve Mesafeli Satış Sözleşmesi’ni okudum, onaylıyorum.'
              onPress={() => setSozlesmeCheck(!sozlesmeCheck)} />
          </View>

          <View style={{ alignItems: "center", marginTop: -40 }}>
            <AppButton backgroundColor='#1366B2'
              borderRadius={5}
              color='white'
              fontSize={17}
              height={48}
              width={330}
              title='Onayla'
              fontWeight={600}
              onPress={() => { navigation.navigate('RezervOnay') }} />
          </View>



        </View>
      </ScrollView>


    </View >
  )
}

export default RezervOdeme

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#1366B2",
    fontWeight: 600,
  },
  bodyWrapper: {
    width: 360,
    alignSelf: "center",
  },
  divider: {
    borderWidth: 0.2,
    borderColor: "#C9D2D6",
    marginTop: 10,
    marginBottom: 10,
  }
})