import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { EkstraHizmetler } from '../../../Fake-Data/EkstraHizmetler'
import { RootState, AppDispatch } from '../../../Redux/store'
import { toggleOption } from '../../../Slices/EkstraHizmetSlice'
import EkstraHizmetRadioButton from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/EkstraHizmetRadioButton'
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator'
import Header from '../../../Components/AppComp/AppPagesHeader'
import { ScrollView } from 'react-native-gesture-handler'
import TextWithSpace from '../../../Components/AppComp/TextWithSpace'
import KrediKartiArea from '../../../Components/RezervasyonComp/KrediKartiArea'


const RezervOdeme = () => {

  const dispatch = useDispatch<AppDispatch>()
  const selectedOptions = useSelector((state: RootState) => state.EkstraHizmet.selectedOptions)
  const YatIdRedux = useSelector((state: any) => state.YatId.yatId);

  console.log(YatIdRedux.price)

  const totalPrice = EkstraHizmetler
    .flatMap(cat => cat.options)
    .filter(opt => selectedOptions[opt.id])
    .reduce((sum, opt) => sum + opt.price, 0)

  return (
    <View>
      <Header text='Rezervasyon Yap' />
      <StepIndicatorComp currentStep={2} />

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingVertical: 20 }}>

        <View style={styles.bodyWrapper}>
          <Text style={styles.title}>Toplam Ödeme Tutarı</Text>
          <View style={{ marginTop: 10 }}></View>
          <TextWithSpace text='Tutar' fiyat={YatIdRedux.price} />
          <TextWithSpace text='Ekstra Hizmet Bedeli' fiyat={totalPrice} />
          <View style={styles.divider}></View>

          <TextWithSpace text='Toplam' fiyat={YatIdRedux.price + totalPrice} />
          <TextWithSpace text='Ön Ödeme Tutarı' fiyat={(YatIdRedux.price + totalPrice) / 2} />
          <TextWithSpace text='Teknede Verilecek Tutar' fiyat={(YatIdRedux.price + totalPrice) / 2} />

          <Text style={[styles.title, {marginTop : 30}]}>Ödeme Seçenekleri</Text>
          <View style={styles.divider}></View>

          <KrediKartiArea/>

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