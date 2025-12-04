import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IconTextButton from '../../Components/AppComp/IconTextButton'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import AppButton from '../../Components/AppComp/AppButton';


const SifremiUnuttum = ({ navigation }: any) => {
  return (
    <View style={styles.container}>

      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Şifrenizi mi unutunuz?</Text>
      </View>

      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          Endişe etmeyin, şifrenizi{'\n'}değiştirmenize yardımcı olacağız.
        </Text>
      </View>

      <View style={styles.buttonWrapper}>

        <IconTextButton icon={<FontAwesome name="envelope-o" size={24} color="black" />}
          text='E-mail Adresi ile ilerle'
          onPress={() => navigation.navigate("DogrulamaMail")} />

        <IconTextButton icon={<Feather name="phone" size={24} color="black" />}
          text='Telefon numarası ile ilerle'
          onPress={() => navigation.navigate("DogrulamaTelefon")} />
      </View>

      <View style={styles.backButtonWrapper}>
        <AppButton title='Önceki sayfaya dön' paddingHorizontal={32} paddingVertical={8} backgroundColor='#0568C3' borderRadius={8} color='white' width={330} height={40} fontSize={16} fontWeight={600} onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "girisYap" }],
          })
        }} />
      </View>

    </View>
  )
}

export default SifremiUnuttum

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleWrapper: {
    width: 309,
    height: 34,
    marginTop: 186,
    marginLeft: 37,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    color: "#1366B2",
    fontWeight: 300,
    fontSize: 32,
    lineHeight: 32,
  },
  textWrapper: {
    width: 278,
    height: 54,
    marginTop: 28,
    marginLeft: 37,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 17,
    fontWeight: 400,
    color: "#1E232C",
    lineHeight: 20,
    letterSpacing: 15 * 0.01
  },
  buttonWrapper: {
    width: 320,
    height: 150,
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 60,
  },
  backButtonWrapper: {
    width: 330,
    height: 40,
    alignSelf: "center",
    marginTop: 100,
  }
})