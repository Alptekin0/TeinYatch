import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface BildirimProps {
     icon: React.ReactNode,
     bildirimBaslik: string,
     bildirimYazi: string,
}

const Bildirim = ({ icon, bildirimBaslik, bildirimYazi }: BildirimProps) => {  // Güncel tarih ve saat alınacak
     return (
          <View style={styles.container}>
               <View style={{ marginTop: 20 }}></View>
               <View style={styles.BildirimWrapper}>

                    <View style = {styles.icon}>
                         {icon}
                    </View>

                    <View style={styles.BildirimText}>
                         <Text style={styles.BildirimTitle}> {bildirimBaslik} </Text>
                         <Text style={styles.Bildirim}>{bildirimYazi} </Text>

                         <Text style={styles.BildirimDate}> Bugün • 14.29</Text>
                    </View>

               </View>
          </View>
     )
}

export default Bildirim

const styles = StyleSheet.create({
     container: {
          width: "100%",
          alignItems: "center",
     },
     icon : {
          marginBottom : 25,
     },
     BildirimWrapper: {
          width: 360,
          height: 130,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          borderBottomWidth: 1,
          borderBottomColor: "#909FAC",
     },
     BildirimText: {
          width: 310,
          height: 110,
          overflow: "hidden",
          gap: 5
     },
     BildirimTitle: {
          fontSize: 18,
          fontWeight: 600,
     },
     Bildirim: {
          fontSize: 16,
     },
     BildirimDate: {
          fontSize: 16,
          fontWeight: 500,
          alignSelf: "flex-end",
          marginRight: 2,
     }
})