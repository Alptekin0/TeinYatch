import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import SocialIcon from '../AppComp/SocialIcon';
import Input from '../AppComp/Input';
import AppButton from '../AppComp/AppButton';
import React, { useEffect, useState } from 'react';
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/facebook_ic.png";
import apple from "../../assets/icons/apple.png";
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from "@react-navigation/native";
import { AuthStackParamList } from '../../Navigation/AuthNavigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { setEye } from '../../Slices/EyeSlice';
import { setEmail, setSifre } from '../../Slices/LoginSlice';
import { setIsAuth, setIsAuthAcente } from '../../Slices/IsAuthSlice';



type AuthScreenProp = StackNavigationProp<AuthStackParamList>;

const schema = Yup.object({
     email: Yup.string().email("Geçersiz E-Mail Adresi"),
     sifre: Yup.string().required("Şifre Alanı Zorunludur.").min(6, "Şifre En Az 6 karakterli olmalıdır."),
})

const LoginForm = () => {

     //Giriş Yap Sayfası
     const navigation = useNavigation<AuthScreenProp>();

     const dispatch = useDispatch();
     const eye = useSelector((state: any) => state.Eye.eye); // Şifre inputundaki göz ikonu.

     const email = useSelector((state: any) => state.Login.email);  // Redux içindeki e-mail ve şifre
     const sifre = useSelector((state: any) => state.Login.sifre);


     //console.log("Redux email:", email);
     //console.log("Redux sifre:", sifre);


     const control = () => {
          if ((email == "test" && sifre == "123")) {
               dispatch(setIsAuth(true))
          }
          if ((email == "acente" && sifre == "123")) {
                dispatch(setIsAuthAcente(true))
          }
     }



     return (
          <Formik validationSchema={schema}
               initialValues={{ email: "", sifre: "" }}
               onSubmit={(values) => console.log(values)}>

               {({ handleChange, values, errors, touched }) => (
                    <View style={styles.container}>
                         <Input width={330}
                              height={72}
                              placeholder='E-Mail'
                              Title='E-mail'
                              keyboardType='email-address'
                              onChangeText={(text) => { handleChange("email")(text); dispatch(setEmail(text)); }}
                              errors={touched.email && errors.email ? errors.email : undefined}
                              value={values.email}
                              autoCapitalize='none'
                         />

                         <Input width={330}
                              height={72}
                              placeholder='Şifre'
                              Title='Şifre'
                              keyboardType='default'
                              secureTextEntry={eye}
                              onChangeText={(text) => { handleChange("sifre")(text); dispatch(setSifre(text)); }}
                              errors={errors.sifre}
                              value={values.sifre}
                              icon={eye ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
                              onIconPress={() => { dispatch(setEye(!eye)) }}


                         />

                         <TouchableOpacity hitSlop={10}
                              style={styles.sifreUnutma}
                              onPress={() => navigation.navigate("sifremiUnuttum")}
                         >
                              <Text style={styles.sifreUnutmaText}>Şifrenizi mi unuttunuz ?</Text>
                         </TouchableOpacity>

                         {/* Ana sayfaya yönlenecek */}
                         <AppButton
                              backgroundColor='#0568C3'
                              width={330}
                              height={40}
                              borderRadius={8}
                              paddingHorizontal={28}
                              paddingVertical={8}
                              title='Giriş Yap'
                              color='white'
                              fontWeight={'600'}
                              fontSize={16}
                              onPress={control}
                         />

                         {/* Kaydola yönlenecek */}
                         <View style={styles.hesabinizYokmuContainer}>
                              <Text style={styles.yokMuText}>Hesabınız Yok mu?</Text>
                              <TouchableOpacity onPress={() => navigation.navigate("kaydol")}>
                                   <Text style={styles.olustur}> Hesap Oluşturun! </Text>
                              </TouchableOpacity>
                         </View>

                         <View style={styles.socialContainer}>
                              <SocialIcon source={facebook} />
                              <SocialIcon source={apple} />
                              <SocialIcon source={google} />
                         </View>

                    </View >
               )}

          </Formik>

     )
}

export default LoginForm

const styles = StyleSheet.create({
     container: {
          gap: 12,
          marginTop: 20
     },
     input: {
          borderWidth: 1,
          width: 280,
          height: 40,
     },
     sifreUnutma: {
          width: 163,
          height: 16,
          alignSelf: "flex-end",
          alignItems: "flex-end",
          justifyContent: "center",
          marginBottom: 20,
     },
     sifreUnutmaText: {
          color: "#1366B2",
          fontWeight: 700
     },
     hesabinizYokmuContainer: {
          width: 274,
          height: 21,
          marginTop: 20,
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center"

     },
     yokMuText: {
          fontSize: 14,
          color: "#1E232C",
          fontWeight: 500,
          lineHeight: 24,
          letterSpacing: 1
     },
     olustur: {
          fontSize: 15,
          color: "#1366B2",
          fontWeight: 600,
          lineHeight: 24,
          letterSpacing: 1
     },
     socialContainer: {
          width: 190,
          height: 50,
          marginTop: 22,
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "space-around",
     }

})