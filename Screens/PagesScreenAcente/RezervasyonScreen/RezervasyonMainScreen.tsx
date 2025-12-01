import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import RezervBekleyen from './RezervBekleyen';
import RezervTamamlanan from './RezervTamamlanan';
import RezervIptal from './RezervIptal';
import { useSelector } from 'react-redux';


const RezervasyonMain = ({ navigation }: any) => {

     const [tab, setTab] = useState("bekleyen");

     const rezervYat = useSelector((state: any) => state.RezervYat.RezervYat);

     console.log(rezervYat.id);

     return (
          <View style={{ flex: 1 }}>
               <Text style={styles.pageTitle}>Rezervasyonlar</Text>

               <View style={styles.headerWrapper}>

                    <TouchableOpacity style={[styles.button, tab === 'bekleyen' && styles.activeTab]} onPress={() => setTab('bekleyen')} >
                         <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="#F1AF3D" />
                         <Text style={[styles.text, tab === 'bekleyen' && styles.activeText]}>Bekleyen</Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={[styles.button, tab === 'tamamlanan' && styles.activeTab]} onPress={() => setTab('tamamlanan')}>
                         <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="#24AA18" />
                         <Text style={[styles.text, tab === 'tamamlanan' && styles.activeText]}>Tamamlanan</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, tab === 'iptal' && styles.activeTab]} onPress={() => setTab('iptal')}>
                         <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="#DD0808" />
                         <Text style={[styles.text, tab === 'iptal' && styles.activeText]}>İptal Edilen</Text>
                    </TouchableOpacity>

               </View>
               <View style={{ marginBottom: 10 }}></View>
               <View style={{ flex: 1 }}>
                    <View style={{ display: tab === 'bekleyen' ? 'flex' : 'none', flex: 1 }}>
                         <RezervBekleyen navigation={navigation} />
                    </View>

                    <View style={{ display: tab === 'tamamlanan' ? 'flex' : 'none', flex: 1 }}>
                         <RezervTamamlanan navigation={navigation} />
                    </View>

                    <View style={{ display: tab === 'iptal' ? 'flex' : 'none', flex: 1 }}>
                         <RezervIptal navigation={navigation} />
                    </View>
               </View>

          </View>
     )
}

export default RezervasyonMain

const styles = StyleSheet.create({
     pageTitle: {
          fontSize: 24,
          fontWeight: 500,
          alignSelf: "center",
          marginTop: 52,
     },
     headerWrapper: {
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 20,
          gap: 20
     },
     button: {
          flexDirection: "row",
          alignItems: "center",
          gap: 5,
          padding: 3,
     },
     text: {
          fontSize: 16,
          fontWeight: 600,
     },
     activeTab: {
          borderBottomWidth: 2,
          borderBottomColor: "#1366B2",
          marginTop: 1,
     },
     activeText: {
          color: "#1366B2",
     }
})