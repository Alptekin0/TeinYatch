import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';


const Kisisayisi = () => {

     const [KisiSayisi, setKisiSayisi] = useState(1);

     return (
          <View style={styles.container}>
               <View style={styles.titleWrapper}>
                    <Ionicons name="people" size={24} color="#1366B2" />
                    <Text style={styles.title}>Kisi Sayısı</Text>
               </View>
               <View style={styles.sayacContainer}>

                    <TouchableOpacity style={styles.iconArea} onPress={() => setKisiSayisi(prev => (prev > 1 ? prev - 1 : 1))}>
                         <Text style={styles.icon}> - </Text>
                    </TouchableOpacity>

                    <Text style={styles.kisiSayisi}> {KisiSayisi} </Text>


                    <TouchableOpacity style={styles.iconArea} onPress={() => setKisiSayisi(KisiSayisi + 1)}>
                         <Text style={styles.icon} > + </Text>
                    </TouchableOpacity>
                    
               </View>
          </View>
     )
}

export default Kisisayisi

const styles = StyleSheet.create({
     container: {
          width: 200,
          height: 100,
          alignItems: "center",
          alignSelf: "center",
     },
     titleWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          marginTop: 20
     },
     title: {
          fontSize: 20,

     },
     sayacContainer: {
          width: 155,
          height: 55,
          borderRadius: 30,
          borderWidth: 1,
          borderColor: "#1366B2",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          marginTop: 10,
     },
     kisiSayisi: {
          fontSize: 25,
          fontWeight: 600,
     },
     iconArea: {
          width: 50,
          height: 52,
          borderRadius: 20,
          alignItems: "center",
          justifyContent: "center",
     },
     icon: {
          color: "#1366B2",
          fontSize: 22,
          fontWeight: 500,
     }
})