import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface YatOzellikDetayProps {
     ozellik: string,
     tip: string,
     icon: React.ReactNode,
}

const YatOzellikDetay = ({ ozellik, tip, icon }: YatOzellikDetayProps) => {
     return (
          <View style={styles.container}>
               <View style={styles.baslikVeIcon}>
                    <View style={styles.iconWrapper}>
                         {icon}
                    </View>
                    <Text style={styles.baslik}>{ozellik}:</Text>
               </View>
               <View style={styles.Ozellik}>
                    <Text style={styles.tip}>{tip}</Text>
               </View>
               <View></View>
          </View>
     )
}

export default YatOzellikDetay

const styles = StyleSheet.create({
     container: {
          width: 360,
          height: 33,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     baslikVeIcon: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          width: 180,
     },
     iconWrapper: {
          width: 30,
          height: 25,
          alignItems: "center",
          justifyContent: "center",
     },
     baslik: {
          fontWeight: 700,
          fontSize: 16,
     },
     Ozellik: {
          width: 180,
          textAlign: "center",
     },
     tip: {
          fontSize: 16,
     }

})