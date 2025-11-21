import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Favorilerim = () => {
  return (
    <View style = {styles.container}>
      <Text>Favorilerim</Text>
    </View>
  )
}

export default Favorilerim

const styles = StyleSheet.create({
   container : {
    flex : 1,
    backgroundColor : "white"
  }
})