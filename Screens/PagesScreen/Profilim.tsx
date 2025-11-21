import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profilim = () => {
  return (
    <View style = {styles.container}>
      <Text>Profilim</Text>
    </View>
  )
}

export default Profilim

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : "white"
  }
})