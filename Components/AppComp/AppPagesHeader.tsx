import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface AppPagesHeaderProps {
     text: string
}

const AppPagesHeader = ({ text }: AppPagesHeaderProps) => {

     const navigation = useNavigation();

     return (
          <View style={styles.container}>
               <Ionicons name="chevron-back" size={27} color="black" onPress={() => navigation.goBack()} />
               <Text style={styles.text}>{text}</Text>
               <Text></Text>
          </View>
     )
}

export default AppPagesHeader

const styles = StyleSheet.create({
     container: {
          width: 342,
          height: 50,
          marginTop: 45,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     text: {
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: 1,
          marginRight : 5,
     }
})