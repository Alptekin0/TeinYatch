import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TextWithSpaceProps {
     text: string,
     fiyat?: number | string,
}

const TextWithSpace = ({ text, fiyat }: TextWithSpaceProps) => {
     return (
          <View style={styles.textWrapper}>
               <Text style={styles.text}>{text}</Text>
               <Text style={styles.text}>{fiyat} ₺</Text>
          </View>
     )
}

export default TextWithSpace

const styles = StyleSheet.create({
     textWrapper: {
          width: 360,
          height: 30,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
     },
     text: {
          fontSize: 17,

     }

})