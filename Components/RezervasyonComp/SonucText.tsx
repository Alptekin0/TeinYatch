import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface SonucTextProps {
     
     textFirst : string,
     text : string,

}

const SonucText = ( { textFirst, text } : SonucTextProps ) => {
     return (
          <View style={styles.textWrapper}>
               <Text style={styles.textFirst}>{textFirst}</Text>
               <Text style={styles.text}>{text}</Text>
          </View>
     )
}

export default SonucText

const styles = StyleSheet.create({
     textWrapper: {
          width: 340,
          height: 30,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
     },
     textFirst: {
          fontSize : 18,
          color : "#1366B2",
     },
     text: {
          fontSize : 16,
     },
})