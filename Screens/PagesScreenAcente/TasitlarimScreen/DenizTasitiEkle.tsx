import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../Components/AppComp/AppPagesHeader'
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper'
import TasitEkleInputs from '../../../Components/AcenteComp/TasitEkleInputs'
import FormWrapper from '../../../Components/AppComp/FormWrapper'
import AppButton from '../../../Components/AppComp/AppButton'

const DenizTasitiEkle = () => {
     return (
          <View>
               <FormWrapper scrollHeight={320}>
                    <Header text='Deniz Taşıtı Ekle' />
                    <AcenteStepper currentStep={0} />
                    <View style={{ alignItems: "center" }}>
                         <TasitEkleInputs />
                    </View>
                    <View style={{ alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                         <AppButton width={240}
                              height={44}
                              backgroundColor='#1366B2'
                              borderRadius={5}
                              color='white'
                              fontSize={18}
                              title='Kaydet ve Devam et'
                              onPress={() => ""}
                              fontWeight={500} />
                    </View>
               </FormWrapper>

          </View>
     )
}

export default DenizTasitiEkle

const styles = StyleSheet.create({})