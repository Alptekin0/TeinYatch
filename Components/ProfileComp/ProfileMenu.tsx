import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface ProfileMenuProps {
     text: string,
     icon: React.ReactNode
}

const ProfileMenu = ({ text, icon }: ProfileMenuProps) => {
     return (
          <View style={styles.container}>
               <Text style={styles.text}>{text}</Text>
               {icon}
          </View>
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