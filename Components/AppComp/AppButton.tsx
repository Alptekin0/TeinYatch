import { StyleSheet, Text, View, TouchableOpacity, TextStyle } from 'react-native'
import React from 'react'

interface AppButonProps {
     width: number,
     height: number,
     backgroundColor: string,
     paddingVertical?: number, // top + bottom
     paddingHorizontal?: number, // left + right
     borderRadius: number,

     // Text Props 
     color: string,
     fontWeight?: TextStyle["fontWeight"],
     fontSize: number,
     title: string,
     onPress: () => void,
}

const AppButton = ({ width, height, paddingVertical, paddingHorizontal, backgroundColor, color, fontWeight, borderRadius, fontSize, onPress, title }: AppButonProps) => {
     return (
          <View style={{}}>
               <TouchableOpacity onPress={onPress} style={[styles.button, { width, height, paddingVertical, paddingHorizontal, backgroundColor, borderRadius }]}>
                    <Text style={[{ color, fontWeight, fontSize }]}>{title}</Text>
               </TouchableOpacity>
          </View>
     )
}

export default AppButton

const styles = StyleSheet.create({
     button: {
          alignItems: "center",
          justifyContent: "center"
     },
})