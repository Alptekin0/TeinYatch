import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import ProfileMenu from '../../../Components/ProfileComp/ProfileMenu'
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, setIsAuthAcente } from '../../../Slices/IsAuthSlice';


const DATA = [
     { id: 1, text: 'Şirketim', icon: <MaterialCommunityIcons name="office-building" size={29} color="black" />, route: "Kisiselbilgiler" },
     { id: 2, text: 'Satılık Deniz Taşıtları', icon: <Entypo name="price-tag" size={27} color="black" />, route: "Mesajlarim" },
     { id: 3, text: 'İnsan Kaynakları', icon: <MaterialCommunityIcons name="file-account-outline" size={27} color="black" />, route: "Bildirimlerim" },
     { id: 4, text: 'Mesajlarım', icon: <AntDesign name="message" size={27} color="black" />, route: "İsİlanlari" },
     { id: 5, text: 'Bildirimlerim', icon: <Feather name="bell" size={27} color="black" />, route: "Guvenlik" },
     { id: 6, text: 'Güvenlik', icon: <Ionicons name="lock-closed-outline" size={27} color="black" />, route: "SSS" },
     { id: 7, text: 'Destek', icon: <Feather name="phone" size={27} color="black" />, route: "Destek" },
     { id: 8, text: 'Çıkış Yap', icon: <MaterialIcons name="logout" size={27} color="black" />, route: "CikisYap" },
]

const ProfilimMain = () => {

     const [logoutModalVisible, setLogoutModalVisible] = useState(false);
     const IsAuth = useSelector((state: any) => state.Auth.isAuth);

     const dispatch = useDispatch();


     const handleLogout = () => {
          console.log("Çıkış yapıldı!");
          setLogoutModalVisible(false);
          dispatch(setIsAuth(false));
          dispatch(setIsAuthAcente(false));
     };

     return (
          <View style={styles.container}>
               <Image style={styles.image} source={require('../../../assets/icons/tein-logo.jpg')} />
               <Text style={styles.userName}>Tein Yatch</Text>

               <FlatList
                    data={DATA}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                         <ProfileMenu
                              text={item.text}
                              icon={item.icon}
                              route={item.route}
                              onPress={item.route === "CikisYap" ? () => setLogoutModalVisible(true) : undefined}
                         />
                    )}
                    showsVerticalScrollIndicator={false}
               />

               {/* ÇIKIŞ MODALI */}
               <Modal
                    transparent
                    animationType="fade"
                    visible={logoutModalVisible}
                    onRequestClose={() => setLogoutModalVisible(false)}
               >
                    <View style={styles.modalBackground}>
                         <View style={styles.modalContent}>

                              <Text style={styles.modalTitle}>Çıkış yapmak istediğinize emin misiniz?</Text>

                              <View style={styles.buttonRow}>
                                   <TouchableOpacity style={[styles.button, { backgroundColor: "#D9534F" }]} onPress={handleLogout}>
                                        <Text style={styles.buttonText}>Çıkış Yap</Text>
                                   </TouchableOpacity>

                                   <TouchableOpacity style={[styles.button, { backgroundColor: "#6c757d" }]} onPress={() => setLogoutModalVisible(false)}>
                                        <Text style={styles.buttonText}>İptal</Text>
                                   </TouchableOpacity>
                              </View>

                         </View>
                    </View>
               </Modal>

          </View>
     )
}

export default ProfilimMain

const styles = StyleSheet.create({
     container: {
          flex: 1,
          backgroundColor: "white"
     },
     image: {
          width: 120,
          height: 120,
          marginTop: 86,
          marginLeft: 136,
          borderWidth: 1,
          borderRadius: 60,
          backgroundColor: "#ffffffff",
          borderColor: "#CCE7FF",
          resizeMode: "center",
     },
     userName: {
          marginTop: 12,
          alignSelf: "center",
          fontSize: 24,
          color: "#1366B2",
          marginBottom: 10,
     },

     /** MODAL STYLE */
     modalBackground: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)"
     },
     modalContent: {
          width: 300,
          padding: 20,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center"
     },
     modalTitle: {
          fontSize: 16,
          fontWeight: "600",
          marginBottom: 20,
          textAlign: "center"
     },
     buttonRow: {
          flexDirection: "row",
          gap: 10
     },
     button: {
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 8
     },
     buttonText: {
          color: "white",
          fontWeight: "600"
     }
})
