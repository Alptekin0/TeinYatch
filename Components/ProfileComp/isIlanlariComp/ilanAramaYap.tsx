import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface IlanArayınızProps {
  onPress: () => void,
}

const ilanAramaYap = ( {onPress} : IlanArayınızProps ) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialIcons name="work-outline" size={24} color="#1366B2" />
      <Text style={styles.text}>İş İlanları Arasında Arama Yapın</Text>
    </TouchableOpacity>
  )
}

export default ilanAramaYap

const styles = StyleSheet.create({
  container: {
    width: 344,
    height: 50,
    borderWidth: 1,
    borderColor: "#1366B2",
    borderRadius: 8,
    alignSelf: "center",
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    color: "#1366B2",
    fontWeight: 500,
  }
})