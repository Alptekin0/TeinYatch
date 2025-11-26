import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator';
import Header from '../../../Components/AppComp/AppPagesHeader';
import EkstraHizmetSecim from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/EkstraHizmetSecim';
import AppButton from '../../../Components/AppComp/AppButton';

const RezervEkstraHizmet = ({ navigation }: any) => {
  return (
    <View style={styles.mainContainer}>
      <Header text='Rezervasyon Yap' />
      <StepIndicatorComp currentStep={1} />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <EkstraHizmetSecim />

        <View style={styles.buttonContainer}>
          <AppButton
            width={330}
            height={48}
            title='Devam Et'
            fontWeight={'600'}
            onPress={() => navigation.navigate('RezervOdeme')}
            backgroundColor='#1366B2'
            borderRadius={5}
            color='white'
            fontSize={16}
          />
        </View>
      </ScrollView>

    </View>
  )
}

export default RezervEkstraHizmet

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollContent: {
    paddingBottom: 30,
    marginLeft: 15,
    marginRight: -10,
  },
  buttonContainer: {
    marginTop: 40,
    marginBottom: 20,
    marginLeft: 10,
  }
})