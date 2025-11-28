import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OtpComponent from '../../Components/LoginComp/OtpComponent'
import FormWrapper from '../../Components/AppComp/FormWrapper'

const SifreYenilemeMail = ({ navigation }: any) => {
  return (
    <FormWrapper scrollHeight={130}>
      <View style={styles.container}>
        <OtpComponent
          width={230}
          height={206}
          icon={require("../../assets/icons/Mail_Dogrulama_Icon.png")}
          text={
            <Text>
              Lütfen mailinize
              <Text style={{ fontWeight: '700' }}> (****@gmail.com) </Text>
              gelen doğrulama kodunu aşağıdaki alana giriniz.
            </Text>
          }
          onPress={() => navigation.navigate("SifreniziBelirleyin")}
        />
      </View>
    </FormWrapper>
  )
}

export default SifreYenilemeMail

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})