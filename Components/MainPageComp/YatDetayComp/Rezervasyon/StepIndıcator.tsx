import { StyleSheet, View } from 'react-native';
import React from 'react';
import StepIndicator from 'react-native-step-indicator';

interface StepIndicatorProps {
     currentStep: number; // aktif adım
}

const labels = ["Saat/Tarih", "Ekstra Hizmet", "Ödeme", "Onay"];

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

const StepIndicatorComp = ({ currentStep }: StepIndicatorProps) => {
     return (
          <View style={styles.container}>
               <StepIndicator
                    stepCount={4}
                    currentPosition={currentStep}
                    labels={labels}
                    customStyles={customStyles}
               />
          </View>
     );
};

export default StepIndicatorComp;

const styles = StyleSheet.create({
     container: {
          paddingVertical: 15,
     },
});
