import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../../../../Components/AppComp/AppPagesHeader'
import Input from '../../../../../Components/AppComp/Input'
import AppButton from '../../../../../Components/AppComp/AppButton'




const IlanArayınız = ({ navigation }: any) => {
     const [meslek, setMeslek] = useState("");
     const [konum, setKonum] = useState("");
     return (
          <View>
               <Header text='İş İlanları Arayınız' />
               <View style={styles.inputWrapper}>

                    <Input width={365}
                         height={72}
                         Title='Meslek'
                         placeholder='Meslek'
                         keyboardType='default'
                         onChangeText={(text) => setMeslek(text)}
                         value={meslek}
                         autoCapitalize='none'
                    />
                    <Input width={365}
                         height={72}
                         Title='Konum'
                         placeholder='Konum'
                         keyboardType='default'
                         onChangeText={(text) => setKonum(text)}
                         value={konum}
                         autoCapitalize='none'
                    />
               </View>

               <View style={styles.buttonWrapper}>
                    <AppButton title='Arama Yap'
                         borderRadius={5}
                         color='white'
                         fontSize={18}
                         backgroundColor='#1366B2'
                         width={240}
                         height={44}
                         fontWeight={600}
                         onPress={() => navigation.goBack()}
                    />
               </View>
          </View>
     )
}

export default IlanArayınız

const styles = StyleSheet.create({
     inputWrapper: {
          alignSelf: "center",
          marginTop: 40,
          gap: 20,
     },
     buttonWrapper: {
          alignSelf: "center",
          marginTop: 400
     }
})