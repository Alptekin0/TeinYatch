import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const KiralamaSartlari = () => {
     return (
          <View style={styles.container}>
               <Text style={styles.kiralamaSartlariTitle}>Kiralama Şartları</Text>
               <Text style = {styles.text}>KİRALAMA ŞARTLARI YAZISI GELEBİLİR .{'\n'}.{'\n'}.{'\n'}.</Text>
          </View>
     )
}

export default KiralamaSartlari

const styles = StyleSheet.create({
     container: {
          width: 360,
     },
     kiralamaSartlariTitle: {
          fontWeight: 600,
          fontSize: 18,
     },
     text : {
          marginTop : 8,
     }
})