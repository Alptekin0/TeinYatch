import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { LocationSelector, CustomTabBar, ProductContainer } from '../../../Components/MainPageComp'
import { useSelector } from 'react-redux';
import { yachts } from '../../../Fake-Data/KiralikYatlar/yat';


const MainPage = ({ navigation }: any) => {

     const activeTab = useSelector((state: any) => state.MainPageActiveTab.activeTab)

     // { /* Bu kısımda active tab satılık ise satılık gemi verileri gelecek. */}

     return (
          <View style={styles.container}>
               <Image source={require("../../../assets/icons/TEİN YACHT.png")} style={styles.teinYatchTitle} />
               <CustomTabBar />

               <LocationSelector />
               <View style={{ marginTop: 5 }}></View>

               {activeTab === 'kiralik' ? <FlatList
                    data={yachts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (<ProductContainer yachts={item}
                         onPress={() => navigation.navigate("YatDetay", { yatId: item.id })} />)}
                    showsVerticalScrollIndicator={false}
               />
                    : <></>}

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