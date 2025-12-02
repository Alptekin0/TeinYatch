import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RezervIptal = ({ navigation }: any) => {
     return (
          <View style={{ flex : 1, alignItems: "center", justifyContent: "center" }}>
               <Text style={{ fontSize: 22, fontWeight : 600}}>İptal edilen rezervasyon bulunmuyor</Text>
          </View>
     )
}

export default RezervIptal

const styles = StyleSheet.create({})