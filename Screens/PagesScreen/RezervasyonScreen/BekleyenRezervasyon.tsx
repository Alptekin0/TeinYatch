import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomBar from '../../../Components/RezervasyonComp/CustomBar'
import Rezerv from '../../../Components/RezervasyonComp/Rezerv';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from '@expo/vector-icons/Ionicons';



const BekleyenRezervasyon = () => {
     const RezervYat = useSelector((state: any) => state.RezervYat.RezervYat ?? []);
     const [active, setActive] = useState("Bekleyen") // Aktif olan butonu kontrol eder.


     console.log(RezervYat)
     console.log(RezervYat.length);


     return (
          <View style={styles.container}>

               <View style={styles.titleContainer}>
                    <Text style={styles.title}>Rezervasyonlarım</Text>
               </View>

               <CustomBar />

               <View style={styles.barcontainer}>

                    <TouchableOpacity style={[styles.button, active == "Bekleyen" && styles.active]} onPress={() => { setActive('Bekleyen'); }}>
                         <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#F1AF3D" />
                         <Text style={[styles.buttonTitle, active == "Bekleyen" && styles.activeText]}>Bekleyen</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, active == "Onaylanan" && styles.active]} onPress={() => setActive('Onaylanan')}>
                         <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#24AA18" />
                         <Text style={[styles.buttonTitle, active == "Onaylanan" && styles.activeText]}>Onaylanan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, active == "Geçmiş" && styles.active]} onPress={() => setActive('Geçmiş')}>
                         <Ionicons style={{ marginTop: 2 }} name="ellipsis-horizontal-circle-sharp" size={15} color="#00000033" />
                         <Text style={[styles.buttonTitle, active == "Geçmiş" && styles.activeText]}>Geçmiş</Text>
                    </TouchableOpacity>

               </View>

               {
                    active === 'Bekleyen' && (
                         RezervYat.length === 0
                              ?
                              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                   <Text style={{ fontSize: 22, fontWeight: 600 }}>Rezervasyon Bekleyen Yatınız bulunmamaktadır.</Text>
                              </View>
                              : <FlatList
                                   data={RezervYat}
                                   renderItem={({ item }) => (<Rezerv id={item.id} location={item.location} image={item.images[0]} />)}
                                   keyExtractor={(item) => item.id.toString()}
                                   showsVerticalScrollIndicator={false}
                              />
                    )
               }

               {
                    active === 'Onaylanan' && (
                         RezervYat.length === 0
                              ?
                              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                   <Text style={{ fontSize: 18 }}>Rezervasyon Bekleyen Yatınız bulunmamaktadır.</Text>
                              </View>
                              : <FlatList
                                   data={RezervYat}
                                   renderItem={({ item }) => (<Rezerv id={item.id} location={item.location} image={item.images[0]} />)}
                                   keyExtractor={(item) => item.id.toString()}
                                   showsVerticalScrollIndicator={false}
                              />
                    )
               }

               {
                    active === 'Gecmis' && (
                         RezervYat.length === 0
                              ?
                              <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                                   <Text style={{ fontSize: 18 }}>Rezervasyon Bekleyen Yatınız bulunmamaktadır.</Text>
                              </View>
                              : <FlatList
                                   data={RezervYat}
                                   renderItem={({ item }) => (<Rezerv id={item.id} location={item.location} image={item.images[0]} />)}
                                   keyExtractor={(item) => item.id.toString()}
                                   showsVerticalScrollIndicator={false}
                              />
                    )
               }



          </View >
     )
}

export default BekleyenRezervasyon

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white"
     },
     titleContainer: {
          width: 210,
          height: 56,
          marginTop: 57,
          marginLeft: 92,
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
     },
     title: {
          fontSize: 24,
     },
     barcontainer: {
          width: 345,
          height: 45,
          marginTop: 10,
          marginLeft: 24,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
     },
     button: {
          flexDirection: "row",
          gap: 3,
          alignItems: "center",
          justifyContent: "center",
          padding: 4
     },
     buttonTitle: {
          fontSize: 18,
          fontWeight: 500
     },
     active: {
          borderBottomWidth: 2,
          borderBottomColor: "#1366B2",
     },
     activeText: {
          color: "#1366B2"
     }
})