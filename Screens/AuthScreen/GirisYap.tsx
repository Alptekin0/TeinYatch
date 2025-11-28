import { StyleSheet, Text, View, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import LoginForm from '../../Components/LoginComp/LoginForm'
import TeinYatchText from '../../Components/AppComp/TeinYatchText'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FormWrapper from '../../Components/AppComp/FormWrapper';





const GirisYap = ({ navigation }: any) => {
  return (


    <FormWrapper scrollHeight={130}>

      <View style={styles.container}>
        <Image source={require("../../assets/icons/Yatch.jpg")} style={styles.image} />
        <TeinYatchText />
        <View style={styles.titleContainer}>
          <LoginForm />
        </View>
      </View>
    </FormWrapper>



  )
}

export default GirisYap

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: 320,
    height: 207,
    resizeMode: "contain",
    marginTop: 80,
  },
  titleContainer: {
    width: 278,
    marginTop: 20,
    alignItems: "center",
  }

})