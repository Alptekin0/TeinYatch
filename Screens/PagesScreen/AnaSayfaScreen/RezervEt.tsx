import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../../Components/AppComp/AppPagesHeader';
import StepIndicatorComp from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/StepIndıcator';
import RezervTarih from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/RezervTarih';
import TarihVeSaatButton from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/TarihVeSaatButton';
import Fontisto from '@expo/vector-icons/Fontisto';
import Kisisayisi from '../../../Components/MainPageComp/YatDetayComp/Rezervasyon/Kisisayisi';
import Info from '../../../Components/AppComp/Info';
import AppButton from '../../../Components/AppComp/AppButton';
import { useDispatch, useSelector } from 'react-redux';
import { setEndDate, setEndTime, setStartDate, setStartTime } from '../../../Slices/RezervasyonTarihSaat';


const RezervEt = ({ navigation }: any) => {

     const [isVisible, setVisible] = useState(false);
     const [mode, setMode] = useState<'date' | 'time'>('date');
     const [activePicker, setActivePicker] = useState<'startDate' | 'endDate' | 'startTime' | 'endTime' | null>(null);

     const dispatch = useDispatch()

     const {
          startDate,
          endDate,
          startTime,
          endTime
     } = useSelector((state: any) => state.RezervasyonTarihSaat);

     const startDateObj = startDate ? new Date(startDate) : new Date();
     const endDateObj = endDate ? new Date(endDate) : new Date();
     const startTimeObj = startTime ? new Date(startTime) : new Date();
     const endTimeObj = endTime ? new Date(endTime) : new Date();


     const [step, setStep] = useState(0);

     const openPicker = (picker: 'startDate' | 'endDate' | 'startTime' | 'endTime') => {
          setActivePicker(picker);

          if (picker === 'startTime' || picker === 'endTime') {
               setMode('time');
          } else {
               setMode('date');
          }

          setVisible(true);
     };

     const handleConfirm = (selectedDate: Date) => {
          const iso = selectedDate.toISOString();

          switch (activePicker) {
               case 'startDate':
                    dispatch(setStartDate(iso));
                    break;
               case 'endDate':
                    dispatch(setEndDate(iso));
                    break;
               case 'startTime':
                    dispatch(setStartTime(iso));
                    break;
               case 'endTime':
                    dispatch(setEndTime(iso));
                    break;
          }

          setVisible(false);
     };


     return (
          <View style={{ flex: 1, padding: 20 }}>
               <Header text='Rezervasyon Yap' />
               <StepIndicatorComp currentStep={step} />

               <Text style={styles.title}>Tarih ve Saat Seçimi</Text>

               <View style={styles.DateWrapper}>

                    <View style={styles.DateInput}>
                         <TarihVeSaatButton
                              title='Başlangıç Tarihi'
                              placeholder='Tarih Seçiniz'
                              icon={<Fontisto name="date" size={20} color="#1366B2" />}
                              onPress={() => openPicker('startDate')}
                              value={startDateObj.toLocaleDateString()}
                         />
                         <TarihVeSaatButton
                              title='Bitiş Tarihi'
                              placeholder='Tarih Seçiniz'
                              icon={<Fontisto name="date" size={20} color="#1366B2" />}
                              onPress={() => openPicker('endDate')}
                              value={endDateObj.toLocaleDateString()}
                         />
                    </View>
                    <View style={styles.ClockInput}>
                         <TarihVeSaatButton
                              title='Başlangıç Saati'
                              placeholder='Saat Seçiniz'
                              icon={<Fontisto name="clock" size={20} color="#1366B2" />}
                              onPress={() => openPicker('startTime')}
                              value={startTimeObj.toLocaleTimeString()}
                         />
                         <TarihVeSaatButton
                              title='Bitiş Saati'
                              placeholder='Saat Seçiniz'
                              icon={<Fontisto name="clock" size={20} color="#1366B2" />}
                              onPress={() => openPicker('endTime')}
                              value={endTimeObj.toLocaleTimeString()}
                         />
                    </View>
                    <View style={styles.info}>
                         <Info text='Dilerseniz başlangıç ve bitiş tarihlerini farklı seçerek gecelik rezervasyon yapabilirsiniz.' />
                    </View>
                    <Kisisayisi />

                    <View style={styles.buttonWrapper}>

                         <AppButton width={330}
                              height={48}
                              title='Devam Et'
                              borderRadius={5}
                              color='white'
                              fontSize={20}
                              fontWeight={600}
                              onPress={() => { navigation.navigate('RezervEkstraHizmet') }}
                              backgroundColor='#1366B2' />
                    </View>

               </View>

               <RezervTarih
                    visible={isVisible}
                    setVisible={setVisible}
                    mode={mode}
                    date={
                         activePicker === 'startDate' ? startDateObj :
                              activePicker === 'endDate' ? endDateObj :
                                   activePicker === 'startTime' ? startTimeObj :
                                        activePicker === 'endTime' ? endTimeObj :
                                             new Date()
                    }
                    setDate={handleConfirm}
               />

          </View>
     );
};

export default RezervEt;

const styles = StyleSheet.create({
     title: {
          alignSelf: "center",
          marginTop: 40,
          fontSize: 21,
          color: "#1366B2",
     },
     DateWrapper: {
          marginTop: 30
     },
     DateInput: {
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
     },
     ClockInput: {
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "row",
          marginTop: 10
     },
     info: {
          marginTop: 40,
          marginBottom: 10
     },
     buttonWrapper: {
          marginTop: 55,
          alignSelf: "center",
     }
});