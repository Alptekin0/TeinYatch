import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { yachts } from '../../Fake-Data/Yatlar/yat'
import { CustomTabBar, ProductContainer } from '../../Components/MainPageComp'


const Favorilerim = () => {


  const favorite = useSelector((state: any) => state.isFavorite.favoritesList)

  const favoriteYachts = yachts.filter(yacht => favorite.includes(yacht.id));


  return (

    <View style={styles.container}>
      <Text style={styles.title}> Favorilerim </Text>
      <View style={{ marginTop: -20, marginBottom: 10 }}>
        <CustomTabBar />
      </View>
      <FlatList
        data={favoriteYachts}
        renderItem={({ item }) => <ProductContainer yachts={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Favorilerim

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 68,
  }
})