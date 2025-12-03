import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Input from '../AppComp/Input';
import Entypo from '@expo/vector-icons/Entypo';
import ModalComponent from '../AppComp/ModalComponent';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const LocationSelectorMain = () => {

     const [location, setLocation] = useState('');
     const [visible, setVisible] = useState(false);

     const locations = [
          "Anadolu Hisarı",
          "Arnavutköy",
          "Bebek",
          "Beşiktaş",
          "Beykoz",
          "Beylerbeyi",
          "Eminönü",
          "Kadıköy",
          "Karaköy",
          "Üsküdar",
          "Alaçatı",
          "Çeşme",
          "Kuşadası",
          "Bodrum Marina",
          "Torba",
          "Gündoğan",
          "Turgutreis",
          "Yalıkavak",
          "Didim",
          "Fethiye",
          "Ölüdeniz",
          "Marmaris",
          "İçmeler",
          "Datça",
          "Kaş",
          "Kalkan",
          "Antalya Marina",
          "Alanya",
          "Mersin Marina",
          "Trabzon Marina"
     ];

     const filteredLocations = locations.filter(item =>
          item.toLowerCase().includes(location.toLowerCase())
     );

     return (
          <View style={styles.container}>

               <View style={{ alignItems: "center", marginTop: 60 }}>
                    <Input
                         width={344}
                         height={50}
                         Title="Nereden Binmek İstersiniz ?"
                         keyboardType="default"
                         placeholder=""
                         value={location}
                         onChangeText={setLocation}
                    />
               </View>

               <FlatList
                    data={filteredLocations}
                    keyExtractor={(index) => index.toString()}
                    contentContainerStyle={{ paddingBottom: 50 }}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: 20 }}
                    renderItem={({ item }) => (
                         <TouchableOpacity style={styles.itemContainer} onPress={() => setVisible(true)}>
                              <Entypo name="location-pin" size={22} color="#1366B2" />
                              <Text style={styles.itemText}>{item}</Text>
                         </TouchableOpacity>
                    )}
               />

               <ModalComponent ButtonTitle='Tamam'
                    text='Aradığınız lokasyonda kayıtlı yat bulunamadı.'
                    title='Maalesef'
                    visible={visible}
                    icon={<MaterialIcons name="error-outline" size={24} color="red" />}
                    onClose={() => setVisible(false)}
                    ButtonColor='#1366B2' />
          </View>
     );
};

export default LocationSelectorMain;

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white",
     },
     itemContainer: {
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E5E5",
     },
     itemText: {
          fontSize: 18,
          marginLeft: 10,
     }
});
