import { StyleSheet, Text, View, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React from 'react'

interface IlanProps {
     firmaIcon: ImageSourcePropType,
     rol: string,
     firma: string,
     konum: string,
     onPress : () => void,
}

const Ilan = ({ firmaIcon, rol, firma, konum, onPress }: IlanProps) => {
     return (
          <TouchableOpacity style={styles.ilanWrapper} onPress={onPress}>

               <View style={styles.logoWrapper}>
                    <Image style={styles.logo} source={firmaIcon} />
               </View>

               <View style={styles.textWrapper}>
                    <Text style={{ fontWeight: 600, fontSize: 18 }}>{rol}</Text>
                    <Text style={{ fontWeight: 500 }}>{firma}</Text>
                    <Text style={{ color: "#909FAC" }}>{konum}</Text>
               </View>

          </TouchableOpacity>
     )
}

export default Ilan

const styles = StyleSheet.create({
     ilanWrapper: {
          width: 340,
          height: 130,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          borderBottomWidth: 1,
          borderBottomColor: "#909FAC",
     },
     logoWrapper: {
          width: 90,
          height: 90,
          borderRadius: 45,
          borderWidth: 1,
          borderColor: "#1366B2",
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 5,
          marginLeft: 2,

     },
     logo: {
          width: 90,
          height: 120,
          borderRadius: 45,
          resizeMode: "contain",
     },
     textWrapper: {
          flexDirection: "column",

     }
})