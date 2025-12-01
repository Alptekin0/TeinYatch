import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import Bekleyen from '../../Screens/PagesScreenAcente/OdemelerScreen/Bekleyen';
import Tamamlanan from '../../Screens/PagesScreenAcente/OdemelerScreen/Tamamlanan';

const OdemelerCustomTab = () => {

     const [tab, setTab] = useState("bekleyen");

     return (

          <View>
               <View style={styles.headerWrapper}>

                    <TouchableOpacity style={[styles.button, tab === 'bekleyen' && styles.activeTab]} onPress={() => setTab('bekleyen')}>
                         <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="#F1AF3D" />
                         <Text style={[styles.text, tab === 'bekleyen' && styles.activeText]}>Bekleyen</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, tab === 'tamamlanan' && styles.activeTab]} onPress={() => setTab('tamamlanan')}>
                         <Ionicons name="ellipsis-horizontal-circle-outline" size={24} color="#24AA18" />
                         <Text style={[styles.text, tab === 'tamamlanan' && styles.activeText]}>Tamamlanan</Text>
                    </TouchableOpacity>

               </View>
               <View>
                    {tab === 'bekleyen' ? <Bekleyen /> : <Tamamlanan />}
               </View>
          </View>
     )
}

export default OdemelerCustomTab

const styles = StyleSheet.create({
     icon: {
          width: 30,
          height: 30,
          borderRadius: 15,
          borderWidth: 1,
     },
     headerWrapper: {
          flexDirection: "row",
          alignSelf: "center",
          alignItems: "center",
          marginTop: 20,
          gap: 60
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