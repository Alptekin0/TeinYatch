import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';

interface EkstraHizmetRadioButtonProps {
     HizmetIsmi: string;
     fiyat: number;
     unit: string;
     selected: boolean;
     onPress: () => void;
}

const EkstraHizmetRadioButton = ({ HizmetIsmi, fiyat, unit, selected, onPress }: EkstraHizmetRadioButtonProps) => {
     return (
          <TouchableOpacity style={styles.secenek} onPress={onPress}>
               <View style={styles.hizmetAdı}>
                    {selected
                         ? <Fontisto name="radio-btn-active" size={20} color="#1366B2" />
                         : <Fontisto name="radio-btn-passive" size={19} color="#1366B2" />
                    }
                    <Text style={styles.text}>{HizmetIsmi}</Text>
               </View>
               <View>
                    <Text style={styles.text}>{fiyat} {unit}</Text>
               </View>
          </TouchableOpacity>

     )
}

export default EkstraHizmetRadioButton

const styles = StyleSheet.create({
     secenek: {
          height: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 10,
     },
     hizmetAdı: {
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
     },
     text: {
          fontSize: 17
     },
})
