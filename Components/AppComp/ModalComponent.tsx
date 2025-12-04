import { TouchableOpacity, Modal, StyleSheet, Text, View, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from '@expo/vector-icons/Feather';



interface ModalProps {
     visible: boolean;
     onClose: () => void;
     title: string;
     text: string;
     ButtonTitle: string;
     icon?: React.ReactElement;
     ButtonColor?: string;
}

const ModalComponent = ({ visible, onClose, title, text, ButtonTitle, ButtonColor = "#1366B2",
     icon = <Feather name="check-circle" size={24} color="#1366B2" /> }: ModalProps) => {

     return (
          <Modal visible={visible} animationType='slide' onRequestClose={onClose} transparent>

               <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                         {icon}
                         <Text style={styles.title}>{title}</Text>
                         <Text style={styles.text}> {text}  </Text>

                         <TouchableOpacity onPress={onClose} style={[styles.button, { backgroundColor: ButtonColor }]}>
                              <Text style={{ color: "white", fontWeight: 600 }}>{ButtonTitle}</Text>
                         </TouchableOpacity>

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
          width: 320,
          height: "auto",
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          alignItems: "center",
          borderWidth: 0.5,

     },
     title: {
          fontWeight: 600,
          marginVertical: 3
     },
     text: {
          marginBottom: 20
     },
     button: {
          width: 180,
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
     }

})