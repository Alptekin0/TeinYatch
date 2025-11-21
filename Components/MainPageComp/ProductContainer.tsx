import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';


const ProductContainer = () => {
     return (
          <TouchableOpacity style={styles.container}>

               <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require("../../assets/icons/tein_tekne 1.png")} />
                    <TouchableOpacity>

                    </TouchableOpacity>
                    <Entypo style={styles.heartIcon} name="heart-outlined" size={24} color="#DD0808" />
               </View>

               <View style={styles.textContainer}>
                    <View style={styles.titleContainer}>
                         <Text style={{ fontWeight: 600 }}> Tein Yat </Text>
                         <View style={styles.infoContainer}>

                              <MaterialCommunityIcons name="map-marker-radius-outline" size={26} color="#1366B2" />
                              <Text>Bebek, İstanbul</Text>
                         </View>
                         <View style={[styles.infoContainer, { marginLeft: 5 }]}>

                              <FontAwesome6 name="person" size={24} color="#1366B2" />
                              <Text>  20 Kişilik</Text>
                         </View>

                    </View>

                    <View style={styles.moneycontainer}>
                         <View style={[styles.infoContainer, { marginTop: 10 }]}>

                              <AntDesign name="star" size={14} color="#FF8A14" />
                              <Text>5.0</Text>
                         </View>

                         <View style={[styles.infoContainer, { marginLeft: 5 }]}>
                              <Text style={{ marginTop: 5 }}>
                                   <Text style={{ fontWeight: 600 }}>3.000 ₺</Text>
                                   /saat
                              </Text>
                         </View>

                    </View>
               </View>

          </TouchableOpacity>
     )
}

export default ProductContainer

const styles = StyleSheet.create({
     container: {
          height: 340,
          width: 350,
          padding: 5,
          marginTop: 10,
     },
     imageContainer: {
          width: 342,
          height: 243,
          position: "relative",
          overflow: "hidden",
     },
     heartIcon: {
          position: 'absolute',
          zIndex: 10,
          top: 15,
          right: 15,
     },
     image: {
          width: 342,
          height: 243,
          borderRadius: 7,
          resizeMode: "cover",
     },
     textContainer: {
          width: "100%",
          height: 70,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     titleContainer: {
          width: "50%",
          height: 70,

     },
     moneycontainer: {
          width: "35%",
          height: 70,
          marginRight: 20,
          gap: 5,
          alignItems: "center",
          justifyContent: "center",
     },
     infoContainer: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
     }
})