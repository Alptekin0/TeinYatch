import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { yachts } from '../../Fake-Data/KiralikYatlar/yat'
import { CustomTabBar, ProductContainer } from '../../Components/MainPageComp'
import { SatilikYat } from '../../Fake-Data/SatilikYatlar/SatilikYat'
import ProductContainerSale from '../../Components/MainPageComp/ProductContainerSale'



const Favorilerim = () => {

  // {/* Burda da kiralik tabında sadece kiralik favoileri olacak. satilik da sadece satilik favori yatlar olacak. */}

  const activeTab = useSelector((state: any) => state.MainPageActiveTab.activeTab);


  const favorite = useSelector((state: any) => state.isFavorite.favoritesList)

  const favoriteYachts = yachts.filter(yacht => favorite.includes(yacht.id));



  const favoriteSale = useSelector((state: any) => state.IsFavoriteSale.favoritesListSale)

  const favoriteYachtsSale = SatilikYat.filter(SatilikYat => favoriteSale.includes(SatilikYat.id));



  return (

    <View style={styles.container}>
      <Text style={styles.title}> Favorilerim </Text>
      <View style={{ marginTop: -20, marginBottom: 10 }}>
        <CustomTabBar />
      </View>

      {activeTab === 'kiralik' ? (
        favoriteYachts.length === 0 ? (
          <Text style={{ marginTop: 250, fontSize: 18, color: 'gray' }}>
            Favori Kiralık tekneniz bulunmamaktadır.
          </Text>)

          : (<FlatList
            data={favoriteYachts}
            renderItem={({ item }) => (
              <ProductContainer yachts={item} onPress={() => ""} />
            )}
            showsVerticalScrollIndicator={false}
          />
          )
      ) 
      : favoriteYachtsSale.length === 0 ? (
        <Text style={{ marginTop: 250, fontSize: 18, color: 'gray' }}>
          Favori Satılık tekneniz bulunmamaktadır.
        </Text>)
        : (<FlatList
          data={favoriteYachtsSale}
          renderItem={({ item }) => (
            <ProductContainerSale id={item.id} images={item.images} location={item.bulunduguYer} price={item.fiyat} title={item.title} onPress={() => ""} />
          )}
          showsVerticalScrollIndicator={false}
        />
        )}


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