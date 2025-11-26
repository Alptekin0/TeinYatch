import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { yachts } from '../../Fake-Data/KiralikYatlar/yat'
import { CustomTabBar, ProductContainer } from '../../Components/MainPageComp'


const Favorilerim = () => {

  // {/* Burda da kiralik tabında sadece kiralik favoileri olacak. satilik da sadece satilik favori yatlar olacak. */}

  const favorite = useSelector((state: any) => state.isFavorite.favoritesList)

  const favoriteYachts = yachts.filter(yacht => favorite.includes(yacht.id));

  const activeTab = useSelector((state: any) => state.MainPageActiveTab.activeTab);


  return (

    <View style={styles.container}>
      <Text style={styles.title}> Favorilerim </Text>
      <View style={{ marginTop: -20, marginBottom: 10 }}>
        <CustomTabBar />
      </View>

      {activeTab === 'kiralik' ? (
        favoriteYachts.length === 0 ? (
          <Text style={{ marginTop: 250, fontSize: 18, color: 'gray' }}>
            Favori tekneniz bulunmamaktadır.
          </Text>)

          : (<FlatList
            data={favoriteYachts}
            renderItem={({ item }) => (
              <ProductContainer yachts={item} onPress={() => ""} />
            )}
            showsVerticalScrollIndicator={false}
          />
          )
      ) : <></>}
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