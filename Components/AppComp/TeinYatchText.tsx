import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TeinYatchText = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.title}>TEINYACHT</Text>
          </View>
     )
}

export default TeinYatchText

const styles = StyleSheet.create({
     title: {
          fontSize: 36,
          fontWeight: 500,
          color: "#0B327A",
     },
     container: {
          width: 278,
          height: 56,
          alignItems: "center",
          alignSelf: "center",
          marginTop: 20
     }
})