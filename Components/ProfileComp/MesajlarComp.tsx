import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface MesajProps {
     kisiIsmi: string,
     onPress : ()  => void,

}

const MesajlarComp = ({ kisiIsmi, onPress }: MesajProps) => {  // Güncel saat bilgisi çekilmelidir.
     return (
          <TouchableOpacity style={styles.container} onPress={onPress}>

               <View style={styles.titleWrapper}>
                    <View style={styles.isimWrapper}>
                         <View style={styles.letter}>
                              <Text style={{ fontSize: 18, fontWeight: 600 }}>{kisiIsmi.charAt(0)}</Text>
                         </View>
                         <Text style={{ fontSize: 18, fontWeight: 600 }}>{kisiIsmi}</Text>
                    </View>
                    <Text>14:27</Text>
               </View>

               <View style={styles.bottomWrapper}>
                    <Text>Sahibinden Satılık Ticari Motoryat</Text>
                    <Text>(İlan No: #1214161820)</Text>
               </View>

          </TouchableOpacity>
     )
}

export default MesajlarComp

const styles = StyleSheet.create({
     container: {
          width: 370,
          height: 120,
          alignSelf: "center",
          padding: 5,
          borderWidth: 1,
          borderColor: "#C9D2D6",
          margin: 5,
     },
     titleWrapper: {
          width: "100%",
          height: "50%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10
     },
     letter: {
          width: 45,
          height: 45,
          borderWidth: 1,
          borderRadius: 22,
          borderColor: "#1366B2",
          alignItems: "center",
          justifyContent: "center",
     },
     bottomWrapper: {
          width: 360,
          height: 44,
          backgroundColor: "#F2F9FF",
          padding: 5,
     },
     isimWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
     }
})