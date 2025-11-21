import { Button, Modal, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useState } from 'react'
import Feather from '@expo/vector-icons/Feather';


interface ModalProps {
     visible: boolean;
     onClose: () => void;
}

const ModalComponent = ({ visible, onClose }: ModalProps) => {

     return (
          <Modal visible={visible} animationType='slide' onRequestClose={onClose} transparent>

               <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                         <Feather name="check-circle" size={24} color="#1366B2" />
                         <Text style={styles.title}> Şifreniz Yenilendi </Text>
                         <Text style={styles.text}> Yeni şifrenizle giriş yapabilirsiniz </Text>

                         <Button title='Giriş Yap' onPress={onClose} />

                    </View>
               </View>


          </Modal>
     )
}

export default ModalComponent

const styles = StyleSheet.create({
     modalBackground: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0,0,0,0.5)",
     },
     modalContent: {
          width: 240,
          height: 170,
          padding: 15,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          borderWidth: 0.5,

     },
     title: {
          fontWeight: 600,
          marginVertical: 10
     },
     text: {
          marginBottom: 20
     }

})