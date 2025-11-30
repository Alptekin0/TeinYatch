import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';

interface YatDetayTitleProps {
     title : string | undefined,
     location : string | undefined,
}


const YatDetayTitle = ( {title, location} : YatDetayTitleProps) => {
     return (
          <View style={styles.container}>
               <View>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.iconAndLocationWrapper}>
                         <MaterialCommunityIcons name="map-marker-radius-outline" size={26} color="#1366B2" />
                         <Text>{location}</Text>
                    </View>
               </View>
               <View style={styles.iconWrapper}>
                    <Feather name="share" size={24} color="#1366B2" />
                    <Entypo name="heart" size={24} color="#DD0808" />
               </View>
          </View>
     )
}

export default YatDetayTitle

const styles = StyleSheet.create({
     container: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
     },
     title: {
          fontSize: 30,
     },
     iconAndLocationWrapper: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          marginTop : 2,
     },
     iconWrapper: {
          flexDirection : "row",
          gap : 10,
          alignItems : "center",
     },
})