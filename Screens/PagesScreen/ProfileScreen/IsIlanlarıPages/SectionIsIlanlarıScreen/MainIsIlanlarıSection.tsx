import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native'
import React, { useState } from 'react'
import Ilan from '../../../../../Components/ProfileComp/isIlanlariComp/Ilan'
import CustomModal from '../../../../../Components/ProfileComp/isIlanlariComp/CustomModal'
import IlanAramaYap from '../../../../../Components/ProfileComp/isIlanlariComp/ilanAramaYap'
import Header from '../../../../../Components/AppComp/AppPagesHeader'



const MainIsIlanlarıSection = ({ navigation }: any) => {

     const [modalVisible, setModalVisible] = useState(false);

     return (
          <View>
               <Header text='İş İlanları'/>

               <IlanAramaYap onPress={() => navigation.navigate("IlanArayınız")} />

               <View style={styles.contentWrapper}>

                    <Text style={styles.subTitle}>Sizin İçin Önerilen İlanlar</Text>

                    <Ilan firma='TEINYACTH'
                         firmaIcon={require('../../../../../assets/icons/tein-logo.jpg')}
                         konum='İstanbul, Türkiye'
                         rol='Kaptan'
                         onPress={() => setModalVisible(true)} />

                    <Ilan firma='Go Round Yacth'
                         firmaIcon={require('../../../../../assets/icons/Yat2.jpg')}
                         konum='İstanbul, Türkiye'
                         rol='İkinci Kaptan'
                         onPress={() => setModalVisible(true)} />


                    <CustomModal isVisible={modalVisible}
                         onClose={() => setModalVisible(false)} />
               </View>

          </View>
     )
}

export default MainIsIlanlarıSection

const styles = StyleSheet.create({
     title: {
          fontSize: 26,
          alignSelf: "center",
          marginTop: 65,
     },
     contentWrapper: {
          width: 340,
          height: 600,
          alignSelf: "center",
          marginTop: 30,
     },
     subTitle: {
          fontSize: 20,
     },
})