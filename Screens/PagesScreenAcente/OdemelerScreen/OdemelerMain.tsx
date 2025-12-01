import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OdemelerCustomTab from '../../../Components/AcenteComp/OdemelerCustomTab'

const OdemelerMain = () => {
     return (
          <View>
               <Text style={styles.pageHeader}>Ödemeler</Text>
               <OdemelerCustomTab />
          </View>
     )
}

export default OdemelerMain

const styles = StyleSheet.create({
     pageHeader: {
          fontSize: 24,
          fontWeight: 400,
          alignSelf: "center",
          marginTop: 55,
     }
})