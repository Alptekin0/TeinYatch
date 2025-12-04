import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';

const Tamamlanan = () => {
     const [detay, setDetay] = useState(false);
     return (

          <View>
               {
                    detay ?
                         <TouchableOpacity style={styles.detayContainer} onPress={() => setDetay(!detay)}>
                              <View style={styles.headerWrapper}>
                                   <View>
                                        <Text style={styles.sirket}>Tein Yat</Text>
                                        <Text style={styles.tarih}>21.09.2023 • 10.00</Text>
                                   </View>
                                   <View style={[styles.priceWrapper, {marginRight : 7}]}>
                                        <Text style={styles.fiyat}>3500 ₺</Text>
                                        <MaterialIcons name="arrow-drop-up" size={34} color="black" />
                                   </View>
                              </View>

                              <View>
                                   <Text style={styles.RezText}>
                                        #121416 numaralı rezervasyonunuza ait ödemeniz tamamlanmış ve hesabınıza aktarılmıştır.
                                   </Text>
                              </View>
                              <View style={styles.divider}></View>
                              <View>
                                   <Text style={{ fontSize: 15 }}>Garanti Bankası</Text>
                                   <Text style={{ fontSize: 15 }}>Tein Teknoloji A.Ş.</Text>
                                   <Text style={{ fontSize: 15 }}>TR XXXXXXXXXXXXXXX</Text>
                              </View>
                         </TouchableOpacity>

                         :
                         <TouchableOpacity style={styles.container} onPress={() => setDetay(!detay)}>
                              <View>
                                   <Text style={styles.sirket}>Tein Yat</Text>
                                   <Text style={styles.tarih}>21.09.2023 • 10.00</Text>
                              </View>
                              <View style={styles.priceWrapper}>
                                   <Text style={styles.fiyat}>3500 ₺</Text>
                                   <MaterialIcons name="arrow-drop-down" size={34} color="black" />
                              </View>
                         </TouchableOpacity>
               }
          </View>
     )
}

export default Tamamlanan

const styles = StyleSheet.create({
     container: {
          width: 356,
          height: 65,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignSelf: "center",
          borderRadius: 20,
          marginTop: 20,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
     },
     detayContainer: {
          width: 356,
          height: 197,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignSelf: "center",
          borderRadius: 20,
          flexDirection: "column",
          padding: 10,
          marginTop: 20,
     },
     headerWrapper: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
     },
     divider: {
          width: "100%",
          height: 1,
          backgroundColor: "#909FAC",
          marginVertical: 10,
     },
     sirket: {
          fontSize: 21,
          color: "#1366B2",
          fontWeight: 600,
     },
     tarih: {
          fontSize: 14,
          marginTop: 2,
          color: "#909FAC",
     },
     fiyat: {
          color: "#24AA18",
          fontSize: 20,
          fontWeight: 500,
     },
     RezText: {
          marginVertical: 10,
          fontSize: 15,
     },
     priceWrapper: {
          flexDirection: "row",
          gap: 2,
          alignItems: "center",
     },

})