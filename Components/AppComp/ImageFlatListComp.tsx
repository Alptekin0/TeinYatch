import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import Swiper from 'react-native-swiper';

interface ImageProps {
  image1Adress: any,
  image2Adress?: any
  image3Adress?: any
  image4Adress?: any
  image5Adress?: any
}

const ImageFlatListComp = ({ image1Adress, image2Adress, image3Adress, image4Adress, image5Adress }: ImageProps) => {
  return (

    <View style={{ width: 342, height: 243 }}>
      <Swiper
        dotColor="gray"
        activeDotColor="blue"
        removeClippedSubviews={false}
      >
        {/* 1. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={image1Adress} />
        </View>

        {/* 2. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={image2Adress} />
        </View>

        {/* 3. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={image3Adress} />
        </View>

        {/* 4. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={image4Adress} />
        </View>

        {/* 5. Resim */}
        <View style={styles.slide}>
          <Image style={styles.image} source={image5Adress} />
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