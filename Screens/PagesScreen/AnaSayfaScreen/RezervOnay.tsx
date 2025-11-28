import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator';
import Header from '../../../Components/AppComp/AppPagesHeader';
import SonucText from '../../../Components/RezervasyonComp/SonucText';
import Info from '../../../Components/AppComp/Info';
import AppButton from '../../../Components/AppComp/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { addRezervYat, clearRezervYat } from '../../../Slices/RezervSlice/RezervYat';


const RezervOnay = ({ navigation }: any) => {

  const dispatch = useDispatch();

  const selectedYat = useSelector((state: any) => state.YatId.yatId);
  const TotalPrice = useSelector((state: any) => state.TotalPrice.totalPrice);
  const rezervYat = useSelector((state: any) => state.RezervYat.RezervYat);

  const { startDate, endDate } = useSelector(
    (state: any) => state.RezervasyonTarihSaat
  );




  // ISO formatlı tarih zaten tam tarih + saat içeriyor
  const fullStart = startDate ? new Date(startDate) : null;
  const fullEnd = endDate ? new Date(endDate) : null;

  const readableStart = fullStart
    ? fullStart.toLocaleString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    : "";

  const readableEnd = fullEnd
    ? fullEnd.toLocaleString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    })
    : "";

  console.log("startDate:", startDate);
  console.log("endDate:", endDate);

  return (
    <View>
      <Header text='Rezervasyon Yap' />
      <StepIndicatorComp currentStep={3} />
      <Image
        style={styles.image}
        source={require('../../../assets/icons/onay_yat.png')}
      />
      <Text style={styles.text}>Rezervasyon Talebiniz Alınmıştır !</Text>

      <View style={{ alignSelf: "center", marginTop: 15 }}>
        <SonucText textFirst='Rezervasyon No' text='#121416' />
        <SonucText textFirst='Motor Yat' text={selectedYat.title} />
        <SonucText textFirst='Lokasyon' text={selectedYat.location} />
        <SonucText textFirst='Başlangıç Tarihi' text={readableStart} />
        <SonucText textFirst='Bitiş Tarihi' text={readableEnd} />
        <SonucText textFirst='Kişi Sayısı' text='1' />
      </View>

      <View style={styles.divider}></View>

      <View style={styles.priceWrapper}>
        <Text style={{ fontSize: 22, color: "#1366B2" }}>Toplam Ödeme Tutarı</Text>
        <Text style={{ fontSize: 20, fontWeight: "500" }}>{TotalPrice}₺</Text>
      </View>

      <View style={{ alignSelf: "center", marginTop: 35, gap: 15 }}>
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
            dispatch(addRezervYat(selectedYat));
            navigation.reset({
              index: 0,
              routes: [{ name: "Rezervasyonlarım" }],
            });
          }}
          title='Rezervasyonlarım'
        />
      </View>
    </View>
  );
};

export default RezervOnay;

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
