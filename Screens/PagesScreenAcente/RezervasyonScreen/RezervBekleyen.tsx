import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import RezervasyonCard from '../../../Components/AcenteComp/RezervasyonCard';


const RezervBekleyen = ({ navigation, onPress }: any) => {
     const rezervYatlar = useSelector((state: any) => state.RezervYat.RezervYat);

     const renderItem = ({ item }: { item: any }) => (
          <RezervasyonCard title={item.title}
               kisiSayisi={item.people}
               image={item.images[0]}
               kalkisLimani={item.location}
               toplam={item.price}
               navigation={navigation}
               id={item.id}
          />
     );

     return (
          <View style={styles.container}>
               {rezervYatlar.length === 0
                    ?
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                         <Text style={{ fontSize: 22, fontWeight : 600 }}>Rezervasyon Bekleyen Yatınız Yoktur.</Text>
                    </View>
                    :
                    <FlatList
                         data={rezervYatlar}
                         keyExtractor={(item) => item.id.toString()}
                         renderItem={renderItem}
                         contentContainerStyle={{ paddingVertical: 20 }}
                         showsVerticalScrollIndicator={false}
                    />
               }

          </View>
     )
}

export default RezervBekleyen

const styles = StyleSheet.create({
     container: {
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          flex: 1,
          marginTop: -8,
     },
     card: {
          backgroundColor: '#fff',
          padding: 15,
          borderRadius: 8,
          marginBottom: 15,
     },
     title: {
          fontSize: 18,
          fontWeight: '600',
          marginBottom: 5,
          color: "black"
     },
     location: {
          fontSize: 16,
          color: '#555',
          marginBottom: 5,
     },
     price: {
          fontSize: 16,
          color: '#1366B2',
          fontWeight: '500',
     },
})