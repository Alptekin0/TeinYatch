import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Captain = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Kaptan sağlandı</Text>
          </View>
     )
}

export default Captain

const styles = StyleSheet.create({
     container: {
          width: 122,
          height: 30,
          borderRadius: 10,
          backgroundColor: "#24AA184F",
          alignItems: "center",
          justifyContent: "center",
     },
     text: {
          color: "#24AA18",
          fontSize: 14,
          fontWeight: "bold",
     }
})