import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import OtpComponent from '../../Components/LoginComp/OtpComponent'
import FormWrapper from '../../Components/AppComp/FormWrapper'


const SifreYenilemeTelefon = ({ navigation }: any) => {
     return (

          <FormWrapper scrollHeight={130}>
               <View style={styles.container}>
                    <OtpComponent
                         width={248.8}
                         height={189}
                         icon={require("../../assets/icons/Telefon_Dogrulama_Icon.png")}
                         onPress={() => navigation.navigate("SifreniziBelirleyin")}
                         text={
                              <Text>
                                   Lütfen telefonunuza (
                                   <Text style={{ fontWeight: '700' }}>+90 53********</Text>
                                   ) gelen doğrulama kodunu aşağıdaki alana giriniz.
                              </Text>
                         }
                    />
               </View>
          </FormWrapper>
     )
}

export default SifreYenilemeTelefon

const styles = StyleSheet.create({
     container: {
          flex: 1,
     },

})