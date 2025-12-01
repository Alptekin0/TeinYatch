import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Bekleyen = () => {
     return (
          <TouchableOpacity style={styles.container}>
               <View>
                    <Text style={styles.sirket}>Tein Yat</Text>
                    <Text style={styles.tarih}>Ödeme Bekleniyor</Text>
               </View>
               <View>
                    <Text style={styles.fiyat}>3500 ₺</Text>
               </View>
          </TouchableOpacity>
     )
}

export default Bekleyen

const styles = StyleSheet.create({
     container: {
          width: 356,
          height: 65,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
     },
     sirket: {
          fontSize: 21,
          color: "#F1AF3D",
          fontWeight: 600,
     },
     tarih: {
          fontSize: 14,
          marginTop: 2,
          color: "#909FAC",
     },
     fiyat: {
          color: "#F1AF3D",
          fontSize: 20,
          fontWeight: 500,
     }
})