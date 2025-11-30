import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import AppButton from '../../AppComp/AppButton'

interface FiyatVeRezervEtProps {
     fiyat?: number | string;
     hour : string;
     onPress: () => void;
     buttonTitle : string;
}

const FiyatVeRezervEt = ({ fiyat, onPress, buttonTitle, hour }: FiyatVeRezervEtProps) => {
     return (
          <View style={styles.container}>
               <View style={styles.priceWrapper}>
                    <Text style={styles.price}>₺{fiyat}</Text>
                    <Text style={styles.hour}>{hour}</Text>
               </View>

               <AppButton backgroundColor='#1366B2'
                    borderRadius={5}
                    width={160}
                    height={40}
                    color='white'
                    fontSize={16}
                    title={buttonTitle}
                    fontWeight={600}
                    onPress={onPress} />

          </View>
     )
}

export default FiyatVeRezervEt

const styles = StyleSheet.create({
     container: {
          width: 390,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginVertical: 5,
          padding : 10,
          paddingBottom : 40,
          borderTopRightRadius : 24,
          borderTopLeftRadius : 24,
          backgroundColor : "#ffffffff",
     },
     priceWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 3,
     },
     price: {
          fontSize: 26,
          fontWeight: "bold",
          color: "#5c6170ff",
     },
     hour: {
          fontSize: 20,
          fontWeight: 500,
          color: "#5c6170ff"
     }
})