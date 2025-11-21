import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import AppButton from '../AppComp/AppButton'
import { OtpInput } from "react-native-otp-entry"

interface OtpComponentProps {
     text: React.ReactNode,
     icon: any,
     width : number,
     height : number,
     onPress : () => void,
}

const OtpComponent = ({ text, icon, width, height, onPress }: OtpComponentProps) => {
     return (
          <>
               <Image style={[styles.image, {width, height}]} source={icon} />
               <View style={styles.textWrapper}>
                    <Text style={styles.text}>
                         {text}
                    </Text>
               </View>

               <View style={styles.TelfonKodWrapper}>
                    <OtpInput numberOfDigits={6}
                         type="numeric"
                         focusColor="#0568C3"
                         onTextChange={(text) => { }}
                         autoFocus={false}
                         theme={{ pinCodeContainerStyle: styles.pinCodeContainer }} />
               </View>
               <View style={styles.buttonWrapper}>
                    <AppButton title='Kodu Gönder'
                         color='white'
                         width={330}
                         height={40}
                         paddingHorizontal={32}
                         paddingVertical={8}
                         fontSize={14}
                         fontWeight={600}
                         onPress={onPress}
                         backgroundColor='#0568C3'
                         borderRadius={8} />

                    <AppButton title='Kodu Tekrar Gönder'
                         color='#1366B2'
                         width={330}
                         height={40}
                         paddingHorizontal={32}
                         paddingVertical={8}
                         fontSize={14}
                         fontWeight={600}
                         onPress={() => { }}
                         backgroundColor='white'
                         borderRadius={8} />
               </View>
          </>
     )
}

export default OtpComponent

const styles = StyleSheet.create({
     image: {
          marginTop: 150,
          marginLeft: 82
     },
     textWrapper: {
          width: 330,
          height: 46,
          alignSelf: "center",
          marginTop: 51,
          alignItems: "center",
          justifyContent: "flex-start"
     },
     text: {
          fontSize: 17.4,
          fontWeight: 400,
     },
     TelfonKodWrapper: {
          marginTop: 65,
          width: 310,
          height: 45,
          marginLeft: 40,
     },
     pinCodeContainer: {
          height: 45,
     },
     buttonWrapper: {
          alignSelf: "center",
          width: 330,
          height: 100,
          justifyContent: "space-around",
          marginTop: 95,
     }
})