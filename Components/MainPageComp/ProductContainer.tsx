import { ImageSourcePropType, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import ImageFlatListComp from '../AppComp/ImageFlatListComp';
import FavoriteIcon from './FavoriteIcon';


interface productProps {
     id: number;
     title: string;
     location: string;
     people: number;
     price: number;
     rating: number;
     images: ImageSourcePropType[];
}

interface ProductContainerProps {
     yachts: productProps;
     onPress : () => void;
}


const ProductContainer = ({ yachts, onPress }: ProductContainerProps) => {

     return (

          <View style={styles.container}>

               <View style={styles.imageContainer}>
                    <ImageFlatListComp
                         image1Adress={yachts.images[0]}
                         image2Adress={yachts.images[1]}
                         image3Adress={yachts.images[2]}
                         image4Adress={yachts.images[3]}
                         image5Adress={yachts.images[4]}
                    />

                    <FavoriteIcon id={yachts.id} />

               </View>

               <TouchableOpacity style={styles.textContainer} onPress={onPress}>
                    <View style={styles.titleContainer}>
                         <Text style={{ fontWeight: 600 }}> {yachts.title} </Text>
                         <View style={styles.infoContainer}>

                              <MaterialCommunityIcons name="map-marker-radius-outline" size={26} color="#1366B2" />
                              <Text>{yachts.location}</Text>
                         </View>
                         <View style={[styles.infoContainer, { marginLeft: 5 }]}>

                              <FontAwesome6 name="person" size={24} color="#1366B2" />
                              <Text>  {yachts.people} Kişilik</Text>
                         </View>

                    </View>

                    <View style={styles.moneycontainer}>
                         <View style={[styles.infoContainer, { marginTop: 10 }]}>

                              <AntDesign name="star" size={14} color="#FF8A14" />
                              <Text>{yachts.rating}</Text>
                         </View>

                         <View style={[styles.infoContainer, { marginLeft: 5 }]}>
                              <Text style={{ marginTop: 5 }}>
                                   <Text style={{ fontWeight: 600 }}>{yachts.price} ₺</Text>
                                   /saat
                              </Text>
                         </View>

                    </View>
               </TouchableOpacity>
          </View>
     )
}

export default memo(ProductContainer);

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
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
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