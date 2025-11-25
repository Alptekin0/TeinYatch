import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import CustomBar from '../../Components/RezervasyonComp/CustomBar'
import Rezerv from '../../Components/RezervasyonComp/Rezerv';
import { yachts } from '../../Fake-Data/KiralikYatlar/yat';


const Rezervasyon = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];


const Rezervasyonlarım = () => {
  return (
    <View style={styles.container}>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Rezervasyonlarım</Text>
      </View>

      <CustomBar />

      <FlatList
        data={Rezervasyon}
        renderItem={({ item }) => (<Rezerv id={item.id} />)}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

    </View >
  )
}

export default Rezervasyonlarım

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


})