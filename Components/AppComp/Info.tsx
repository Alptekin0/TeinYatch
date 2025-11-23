import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface InfoText {
     text: string,
}


const Info = ({ text }: InfoText) => {
     return (
          <View style = {styles.infoWrapper}>
               <Ionicons style = {styles.infoIcon} name="information-circle-outline" size={24} color="black" />
               <Text style ={styles.infoText}>{text}</Text>
          </View>
     )
}

export default Info

const styles = StyleSheet.create({
     infoWrapper : {
          flexDirection : "row",
          width : 330,
          height : 36,
          alignItems : "center",
          gap : 10,
     },
     infoIcon : {
          color : "#4A5568",
     },
     infoText : {
          fontSize : 14,
     }
})