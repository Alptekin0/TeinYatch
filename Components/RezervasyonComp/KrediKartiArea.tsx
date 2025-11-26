import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';

const KrediKartiArea = () => {
     return (
          <View style={styles.container}>

               <View style={styles.titleWrapper}>
                    <FontAwesome6 name="money-check" size={20} color="black" />
                    <Text style={styles.title}>Kredi Karti ile Ödeme</Text>
                    <SimpleLineIcons name="arrow-up" size={20} color="black" />


               </View>
          </View>
     )
}

export default KrediKartiArea

const styles = StyleSheet.create({
     container: {
          width: 356,
          height: 331,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignItems: "center",
          padding: 10
     },
     titleWrapper: {
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     title: {

     }
})