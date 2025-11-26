import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator'
import Header from '../../../Components/AppComp/AppPagesHeader'

const RezervOnay = () => {
  return (
    <View>
      <Header text='Rezervasyon Yap' />
      <StepIndicatorComp currentStep={3} />
    </View>
  )
}

export default RezervOnay

const styles = StyleSheet.create({})