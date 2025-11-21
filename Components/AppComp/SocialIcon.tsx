import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

interface SocialIconProps {
     source: any
}

const SocialIcon = ({ source }: SocialIconProps) => {
     return (
          <TouchableOpacity style={styles.container}>
               <Image source={source} />
          </TouchableOpacity>
     )
}

export default SocialIcon

const styles = StyleSheet.create({
     container: {
          width: 48,
          height: 50,
          borderWidth: 1,
          borderColor: "#1366B2",
          borderRadius: 8,
          padding: 12
     },
     icon: {
          width: 24,
          height: 24,
          color: "#FFFFFF"
     }
})