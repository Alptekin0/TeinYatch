import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OnayBekleniyor = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>Onay Bekleniyor</Text>
          </View>
     )
}

export default OnayBekleniyor

const styles = StyleSheet.create({
     container: {
          width: 122,
          height: 30,
          borderRadius: 10,
          backgroundColor: "#F1AF3D",
          alignItems: "center",
          justifyContent: "center",
     },
     text: {
          color: "white",
          fontSize: 14,
          fontWeight: "bold",
     }
})