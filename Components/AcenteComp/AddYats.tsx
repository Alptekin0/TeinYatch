import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const AddYats = () => {

     const yats = useSelector((state: any) => state.AcenteEklenenYat.yatlar);

     return (
          <View>

               {yats.map((item: any) => (
                    <TouchableOpacity key={item.id} style={styles.container} >

                         <View style={styles.imageContainer}>
                              <Image style={styles.image} source={item.fotograflar[0]} />
                         </View>

                         <View style={styles.textContainer}>
                              <View>
                                   <Text style={styles.title}>{item.tasitIsmi}</Text>
                                   <View style={styles.locationWrapper}>
                                        <MaterialIcons name="pin-drop" size={24} color="#1366B2" />
                                        <Text style={styles.text}>{item.bulunduguLiman}</Text>
                                   </View>

                              </View>
                              <View>
                                   <Text style={styles.ucretText}>{item.saatlikUcret} ₺</Text>
                              </View>
                         </View>

                    </TouchableOpacity>
               ))}

          </View>
     )
}

export default AddYats

const styles = StyleSheet.create({
     container: {
          width: 343,
          height: 322,
          alignSelf: "center",
          marginTop: 50,
     },
     imageContainer: {
          width: 342,
          height: 243,
     },
     image: {
          width: 342,
          height: 243,
          borderRadius: 7,
     },
     textContainer: {
          width: 342,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
     },
     title: {
          fontSize: 21,
          fontWeight: '600',
     },
     ucretText: {
          fontSize: 22,
          fontWeight: 600,
     },
     text: {
          fontSize: 18
     },
     locationWrapper: {
          flexDirection: "row",
          marginTop: 2,
     }
})