import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

interface FormWrapperProps {
     children: React.ReactNode,
     scrollHeight: number,
}

const FormWrapper = ({ children, scrollHeight }: FormWrapperProps) => {
     return (

          <KeyboardAwareScrollView
               enableOnAndroid={true}
               keyboardShouldPersistTaps="handled"
               contentContainerStyle={styles.container}
               showsVerticalScrollIndicator={false}
               extraScrollHeight={scrollHeight}
          >
               {children}
          </KeyboardAwareScrollView>

     )
}

export default FormWrapper

const styles = StyleSheet.create({
     container: {
          flexGrow: 1,
     },
})