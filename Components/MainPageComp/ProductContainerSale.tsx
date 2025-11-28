import { ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageFlatListComp from '../AppComp/ImageFlatListComp'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


interface ProductContainerSaleProp {
     images: ImageSourcePropType[],
     onPress: () => void,
     title: string,
     location: string,
     price: string
     id: number
}


const ProductContainerSale = ({ images, title, location, price, id, onPress }: ProductContainerSaleProp) => { // favori iconu eklenecek
     return (
          <View style={styles.container}>
               <ImageFlatListComp image1Adress={images[0]} />

               <TouchableOpacity style={styles.textContainer} onPress={onPress}>
                    <View style={styles.titleContainer}>
                         <Text style={styles.title}> {title} </Text>

                    </View>

                    <View style={styles.moneycontainer}>
                         <View style={styles.infoContainer}>
                              <MaterialCommunityIcons name="map-marker-radius-outline" size={26} color="#1366B2" />
                              <Text style={styles.location}>{location}</Text>
                         </View>
                         <View style={[styles.infoContainer, { marginLeft: 5 }]}>
                              <Text style={styles.price}>{price} ₺</Text>
                         </View>
                    </View>
               </TouchableOpacity>
          </View>
     )
}

export default ProductContainerSale

const styles = StyleSheet.create({
     container: {
          height: 340,
          width: 350,
          padding: 5,
          marginTop: 10,
     },
     textContainer: {
          width: "100%",
          height: 70,
          marginTop: 10,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between"
     },
     titleContainer: {
          width: "100%",
          height: 30,
          justifyContent: "center",
     },
     title: {
          fontSize: 20,
          fontWeight: 600,
     },
     moneycontainer: {
          width: "95%",
          height: 40,
          marginRight: 20,
          gap: 5,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
     },
     infoContainer: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
     },
     location: {
          fontSize: 16,
     },
     price: {
          color: "#1366B2",
          fontSize: 20,
     }
})