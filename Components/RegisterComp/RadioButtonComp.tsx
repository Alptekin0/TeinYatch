import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { setRegisterType } from '../../Slices/RegisterTypeSlice'


const RadioButtonComp = () => {

     const [checked, setChecked] = useState('first');

     const RegisterType = useSelector((state: any) => state.RegisterType.RegisterType);

     const dispatch = useDispatch();

     return (
          <View style={styles.container}>

               <TouchableOpacity
                    style={styles.radioItem}
                    onPress={() => { setChecked('first'), dispatch(setRegisterType(true)) }}
               >
                    <RadioButton
                         value="first"
                         status={checked === 'first' ? 'checked' : 'unchecked'}
                         onPress={() => { setChecked('first'), dispatch(setRegisterType(true)) }}
                         color="#1366B2"
                    />
                    <Text style={styles.label}>Müşteri</Text>
               </TouchableOpacity>

               <TouchableOpacity
                    style={styles.radioItem}
                    onPress={() => { setChecked('second'), dispatch(setRegisterType(false)) }}
               >
                    <RadioButton
                         value="second"
                         status={checked === 'second' ? 'checked' : 'unchecked'}
                         onPress={() => { setChecked('second'), dispatch(setRegisterType(false)) }}
                         color="#1366B2"
                    />
                    <Text style={styles.label}>Acente</Text>
               </TouchableOpacity>

          </View>
     )
}

export default RadioButtonComp

const styles = StyleSheet.create({
     container: {
          padding: 10,
          flexDirection: "row",
          width: 330,
          justifyContent: "space-around",
          alignItems: "center",
          gap: 50
     },
     radioItem: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: "flex-start",
          marginLeft: 32,
          marginBottom: 5,
          width: 100,
     },
     label: {
          fontSize: 16,
          color: '#333',
     }
})