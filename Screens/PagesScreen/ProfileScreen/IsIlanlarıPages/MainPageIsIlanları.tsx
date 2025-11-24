import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../../../Components/AppComp/AppPagesHeader'
import MainPageCard from '../../../../Components/ProfileComp/isIlanlariComp/MainPageCard'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


//



const MainPageIsIlanları = ({ navigation }: any) => {
  return (
    <View>

      <Header text='İş İlanları' />

      <MainPageCard title='İş İlanları'
        text='Yüzlerce ilan arasından kendinize en uygununu bulun !'
        icon=<FontAwesome6 name="magnifying-glass" size={26} color="#1366B2" />
        onPress={() => navigation.navigate("IsIlanlarıSection")}
      />
      <MainPageCard title='Kişisel Bilgilerim'
        text='CV’nizi kişiselleştirerek iş ilanlarına başvurun !'
        icon=<MaterialIcons name="note-add" size={26} color="#1366B2" />
        onPress={() => navigation.navigate("KisiselBilgilerimSection")}
      />
      <MainPageCard title='Başvurularım'
        text='Başvurduğunuz iş ilanlarını buradan yönetebilirsiniz.'
        icon=<MaterialIcons name="task" size={27} color="#1366B2" />
        onPress={() => navigation.navigate("BasvurularımSection")}
      />

    </View>
  )
}

export default MainPageIsIlanları

const styles = StyleSheet.create({})