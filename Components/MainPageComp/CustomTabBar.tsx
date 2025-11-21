import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const CustomTabBar = () => {

     const [activeTab, setActiveTab] = useState<'kiralik' | 'satilik'>('kiralik');

     return (
          <Pressable style={styles.customTabBarContainer}>

               <TouchableOpacity style={[styles.bar, activeTab == 'kiralik' && styles.activeTab]} onPress={() => { setActiveTab('kiralik') }}>
                    <Text style={[styles.text, activeTab == 'kiralik' && styles.activeText]}>Kiralık Deniz Araçları</Text>
               </TouchableOpacity>

               <TouchableOpacity style={[styles.bar, activeTab == 'satilik' && styles.activeTab]} onPress={() => { setActiveTab('satilik') }}>
                    <Text style={[styles.text, activeTab == 'satilik' && styles.activeText]}>Satılık Deniz Araçları</Text>
               </TouchableOpacity>

          </Pressable>
     )
}

export default CustomTabBar

const styles = StyleSheet.create({
     customTabBarContainer: {
          width: 342,
          height: 50,
          borderWidth: 1,
          borderColor: "#1366B2",
          borderRadius: 50,
          marginTop: 40,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 3,
     },
     bar: {
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          borderRadius: 50,
          alignItems: "center",
          justifyContent: "center",
     },
     text: {
          fontSize: 16,
          fontWeight: "600",
          color: "#1366B2"
     },
     activeTab: {
          backgroundColor: "#1366B2",
     },
     activeText: {
          color: "white"
     },
})