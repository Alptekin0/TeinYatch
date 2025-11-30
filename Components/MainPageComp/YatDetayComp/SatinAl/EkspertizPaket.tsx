import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const EkspertizPaket = () => {
     const [checkedMini, setCheckedMini] = useState(false);
     const [checkedStandart, setCheckedStandart] = useState(false);
     const [checkedMega, setCheckedMega] = useState(false);
     return (
          <View style={styles.container}>
               <View style={styles.titleWrapper}>
                    <MaterialCommunityIcons name="shield-plus-outline" size={28} color="#1366B2" />
                    <Text style={styles.title}>Ekspertiz Paket</Text>
               </View>

               <View style={{ marginTop: 20, gap: 10 }}>
                    <TouchableOpacity style={styles.radioButtonWrapper}
                         onPress={() => { setCheckedMini(!checkedMini); setCheckedMega(false); setCheckedStandart(false) }}>
                         {checkedMini
                              ? <MaterialIcons name="radio-button-on" size={24} color="black" />
                              : <MaterialIcons name="radio-button-off" size={24} color="black" />
                         }

                         <Text style={styles.text}>Mini Paket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.radioButtonWrapper}
                         onPress={() => { setCheckedStandart(!checkedStandart); setCheckedMega(false); setCheckedMini(false) }}>
                         {checkedStandart
                              ? <MaterialIcons name="radio-button-on" size={24} color="black" />
                              : <MaterialIcons name="radio-button-off" size={24} color="black" />
                         }
                         <Text style={styles.text}>Standart Paket</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.radioButtonWrapper}
                         onPress={() => { setCheckedMega(!checkedMega); setCheckedMini(false); setCheckedStandart(false) }}>
                         {checkedMega
                              ? <MaterialIcons name="radio-button-on" size={24} color="black" />
                              : <MaterialIcons name="radio-button-off" size={24} color="black" />
                         }
                         <Text style={styles.text}>Mega Paket</Text>
                    </TouchableOpacity>
               </View>
          </View>
     )
}

export default EkspertizPaket

const styles = StyleSheet.create({
     container: {

     },
     titleWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginLeft: 15,
          marginTop: 50
     },
     title: {
          fontSize: 21,
          fontWeight: 500,
          color: "#1366B2",
     },
     radioButtonWrapper: {
          flexDirection: "row",
          alignItems: "center",
          marginLeft: 25,
          gap: 10,
     },
     text: {
          fontSize: 18,
     }
})