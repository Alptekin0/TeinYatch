import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import KayıtTipiSwitch from '../../Components/RegisterComp/RadioButtonComp'
import TeinYatchText from '../../Components/AppComp/TeinYatchText'
import { useSelector } from 'react-redux'
import MusteriKayıt from '../../Components/RegisterComp/MusteriKayıt'
import AcenteKayıt from '../../Components/RegisterComp/AcenteKayıt'
import FormWrapper from '../../Components/AppComp/FormWrapper'



const Kaydol = () => {

  const KayıtTipi = useSelector((state: any) => state.RegisterType.RegisterType);

  return (

    <FormWrapper scrollHeight={150}>

      <View style={styles.container}>

        <View style={{ marginTop: 30 }}>
          <TeinYatchText />
        </View>

        <Text style={styles.title}>Kayıt Tipi</Text>

        <KayıtTipiSwitch />

        <View style={styles.formArea}>

          {KayıtTipi ? <MusteriKayıt /> : <AcenteKayıt />}

        </View>
      </View>
    </FormWrapper>

  )
}

export default Kaydol

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    width: 330,
    marginLeft: 25,
    fontWeight: 500,
    color: "#1366B2",
    marginTop: 5,
  },
  formArea: {
    width: 330,
    height: 580,
    marginLeft: 32,
  }
})