import { StyleSheet, Text, View, Image, ImageProps } from 'react-native'
import React from 'react'
import Captain from '../../Components/RezervasyonComp/Captain'
import OnayBekleniyor from './OnayBekleniyor'

interface RezervId {
     id: number,
     location: string,
     image : ImageProps
}

const Rezerv = ({ id, location, image}: RezervId) => {
     return (
          <View style={styles.imageContainer}>
               <Image style={styles.image} source={image} />
               <View style={styles.textContainer}>

                    <View style={styles.text}>
                         <Text style={styles.location}>21.09. 2023, 6 Kişi, {location}</Text>
                         <Text style={styles.rez}>Rezervasyon no: <Text style={{ color: "black" }}>{id}</Text> </Text>
                         <Text style={styles.price}>Toplam: <Text style={{ color: "black" }} >3800 ₺</Text>  </Text>
                    </View>

                    <View style={styles.CAPTAINTEXT}>
                         <OnayBekleniyor />
                    </View>

               </View>

          </View>
     )
}

export default Rezerv

const styles = StyleSheet.create({
     imageContainer: {
          width: 342,
          height: 320,
          marginTop: 20,
          marginLeft: 27,
     },
     image: {
          width: 342,
          height: 243,
          borderRadius: 7,
     },
     textContainer: {
          height: 75,
          padding: 5,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",

     },
     text: {
          alignSelf: "center",
          gap: 3,

     },
     CAPTAINTEXT: {
          alignSelf: "center",
     },
     location: {
          color: "#1366B2",
     },
     rez: {
          color: "#1366B2",
     },
     price: {
          color: "#1366B2",
     },
})