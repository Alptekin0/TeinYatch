import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Header from "../../../Components/AppComp/AppPagesHeader"

const Destek = () => {
  return (
    <View>
      <Header text='Tein Yat İletişim' />
      <Image source={require("../../../assets/icons/Yatch.jpg")} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>Tein Yat iletişim bilgileri aşağıda yer almaktadır:</Text>
        <Text style={styles.iletisim}>

          Adres: Ataköy 7-8-9-10. Kısım Mahallesi Çobançeşme E-5 Caddesi İstanbul/Bakırköy {'\n'}{'\n'}

          Tel: 0850 303 46 38{'\n'}{'\n'}

          E-posta: info@tein.com.tr{'\n'}{'\n'}
        </Text>
        <View style={{ marginTop: 30 }}></View>
        <Text style={styles.title}>Müşteri Hizmetleri</Text>
        <Text style={styles.iletisim}>
          Çağrı Merkezimiz hafta içi ve hafta sonu 08.30 / 24.00 saatleri arasında hizmet vermektedir.{'\n'}{'\n'}
          Çağrı Merkezi: 0850 303 46 38
        </Text>

      </View>
    </View>
  )
}

export default Destek

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 207.86,
    marginTop: 55,
    marginLeft: 41,
    resizeMode: "contain"
  },
  textWrapper: {
    width: 350,
    height: 400,
    alignSelf: "center",
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: 700,
    alignSelf: "center",
  },
  iletisim: {
    fontSize: 16,
    marginTop: 15,
  },
})