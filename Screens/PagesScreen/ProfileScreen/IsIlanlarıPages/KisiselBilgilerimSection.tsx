import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppPagesHeader from '../../../../Components/AppComp/AppPagesHeader'


const KisiselBilgilerimSection = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <AppPagesHeader text='Kişisel Bilgilerim' />
      <Text style={{ fontSize: 25, textAlign: "center" }}>Kisisel Bilgilerim Sayfası{'\n'} Geliştrimeleri Daha Sonra Yapılacaktır.</Text>
    </View>
  )
}

export default KisiselBilgilerimSection

const styles = StyleSheet.create({})