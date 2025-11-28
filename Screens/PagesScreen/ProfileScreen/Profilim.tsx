import { StyleSheet, Text, View, FlatList, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import ProfileMenu from '../../../Components/ProfileComp/ProfileMenu'
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AvatarComp from '../../../Components/ProfileComp/AvatarComp';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth } from '../../../Slices/IsAuthSlice';

const DATA = [
  { id: 1, text: 'Kişisel Bilgilerim', icon: <Feather name="user" size={27} color="black" />, route: "Kisiselbilgiler" },
  { id: 2, text: 'Mesajlarım', icon: <Feather name="message-circle" size={27} color="black" />, route: "Mesajlarim" },
  { id: 3, text: 'Bildirimlerim', icon: <Feather name="bell" size={27} color="black" />, route: "Bildirimlerim" },
  { id: 4, text: 'İş İlanları', icon: <SimpleLineIcons name="briefcase" size={27} color="black" />, route: "İsİlanlari" },
  { id: 5, text: 'Güvenlik', icon: <Feather name="lock" size={27} color="black" />, route: "Guvenlik" },
  { id: 6, text: 'Sıkça Sorulan Sorular', icon: <FontAwesome6 name="circle-question" size={27} color="black" />, route: "SSS" },
  { id: 7, text: 'Destek', icon: <Feather name="phone" size={27} color="black" />, route: "Destek" },
  { id: 8, text: 'Çıkış Yap', icon: <MaterialIcons name="logout" size={27} color="black" />, route: "CikisYap" },
]

const Profilim = () => {

  const [logoutModalVisible, setLogoutModalVisible] = useState(false);
  const IsAuth = useSelector((state: any) => state.Auth.isAuth);

  const dispatch = useDispatch();


  const handleLogout = () => {
    console.log("Çıkış yapıldı!");
    setLogoutModalVisible(false);
    dispatch(setIsAuth(false));
  };

  return (
    <View style={styles.container}>
      <AvatarComp />
      <Text style={styles.userName}>Test User</Text>

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

export default Profilim

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
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
