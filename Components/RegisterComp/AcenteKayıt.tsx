import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup';
import Input from "../AppComp/Input"
import Feather from '@expo/vector-icons/Feather';
import { useDispatch, useSelector } from 'react-redux';
import { setEye } from '../../Slices/EyeSlice';
import RadioButtonComponent from '../AppComp/RadioButtonComponent';
import AppButton from '../AppComp/AppButton';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../Navigation/AuthNavigation';
import { StackNavigationProp } from '@react-navigation/stack';

type AuthScreenProp = StackNavigationProp<AuthStackParamList>;

const schema = Yup.object({
  sirketIsmi: Yup.string().required("Şirket İsim Zorunludur"),
  vergiNumarasi: Yup.string().required("Vergi Numarası Zorunludur"),
  TelefonNo: Yup.string().length(10, "Telefon Numarası 10 karakter olmalıdır"),
  sirketEmail: Yup.string().email("Geçersiz E-mail adresi").required("Şirket E-mail Zorunludur"),
  sifre: Yup.string().required("Şifre Zorunludur").min(6, "Şifre En Az 6 karakterli olmalıdır."),
})

const AcenteKayıt = () => {

  const navigation = useNavigation<AuthScreenProp>();

  const eye = useSelector((state: any) => state.Eye.eye);

  const dispatch = useDispatch();
  const [veriChecked, setVeriChecked] = useState(false);
  const [teinHaberCheck, setTeinHaberCheck] = useState(false);

  return (
    <Formik validationSchema={schema}
      initialValues={{ sirketIsmi: "", vergiNumarasi: "", TelefonNo: "", sirketEmail: "", sifre: "" }}
      onSubmit={(values) => console.log(values)}
    >

      {({ handleChange, values, errors, handleSubmit, touched, handleBlur }) => (

        <View style={styles.formArea}>
          <Input
            Title='Şirket İsmi'
            width={330}
            height={72}
            keyboardType='default'
            onChangeText={handleChange("sirketIsmi")}
            placeholder='Şirket İsmi'
            onBlur={handleBlur("sirketIsmi")}
            value={values.sirketIsmi}
            errors={touched.sirketIsmi && errors.sirketIsmi ? errors.sirketIsmi : undefined} />
          <Input
            Title='Vergi Numarası'
            width={330}
            height={72}
            keyboardType='default'
            onChangeText={handleChange("vergiNumarasi")}
            placeholder='Vergi Numarası'
            onBlur={handleBlur("vergiNumarasi")}
            value={values.vergiNumarasi}
            errors={touched.vergiNumarasi && errors.vergiNumarasi ? errors.vergiNumarasi : undefined}
          />


          <View style={styles.container}>
            <Text style={styles.title}>Telefon Numarası</Text>
            <View style={{ flexDirection: "row", gap: 8 }}>

              <View style={styles.telKodu}>
                <Image style={{ width: 20, height: 20 }} source={require("../../assets/icons/Turkiye.png")} />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>+90</Text>
              </View>

              <TextInput style={styles.telNoInput}
                value={values.TelefonNo}
                onBlur={handleBlur("TelefonNo")}
                keyboardType='number-pad'
                onChangeText={handleChange("TelefonNo")}
                placeholder='Telefon Numarası'
                maxLength={10}
              />
            </View>
            <Text style={{ color: "red", marginTop: 4, alignSelf: "flex-start", fontSize: 12 }}>
              {errors.TelefonNo}
            </Text>
          </View>


          <Input
            Title='Şirket E-mail'
            width={330}
            height={72}
            keyboardType='email-address'
            onChangeText={handleChange("sirketEmail")}
            placeholder='Şirket E-mail'
            onBlur={handleBlur("sirketEmail")}
            value={values.sirketEmail}
            errors={touched.sirketEmail && errors.sirketEmail ? errors.sirketEmail : undefined}
          />
          <Input width={330}
            height={72}
            placeholder='Şifre'
            Title='Şifre'
            keyboardType='default'
            secureTextEntry={eye}
            onChangeText={handleChange("sifre")}
            onBlur={handleBlur("sifre")}
            errors={touched.sifre && errors.sifre ? errors.sifre : undefined}
            value={values.sifre}
            icon={eye ? <Feather name="eye" size={14} color="black" /> : <Feather name="eye-off" size={14} color="black" />}
            onIconPress={() => { dispatch(setEye(!eye)) }}
          />

          <View style={styles.VeriIslenmesiWrapper}>
            <RadioButtonComponent checked={veriChecked}
              onPress={() => setVeriChecked(!veriChecked)}
              width={330}
              height={50}
              text={
                <>
                  Kişisel verilerimin işlenmesine yönelik {"\n"}
                  <Text style={{ color: "#1366B2" }}>aydınlatma metnini </Text>
                  ve <Text style={{ color: "#1366B2" }}>kullanım şartlarını</Text> {"\n"}
                  okudum ve anladım.
                </>
              }
            />
            <RadioButtonComponent checked={teinHaberCheck}
              onPress={() => setTeinHaberCheck(!teinHaberCheck)}
              width={330}
              height={50}
              text={'Teinyacth’tan reklam ve kampanya içerikli \niletiler ve haberler almayı kabul ediyorum.'}
            />
          </View>

          <View></View>
          <AppButton width={330}
            height={40}
            color='white'
            title='Kaydol'
            fontSize={16}
            fontWeight={600}
            paddingHorizontal={36}
            paddingVertical={8}
            backgroundColor='#0568C3'
            borderRadius={8}
            onPress={() => { handleSubmit as any }}
          />

          <View style={styles.girisYapinWrapper}>
            <Text style={styles.uyeText}> Zaten üye misiniz? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("girisYap")}><Text style={styles.girisYapin}>Giriş Yapın</Text></TouchableOpacity>
          </View>

        </View>

      )}

    </Formik>
  )




}

export default AcenteKayıt

const styles = StyleSheet.create({
  formArea: {
    width: "100%",
    height: "100%",
    gap: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    width: 330,
    height: 72,
    marginTop: 10,
    marginBottom: -8,
  },
  title: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#1366B2",
    marginLeft: 2,
    marginBottom: 1
  },
  telKodu: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#1366B2",
    width: 70,
    height: 47,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 3,
  },
  telNoInput: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#1366B2",
    width: 255,
    height: 47
  },
  VeriIslenmesiWrapper: {
    marginTop: 15
  },
  girisYapinWrapper: {
    width: 330,
    height: 23,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  uyeText: {
    fontSize: 15,
    fontWeight: 500,
    lineHeight: 20,
  },
  girisYapin: {
    fontSize: 15,
    color: "#1366B2",
    fontWeight: 500,
    lineHeight: 20,
  },
})