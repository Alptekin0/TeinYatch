import { StyleSheet, View } from 'react-native';
import React from 'react';
import StepIndicator from 'react-native-step-indicator';

interface StepIndicatorProps {
     currentStep: number; // aktif adım
}

const labels = ["Taşıt Detay", "Lokasyon", "Fiyatlar", "Koşullar", "İmkanlar", "Ekstra Hizmet", "Açıklamalar", "Fotograf"];

const customStyles = {
     stepIndicatorSize: 30,
     currentStepIndicatorSize: 35,
     separatorStrokeWidth: 2,
     currentStepStrokeWidth: 3,
     stepStrokeCurrentColor: '#1366B2',
     stepStrokeWidth: 2,
     stepStrokeFinishedColor: '#1366B2',
     stepStrokeUnFinishedColor: '#aaaaaa',
     separatorFinishedColor: '#1366B2',
     separatorUnFinishedColor: '#aaaaaa',
     stepIndicatorFinishedColor: '#1366B2',
     stepIndicatorUnFinishedColor: '#ffffff',
     stepIndicatorCurrentColor: '#ffffff',
     stepIndicatorLabelFontSize: 13,
     currentStepIndicatorLabelFontSize: 13,
     stepIndicatorLabelCurrentColor: '#1366B2',
     stepIndicatorLabelFinishedColor: '#fff',
     stepIndicatorLabelUnFinishedColor: '#aaaaaa',
     labelColor: '#777',
     currentStepLabelColor: '#1366B2'
};

const AcenteStepper = ({ currentStep }: StepIndicatorProps) => {
     return (
          <View style={styles.container}>
               <StepIndicator
                    stepCount={8}
                    currentPosition={currentStep}
                    labels={labels}
                    customStyles={customStyles}
               />
          </View>
     );
};

export default AcenteStepper;

const styles = StyleSheet.create({
     container: {
          paddingVertical: 15,
     },
});
