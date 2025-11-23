import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from "../../../../Components/AppComp/AppPagesHeader"


const MesajDetay = ({ navigation, route }: any) => {
     const { isim } = route.params;
     return (
          <View style={styles.container}>
               <Header text={isim} />

               <View style={styles.messageContainer}>
                    <Text style={styles.text}> Deneme Mesajı </Text>
               </View>
               <View style={styles.messageContainer2}>
                    <Text style={styles.text}>sse quis aliquam risus, quis aliquam erat. Nunc sem leo, posuere non euismod sit amet, faucibus sed ex. Maecenas ac tempus felis. Morbi at vehicula orci. Proin feugiat, orci at malesuada scelerisque, dui orci tempus lorem, vel bibendum risus augue id nisi. Praesent augue arcu, tristique ac tellus eu, pellentesque consectetur sapien. Praesent et mauris in purus volutpat mattis ac eu ligula. Pellentesque non euismod enim, sit amet maximus a</Text>
               </View>
               <View style={styles.messageContainer}>
                    <Text style={styles.text}> Donec facilisis interdum porttitor. Sed pharetra bibendum rhoncus. </Text>
               </View>

          </View>
     )
}

export default MesajDetay

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },
     messageContainer: {
          width: 191,
          height: "auto",
          backgroundColor: "#7EC5ED",
          borderRadius: 20,
          margin: 20,
          alignSelf: "flex-end",
          padding: 10,
     },
     messageContainer2: {
          width: 191,
          height: "auto",
          backgroundColor: "#C7D3DE",
          borderRadius: 20,
          margin: 20,
          alignSelf: "flex-start",
          padding: 10,
     },
     text: {
          fontSize: 16,
          fontWeight: 500,
     }
})