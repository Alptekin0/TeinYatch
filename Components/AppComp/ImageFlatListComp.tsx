import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Swiper from 'react-native-swiper';

const ImageFlatListComp = () => {
  return (
    <View style={{ height: 250 }}>
      <Swiper
        dotColor="gray"
        activeDotColor="blue"
      >
        {/* 1. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/icons/tein_tekne 1.png")} />
        </View>

        {/* 2. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/icons/tein_tekne 1.png")} />
        </View>

        {/* 3. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={require("../../assets/icons/tein_tekne 1.png")} />
        </View>
      </Swiper>
    </View>
  )
}

export default ImageFlatListComp

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 342,
    height: 243,
    borderRadius: 10,
  }
})