import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { LocationSelector, CustomTabBar, ProductContainer } from '../../../Components/MainPageComp'
import { useSelector } from 'react-redux';
import { yachts } from '../../../Fake-Data/KiralikYatlar/yat';
import { SatilikYat } from '../../../Fake-Data/SatilikYatlar/SatilikYat';
import ProductContainerSale from '../../../Components/MainPageComp/ProductContainerSale';



const MainPage = ({ navigation }: any) => {

     const activeTab = useSelector((state: any) => state.MainPageActiveTab.activeTab)

     const flatListRef = useRef<FlatList<any>>(null);

     useEffect(() => {

          flatListRef.current?.scrollToOffset({ animated: false, offset: 0 });
     }, [activeTab]);

     return (
          <View style={styles.container}>
               <Image source={require("../../../assets/icons/TEİN YACHT.png")} style={styles.teinYatchTitle} />
               <CustomTabBar />

               <LocationSelector />
               <View style={{ marginTop: 5 }}></View>

               {activeTab === 'kiralik' ?
                    <FlatList
                         data={yachts}
                         keyExtractor={(item) => item.id.toString()}
                         renderItem={({ item }) => (<ProductContainer yachts={item}
                              onPress={() => navigation.navigate("YatDetay", { yatId: item.id })} />)}
                         showsVerticalScrollIndicator={false}
                         ref={flatListRef}
                    />
                    : <FlatList
                         data={SatilikYat}
                         keyExtractor={(item) => item.id.toString()}
                         renderItem={
                              ({ item }) => (
                                   <ProductContainerSale images={item.images}
                                        price={item.fiyat}
                                        location={item.bulunduguYer}
                                        title={item.title}
                                        id={item.id}
                                        onPress={() => navigation.navigate("YatDetayForSale", { yatId: item.id })} />)}
                         showsVerticalScrollIndicator={false}
                         ref={flatListRef}
                    />}


          </View>
     )
}

export default MainPage

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