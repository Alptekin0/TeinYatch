import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LocationSelector, CustomTabBar, ProductContainer } from '../../Components/MainPageComp'
import ImageFlatListComp from '../../Components/AppComp/ImageFlatListComp';

const AnaSayfa = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/icons/TEİN YACHT.png")} style={styles.teinYatchTitle} />
      <CustomTabBar />

      <LocationSelector />

      <ImageFlatListComp />
      <ProductContainer />



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