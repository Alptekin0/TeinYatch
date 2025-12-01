import { Image, ImageProps, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface RezervasyonCardProps {
     image: ImageProps,
     title: string,
     kisiSayisi: string | number,
     kalkisLimani: string,
     toplam: string,
}

const RezervasyonCard = ({ image, title, kisiSayisi, kalkisLimani, toplam }: RezervasyonCardProps) => {
     return (
          <View style={styles.container}>
               <View>
                    <Image style={styles.image} source={image} />
               </View>

               <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.text}> <Text style={{ color: "#1366B2" }}>Kişi Sayısı:</Text>  {kisiSayisi}</Text>
                    <Text style={styles.text}> <Text style={{ color: "#1366B2" }}>Kalkış:</Text>{kalkisLimani}</Text>
                    <Text style={styles.text}> <Text style={{ color: "#1366B2" }}>Toplam:</Text>{toplam} ₺</Text>
               </View>
          </View>
     )
}

export default RezervasyonCard

const styles = StyleSheet.create({
     container: {
          width: 356,
          height: 157,
          borderRadius: 20,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
     },
     image: {
          width: 120,
          height: 120,
          borderRadius: 60,
     },
     title: {
          fontSize: 22,
          fontWeight: 600,
          marginBottom: 20,
     },
     text: {
          fontSize: 16,

     }
})