import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface ProfileMenuProps {
     text: string,
     icon: React.ReactNode
     route : string

}

const ProfileMenu = ({ text, icon, route }: ProfileMenuProps) => {
     const navigation = useNavigation<any>();
     return (
          <TouchableOpacity style={styles.container} onPress={ () => navigation.navigate(route)}>
               <Text style={styles.text}>{text}</Text>
               {icon}
          </TouchableOpacity>
     )
}

export default ProfileMenu

const styles = StyleSheet.create({
     container: {
          width: 335,
          height: 62,
          alignSelf: "center",
          borderTopWidth: 1,
          borderTopColor: "#909FAC",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: 10,
     },
     text: {
          fontSize: 17,
          fontWeight: 500,
     }
})