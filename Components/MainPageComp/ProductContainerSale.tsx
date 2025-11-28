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

                    <View style={styles.titleAndLocationWrapper}>
                         <View style={styles.titleWrapper}>
                              <Text style={styles.title}>{title}</Text>
                         </View>
                         <View style={styles.locationWrapper}>
                              <MaterialCommunityIcons name="map-marker-radius-outline" size={24} color="#1366B2" />
                              <Text style={styles.location}>{location}</Text>
                         </View>
                    </View>

                    <View style={styles.priceContainer}>
                         <Text style={styles.price}>{price} ₺</Text>
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
          height: 80,
          marginTop: 10,
          flexDirection: "row",
     },
     titleAndLocationWrapper: {
          width: "70%",
          height: "100%",
     },
     titleWrapper: {
          width: "100%",
          height: "40%",
          justifyContent: "center",
     },
     title: {
          fontSize: 20,
          fontWeight: 500,
     },
     locationWrapper: {
          width: "100%",
          height: "60%",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: 3,
          gap: 2,
     },
     location: {
          fontSize: 14,
          marginTop: 3,
     },
     priceContainer: {
          width: "30%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
     },
     price: {
          fontSize: 17,
          fontWeight: 500,
          marginBottom: 8,
     }
})