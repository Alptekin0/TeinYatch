import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView, TouchableWithoutFeedback, ImageSourcePropType } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

interface JobDetailModalProps {
     isVisible: boolean;
     onClose: () => void;
}

const CustomModal = ({ isVisible, onClose }: JobDetailModalProps) => {
     return (
          <Modal
               visible={isVisible}
               animationType="slide"
               transparent={true}
               onRequestClose={onClose}
          >
               <View style={styles.overlay}>

                    <TouchableWithoutFeedback onPress={onClose}>
                         <View style={styles.backdrop} />
                    </TouchableWithoutFeedback>

                    <View style={styles.sheetContainer}>

                         <View style={styles.handleBar} />

                         <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                              <Ionicons name="close" size={24} color="#333" />
                         </TouchableOpacity>

                         <ScrollView contentContainerStyle={styles.content}>

                              <View style={styles.headerRow}>
                                   <View style={styles.logoWrapper}>
                                        <Image
                                             source={require('../../../assets/icons/tein-logo.jpg')}
                                             style={styles.logo}
                                        />
                                   </View>
                                   <View style={styles.headerInfo}>
                                        <Text style={styles.title}>Motoryatımız İçin Kaptan Arayışımız Vardır.</Text>
                                        <Text style={styles.companyName}>TEINYACHT</Text>
                                   </View>
                              </View>

                              <View style={styles.infoSection}>
                                   <View style={styles.infoRow}>
                                        <MaterialCommunityIcons name="calendar-month-outline" size={20} color="#1366B2" />
                                        <Text style={styles.infoText}>2 Hafta önce yayınlandı</Text>
                                   </View>

                                   <View style={styles.infoRow}>
                                        <Ionicons name="location-outline" size={20} color="#1366B2" />
                                        <Text style={styles.infoText}>İstanbul, Türkiye</Text>
                                   </View>

                                   <View style={styles.infoRow}>
                                        <MaterialCommunityIcons name="briefcase-outline" size={20} color="#1366B2" />
                                        <Text style={styles.infoText}>Tam Zamanlı · Kaptan</Text>
                                   </View>
                              </View>

                              <View style={styles.divider} />

                              <Text style={styles.sectionTitle}>İş İlanı Hakkında</Text>
                              <Text style={styles.description}>
                                   AÇIKLAMA...
                              </Text>

                              <View style={{ height: 80 }} />

                         </ScrollView>

                         <View style={styles.footer}>
                              <TouchableOpacity style={styles.applyButton}>
                                   <Text style={styles.applyButtonText}>Başvuru Yap</Text>
                              </TouchableOpacity>
                         </View>

                    </View>
               </View>
          </Modal>
     );
};

const styles = StyleSheet.create({
     overlay: {
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.5)',
          justifyContent: 'flex-end',
     },
     backdrop: {
          ...StyleSheet.absoluteFillObject,
     },
     sheetContainer: {
          backgroundColor: 'white',
          width: '100%',
          height: '90%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 10,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
     },
     handleBar: {
          width: 50,
          height: 5,
          backgroundColor: '#ddd',
          borderRadius: 3,
          alignSelf: 'center',
          marginBottom: 10,
     },
     closeButton: {
          position: 'absolute',
          right: 20,
          top: 15,
          zIndex: 10,
     },
     content: {
          paddingHorizontal: 20,
     },
     headerRow: {
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
          marginTop: 10,
     },
     logoWrapper: {
          width: 64,
          height: 64,
          borderRadius: 32,
          borderWidth: 1,
          borderColor: '#eee',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 15,
          overflow: 'hidden',
     },
     logo: {
          width: 100,
          height: 30,
          resizeMode: 'contain',
     },
     headerInfo: {
          flex: 1,
          paddingRight: 20,
     },
     title: {
          fontSize: 16,
          fontWeight: 'bold',
          color: '#0056b3',
          marginBottom: 4,
     },
     companyName: {
          fontSize: 14,
          fontWeight: '600',
          color: '#333',
     },
     infoSection: {
          gap: 12,
     },
     infoRow: {
          flexDirection: 'row',
          alignItems: 'center',
     },
     infoText: {
          marginLeft: 10,
          color: '#555',
          fontSize: 14,
     },
     divider: {
          height: 1,
          backgroundColor: '#eee',
          marginVertical: 20,
     },
     sectionTitle: {
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 10,
     },
     description: {
          color: '#666',
          lineHeight: 22,
          fontSize: 14,
     },
     footer: {
          position: 'absolute',
          bottom: 30,
          left: 20,
          right: 20,
          backgroundColor: 'white',
     },
     applyButton: {
          backgroundColor: '#1366B2',
          paddingVertical: 16,
          borderRadius: 12,
          alignItems: 'center',
     },
     applyButtonText: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 'bold',
     },
});

export default CustomModal;