import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const KullanimSartlari = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.kullanımSartlariTitle}>Kullanım Şartları</Text>
               <Text style = {styles.text}>KULLANIM ŞARTLARI YAZISI GELEBİLİR .{'\n'}.{'\n'}.{'\n'}.</Text>
          </View>
     )
}

export default KullanimSartlari

const styles = StyleSheet.create({
     container: {
          width: 360,
     },
     kullanımSartlariTitle: {
          fontWeight: 600,
          fontSize: 18,
     },
     text : {
          marginTop : 8,
     }
})