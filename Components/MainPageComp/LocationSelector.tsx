import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';

interface LocationSelectorProps  {
     onPress : () => void
}

const LocationSelector = ( {onPress} : LocationSelectorProps  ) => {
     return (
          <TouchableOpacity style={styles.container} onPress={onPress}>

               <MaterialCommunityIcons name="map-marker-radius-outline" size={26} color="#1366B2" />

               <Text style = {styles.text}>Nerden Binmek İstersiniz?</Text>

               <Feather name="sliders" size={26} color="#1366B2" />

          </TouchableOpacity>
     )
}

export default LocationSelector

const styles = StyleSheet.create({
     container : {
          width : 342,
          height : 50,
          alignItems : "center",
          justifyContent : "space-between",
          alignSelf : "center",
          marginTop : 20,
          flexDirection : "row",
          borderWidth : 1,
          borderRadius : 8,
          borderColor : "#1366B2",
          paddingHorizontal : 20,
     },

     text : {
          fontSize : 16,
          color : "#1366B2",
          fontWeight : 600,
     }
})