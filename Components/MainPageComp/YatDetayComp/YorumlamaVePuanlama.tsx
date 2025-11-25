import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

interface YorumlamaVePuanlamaProps {
     puan: number
}

const YorumlamaVePuanlama = ({ puan }: YorumlamaVePuanlamaProps) => {
     return (
          <View style={styles.container}>

               <Text style={styles.title}>Yorumlar ve Puanlama</Text>

               <View style={styles.iconWrapper}>
                    <AntDesign name="star" size={24} color="#FF8A14" />
                    <Text style={styles.puan}>{puan} /24 Yorum</Text>
               </View>

               <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Yorumları Gör...</Text>
               </TouchableOpacity>
          </View>
     )
}

export default YorumlamaVePuanlama

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     title: {
          fontWeight: 600,
          fontSize: 18,
     },
     iconWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginVertical: 10
     },
     puan: {
          fontSize: 16
     },
     button: {
          width: 120,
          height: 35,
          alignItems: "flex-start",
          justifyContent: "center",
     },
     buttonText: {
          fontSize: 17,
          color: "#1366B2",
     }
})