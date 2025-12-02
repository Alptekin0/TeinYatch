import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import AppButton from '../../../Components/AppComp/AppButton';
import ModalComponent from '../../../Components/AppComp/ModalComponent';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useDispatch } from 'react-redux';
import { removeRezervYat } from '../../../Slices/RezervSlice/RezervYat';
import { addTamamlanan } from '../../../Slices/AcenteTamamlananSlice';

const RezervasyonDetay = ({ route, navigation }: any) => {

  const { image, title, kisiSayisi, kalkisLimani, toplam } = route.params;


  const [onayVisible, setOnayVisible] = useState(false);
  const [redVisible, setredVisible] = useState(false);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header text='Rezervasyon Detayları' />

      <View style={styles.bodyContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>

        <Text style={styles.text}>Yatınız için talep edilen #121416 numaralı{'\n'} rezervasyon bilgileri aşağıda yer almaktadır.
          Lütfen{'\n'} uygunluk durumuna göre onay veriniz{'\n'}
          veya iptal ediniz.
        </Text>
        <View style={styles.locationWrapper}>
          <Text style={{ fontSize: 20 }}><Ionicons name="people" size={24} color="black" /> {kisiSayisi}</Text>
          <Text style={{ fontSize: 17 }}><Entypo name="location" size={24} color="black" /> {kalkisLimani}</Text>
        </View>

        <View style={styles.priceWrapper}>
          <Text style={{ fontSize: 20 }} >Toplam: </Text>
          <Text style={{ fontSize: 20 }} > {toplam} ₺</Text>
        </View>
        <View style={styles.divider}></View>

        <View style={styles.buttonWrapper}>
          <AppButton width={120}
            height={35}
            backgroundColor='#DD0808'
            borderRadius={5}
            color='white'
            fontSize={18}
            title='İptal Et'
            fontWeight={600}
            onPress={() => {
              setOnayVisible(true);
            }} />

          <AppButton width={120}
            height={35}
            backgroundColor='#1366B2'
            borderRadius={5}
            color='white'
            fontSize={18}
            title='Onayla'
            fontWeight={600}
            onPress={() => setOnayVisible(true)} />
        </View>


      </View>
      <ModalComponent ButtonTitle='Tamam'
        onClose={() => {
          setOnayVisible(false);
          dispatch(removeRezervYat(route.params.id));
          dispatch(addTamamlanan({
            image, title, kisiSayisi, kalkisLimani, toplam
          }));
          navigation.navigate('RezervasyonMainScreen', { initialTab: 'tamamlanan' });
        }}
        text='Rezervasyon onayı başarıyla gerçekleşmiştir.'
        title='Onaylandı'
        visible={onayVisible}
        ButtonColor='#1366B2' />



      <ModalComponent ButtonTitle='Tamam'
        onClose={() => setredVisible(false)}
        text='Rezervasyon iptali başarıyla gerçekleşmiştir.'
        title='İptal Edildi'
        visible={redVisible}
        ButtonColor='#DD0808'
        icon={<MaterialIcons name="cancel" size={24} color="#DD0808" />} />
    </View>
  )
}

export default RezervasyonDetay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  image: {
    width: 136,
    height: 136,
    borderRadius: 65,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  bodyContainer: {
    width: 342,
    height: 600,
    backgroundColor: "#F2F9FF",
    alignItems: "center",
    padding: 20,
    alignSelf: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: "center",
    marginBottom: 20,
  },
  locationWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 20
  },
  priceWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 100,
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#909FAC",
    width: "100%",
    marginTop: 40,
  },
  buttonWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  }

})