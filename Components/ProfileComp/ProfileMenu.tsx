import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface ProfileMenuProps {
     text: string,
     icon: React.ReactNode
     route: string
     onPress?: () => void
}

const ProfileMenu = ({ text, icon, route, onPress }: ProfileMenuProps) => {
     const navigation = useNavigation<any>();

     const handlePress = () => {
          if (onPress) return onPress(); // Modal için
          navigation.navigate(route);    // Normal navigation
     };

     return (
          <TouchableOpacity style={styles.container} onPress={handlePress}>
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
          fontWeight: "500",
     }
})
