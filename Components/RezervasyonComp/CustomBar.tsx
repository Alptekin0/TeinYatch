import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomBar = () => {

     const [active, setActive] = useState("Bekleyen") // Aktif olan butonu kontrol eder.

     return (
          <View style={styles.container}>

               <TouchableOpacity style={[styles.button, active == "Bekleyen" && styles.active]} onPress={() => setActive('Bekleyen')}>
                    <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#F1AF3D" />
                    <Text style={[styles.buttonTitle, active == "Bekleyen" && styles.activeText]}>Bekleyen</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.button, active == "Onaylanan" && styles.active]} onPress={() => setActive('Onaylanan')}>
                    <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#24AA18" />
                    <Text style={[styles.buttonTitle, active == "Onaylanan" && styles.activeText]}>Onaylanan</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.button, active == "Geçmiş" && styles.active]} onPress={() => setActive('Geçmiş')}>
                    <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#00000033" />
                    <Text style={[styles.buttonTitle, active == "Geçmiş" && styles.activeText]}>Geçmiş</Text>
               </TouchableOpacity>

          </View>
     )
}

export default CustomBar

const styles = StyleSheet.create({
     container: {
          width: 345,
          height: 45,
          marginTop: 10,
          marginLeft: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
     },
     button: {
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          padding: 4
     },
     buttonTitle: {
          fontSize: 18,
          fontWeight: 500
     },
     active: {
          borderBottomWidth: 2,
          borderBottomColor: "#1366B2",
     },
     activeText: {
          color: "#1366B2"
     }



})