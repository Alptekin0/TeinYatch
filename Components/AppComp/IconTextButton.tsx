import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface IconTextButtonProps {
     icon: React.ReactNode,
     text: string,
     onPress: () => void,
}

const IconTextButton = ({ icon, text, onPress }: IconTextButtonProps) => {
     return (
          <TouchableOpacity style={styles.button} onPress={onPress}>
               {icon}
               <Text style={styles.text}>{text}</Text>
          </TouchableOpacity>
     )
}

export default IconTextButton

const styles = StyleSheet.create({
     button: {
          width: 318,
          height: 60,
          borderWidth: 1,
          borderColor: "#1366B2",
          borderRadius: 8,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          gap: 12,
          paddingHorizontal: 20,
     },
     text: {
          fontSize: 16,
          fontWeight: 500,
          lineHeight: 19,
          color: "#000000",
     }
})