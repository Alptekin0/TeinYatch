import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { RadioButton } from 'react-native-paper'


interface RadioButtonProps {
     width: number,
     height: number,
     text: string | ReactNode,
     checked: boolean,
     onPress: () => void,
}

const RadioButtonComponent = ({ width, height, text, checked, onPress }: RadioButtonProps) => {

     return (

          <TouchableOpacity
               style={[styles.radioItem, { width, height }]}
               onPress={onPress}
          >
               <RadioButton
                    value="first"
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={onPress}
                    color="#1366B2"
               />
               <Text style={styles.label}>{text}</Text>
          </TouchableOpacity>

     )
}

export default RadioButtonComponent

const styles = StyleSheet.create({
     radioItem: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: 8,
          marginTop: 2,
     },
     label: {
          fontSize: 13,
          fontWeight: 600,
          alignItems: "flex-end",
          lineHeight: 20,
          letterSpacing: 1.05,
          marginTop: 1,
     },
})