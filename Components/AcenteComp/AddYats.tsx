import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface AddYatsProp {
     onPress: () => void;
}

const AddYats = ({ onPress }: AddYatsProp) => {

     const allYats = useSelector((state: any) => state.AcenteEklenenYat.yatlar);

     const yats = allYats?.filter((item: any) => item?.fotograflar?.length > 0 && item.fotograflar[0]) || [];

     return (
          <View>

               {yats.map((item: any) => {

                    if (!item.fotograflar || !item.fotograflar.length || !item.fotograflar[0]) {
                         return null;
                    }

                    return (
                         <TouchableOpacity key={item.id} style={styles.container} onPress={onPress}>

                              <View style={styles.imageContainer}>
                                   <Image style={styles.image} source={item.fotograflar[0]} />
                              </View>

                              <View style={styles.textContainer}>
                                   <View style={styles.titleLocationWrapper}>
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
                    );
               })}

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
          resizeMode: "stretch",
     },
     textContainer: {
          width: 342,
          height: 100,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 5,
     },
     title: {
          fontSize: 19,
          fontWeight: '500',
     },
     ucretText: {
          fontSize: 19,
          fontWeight: 500,
     },
     text: {
          fontSize: 18
     },
     locationWrapper: {
          flexDirection: "row",
          marginTop: 2,
     },
     titleLocationWrapper: {
          width: "75%",
     }
})