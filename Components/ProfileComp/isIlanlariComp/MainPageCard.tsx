import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

interface MainPageCardprops {
     title: string,
     icon: React.ReactNode,
     text: string,
     onPress: () => void,
}

const MainPageCard = ({ title, icon, text, onPress }: MainPageCardprops) => {
     return (
          <TouchableOpacity style={styles.container} onPress={onPress}>

               <View style={styles.titleWrapper}>
                    <Text style={styles.title}>{title}</Text>
                    {icon}
               </View>

               <View style={styles.textWrapper}>

                    <Text style={styles.text}>{text}</Text>
               </View>
          </TouchableOpacity>
     )
}

export default MainPageCard

const styles = StyleSheet.create({
     container: {
          width: 350,
          height: 125,
          backgroundColor: "#F2F9FF",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 20,
          alignItems: "center",
          justifyContent: "flex-start",
          padding: 20,
          borderWidth: 1,
          borderColor: "#CCE7FF",
     },
     titleWrapper: {
          width: 253,
          height: 45,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 10
     },
     title: {
          fontSize: 30,
          color: "#1366B2",
     },
     textWrapper: {
          width: 250,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
     },
     text: {
          fontSize: 15,
          textAlign: "center",
          color: "#909FAC",
     }
})