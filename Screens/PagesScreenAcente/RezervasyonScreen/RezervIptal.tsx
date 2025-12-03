import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import Entypo from '@expo/vector-icons/Entypo';

const RezervIptal = () => {

     const iptalList = useSelector((state: any) => state.RezervIptal.iptalEdilenler);

     if (!iptalList || iptalList.length === 0) {
          return (
               <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ fontSize: 22, fontWeight: 600 }}>İptal edilen rezervasyon yok</Text>
               </View>
          );
     }

     const renderItem = ({ item }: any) => (
          <View style={styles.container}>
               <View>
                    <Image style={styles.image} source={item.image} />
               </View>

               <View>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                         <Text style={styles.title}>{item.title}</Text>
                         <Entypo name="cross" size={34} color="red" style={{ marginBottom: 12 }} />
                    </View>

                    <Text style={styles.text}>Kişi: {item.kisiSayisi}</Text>
                    <Text style={styles.text}>Liman: {item.kalkisLimani}</Text>
                    <Text style={styles.text}>Toplam: {item.toplam} ₺</Text>
               </View>
          </View>
     );

     return (
          <View style={{ flex: 1 }}>
               <FlatList
                    data={iptalList}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
               />
          </View>
     );
};

export default RezervIptal;

const styles = StyleSheet.create({

     container: {
          width: 356,
          height: 157,
          marginTop: 20,
          marginBottom: 10,
          alignSelf: "center",
          borderRadius: 20,
          borderWidth: 1,
          borderColor: "#FFE0E0",
          padding: 20,
          flexDirection: "row",
          gap: 20
     },

     image: {
          width: 120,
          height: 120,
          borderRadius: 60,
     },

     title: {
          fontWeight: 600,
          fontSize: 20,
          marginBottom: 15,
     },

     text: {
          fontSize: 16,
     }
});
