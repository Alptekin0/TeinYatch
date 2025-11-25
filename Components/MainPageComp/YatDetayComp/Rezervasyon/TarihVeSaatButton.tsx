import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'
import React from 'react'

interface TarihVeSaatButtonProps {
     title: string,
     placeholder: string,
     icon: React.ReactNode,
     onPress: () => void,
     value?: string;
}

const TarihVeSaatButton = ({ title, placeholder, icon, onPress, value }: TarihVeSaatButtonProps) => {
     return (
          <TouchableOpacity style={styles.button} onPress={onPress}>
               <Text style={styles.title}>{title}</Text>

               <View style={styles.inputContainer}>
                    <TextInput
                         style={styles.input}
                         placeholder={placeholder}
                         editable={false}
                          value={value}
                    />
                    {icon}
               </View>

          </TouchableOpacity>
     )
}

export default TarihVeSaatButton

const styles = StyleSheet.create({
     button: {
          width: 150,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
     },
     title: {
          fontSize: 15,
          marginBottom: 10,
     },
     inputContainer: {
          flexDirection: "row",
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#909FAC",
          width: 115,
          justifyContent: "space-between",
          paddingVertical: 2,
     },
     input: {
          flex: 1,
          marginRight: 8,
          padding: 0,
     },
     icon: {
          marginRight: 2,
     }
})
