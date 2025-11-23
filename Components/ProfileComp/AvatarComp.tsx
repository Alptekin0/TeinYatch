import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

const AvatarComp = () => {
     return (
          <Image style={styles.avatar} source={require('../../assets/icons/user.png')} />
     )
}

export default AvatarComp

const styles = StyleSheet.create({
     avatar: {
          width: 120,
          height: 120,
          marginTop: 86,
          marginLeft: 136,
          borderWidth: 1,
          borderRadius: 60,
          backgroundColor: "#F2F9FF",
          borderColor: "#CCE7FF",
     },
})