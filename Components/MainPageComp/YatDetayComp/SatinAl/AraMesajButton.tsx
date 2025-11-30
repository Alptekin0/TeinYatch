import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppButton from '../../../AppComp/AppButton'

const AraMesajButton = () => {
     return (
          <View style = {styles.buttonWrapper}>
               <AppButton width={160}
                    height={40}
                    backgroundColor='#1366B2'
                    borderRadius={5}
                    color='white'
                    fontSize={18}
                    title='Ara'
                    fontWeight={600}
                    onPress={() => ""} />
               <AppButton width={160}
                    height={40}
                    backgroundColor='#1366B2'
                    borderRadius={5}
                    color='white'
                    fontSize={18}
                    title='Mesaj Gönder'
                    fontWeight={600}
                    onPress={() => ""} />
          </View>
     )
}

export default AraMesajButton

const styles = StyleSheet.create({
     buttonWrapper : {
          flexDirection : "row",
          alignItems : "center",
          justifyContent : "space-around",
          marginTop : 25
     }
})