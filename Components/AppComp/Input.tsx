import { StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardTypeOptions } from "react-native";
import React, { Children, JSX } from "react";

interface InputProps {
     width: number;
     height: number;
     Title: string;
     placeholder: string;
     icon?: JSX.Element;
     onChangeText: (text: string) => void,
     errors?: string
     value: string
     keyboardType: KeyboardTypeOptions,
     secureTextEntry?: boolean,
     onIconPress?: () => void,
     onBlur?: (e: any) => void,
     autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
}

const Input = ({ width, height, Title, placeholder, icon, errors, value, onChangeText, keyboardType, secureTextEntry, onBlur, onIconPress, autoCapitalize }: InputProps) => {
     return (
          <View style={[styles.container, { width, height }]}>
               <Text style={styles.title}>{Title}</Text>
               <View style={[styles.inputWrapper]}>
                    <TextInput
                         style={styles.input}
                         placeholder={placeholder}
                         placeholderTextColor="#909FAC"
                         keyboardType={keyboardType}
                         onChangeText={onChangeText}
                         onBlur={onBlur}
                         value={value}
                         secureTextEntry={secureTextEntry}
                         autoCapitalize= {autoCapitalize}
                    />
                    {icon && <TouchableOpacity style={styles.iconContainer} onPress={onIconPress}>{icon}</TouchableOpacity>}
                    {errors && <Text style={{ color: 'red', fontSize: 12, position: 'absolute', bottom: -15 }}>{errors}</Text>}
               </View>
          </View>
     );
};

export default Input;

const styles = StyleSheet.create({
     container: {
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
     },
     title: {
          alignSelf: "flex-start",
          fontSize: 16,
          color: "#1366B2",
          marginLeft: 2,
     },
     inputWrapper: {
          width: "100%",
          position: "relative",
          justifyContent: "center",
     },
     input: {
          width: "100%",
          height: 47,
          borderWidth: 1,
          borderColor: "#1366B2",
          borderRadius: 8,
          padding: 10,
          paddingRight: 40,
          fontSize: 16,
     },
     iconContainer: {
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: "100%",
          alignSelf: "flex-end",
          borderRadius: 8,
     },

});