import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Header from '../../../Components/AppComp/AppPagesHeader';
import AcenteStepper from '../../../Components/AcenteComp/AcenteStepper';
import AppButton from '../../../Components/AppComp/AppButton';



interface SelectedImage {
  id: string;
  uri: string;
}

const Fotograflar = ({ navigation }: any) => {
  const [images, setImages] = useState<SelectedImage[]>([]);

  const pickImages = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.status !== 'granted') {
      alert("Galeri iznine ihtiyaç var!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      const newImages = result.assets.map((asset) => ({
        id: asset.assetId || Math.random().toString(),
        uri: asset.uri,
      }));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (id: string) => {
    setImages(images.filter((img) => img.id !== id));
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 40 }}>

      <Header text='Deniz Taşıtı Ekle' />

      <View style={{ width: '100%' }}>
        <AcenteStepper currentStep={7} />
      </View>


      {/* ÜST BÜYÜK YÜKLEME ALANI */}
      <TouchableOpacity onPress={pickImages} style={styles.bigUploadBox}>
        <AntDesign name="picture" size={48} color="#1366B2" />
        <Text style={styles.bigTitle}>Taşıtınıza ait fotoğrafları{"\n"}buradan ekleyebilirsiniz</Text>

        <View style={styles.infoRow}>
          <Feather name="info" size={16} color="#1366B2" />
          <Text style={styles.infoText}>
            Taşıt fotoğraflarının her ayrıntısıyla eklenmesi müşterilerinizin daha
            detaylı bilgi edinmesine yardımcı olacaktır.
          </Text>
        </View>
      </TouchableOpacity>

      {/* AŞAĞIDAKİ KÜÇÜK KUTUCUKLAR */}
      <View style={styles.grid}>
        {images.map((img) => (
          <View key={img.id} style={styles.imageWrapper}>
            <Image source={{ uri: img.uri }} style={styles.imageBox} />

            {/* Silme Butonu */}
            <TouchableOpacity
              onPress={() => removeImage(img.id)}
              style={styles.deleteButton}>
              <AntDesign name="close-circle" size={20} color="red" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Yeni fotoğraf ekleme kutusu */}
        <TouchableOpacity onPress={pickImages} style={styles.imageBox}>
          <AntDesign name="plus" size={32} color="#1366B2" />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", marginTop: 60, marginBottom: 50 }}>
        <AppButton width={240}
          height={44}
          borderRadius={5}
          color='white'
          fontSize={18}
          title='Kaydet ve Devam et'
          fontWeight={600}
          onPress={() => navigation.navigate('IslemSonucu')}
          backgroundColor='#1366B2' />
      </View>
    </ScrollView>
  );
};

export default Fotograflar;


const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    width: "100%",
  },

  bigUploadBox: {
    width: "90%",
    minHeight: 160,
    borderStyle: "dashed",
    borderWidth: 2,
    borderColor: "#1366B2",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#F8FBFF",
    marginTop: 50,
  },

  bigTitle: {
    color: "#1366B2",
    fontSize: 16,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 8,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 5,
    width: "90%",
  },

  infoText: {
    fontSize: 12,
    color: "#1366B2",
    flex: 1,
  },

  grid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    gap: 10,
  },

  imageWrapper: {
    position: "relative",
  },

  imageBox: {
    width: 80,
    height: 80,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#1366B2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FBFF",
  },

  deleteButton: {
    position: "absolute",
    top: -8,
    right: -8,
  },
});
