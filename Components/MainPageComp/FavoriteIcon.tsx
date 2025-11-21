import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../Slices/IsFavoritedSlice';

interface productId {
     id: number
}

const FavoriteIcon = ({ id }: productId) => {
     const dispatch = useDispatch();


     const favoritesList = useSelector((state: any) => state.isFavorite.favoritesList);
     const isFavorite = favoritesList.includes(id);
     return (
          <TouchableOpacity
               style={styles.heartIcon}
               onPress={() => dispatch(toggleFavorite(id))}
          >
               {isFavorite ? (
                    <Entypo name="heart" size={24} color="#DD0808" />
               ) : (
                    <Entypo name="heart-outlined" size={24} color="#DD0808" />
               )}
          </TouchableOpacity>
     )
}

export default FavoriteIcon

const styles = StyleSheet.create({
     heartIcon: {
          position: 'absolute',
          zIndex: 10,
          top: 15,
          right: 15,
          width: 40,
          height: 40,
          alignItems: 'center',
          justifyContent: 'center',
     },
})