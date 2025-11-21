import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { LocationSelector, CustomTabBar, ProductContainer } from '../../Components/MainPageComp'
import ImageFlatListComp from '../../Components/AppComp/ImageFlatListComp';

const products = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
];


const AnaSayfa = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icons/TEİN YACHT.png")} style={styles.teinYatchTitle} />
      <CustomTabBar />

      <LocationSelector />
      <View style = {{marginTop : 5}}></View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<ProductContainer id={item.id} />)}
        showsVerticalScrollIndicator={false}
      />




    </View>
  )
}

export default AnaSayfa

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  teinYatchTitle: {
    width: 354,
    height: 41,
    marginTop: 60,
  }
})