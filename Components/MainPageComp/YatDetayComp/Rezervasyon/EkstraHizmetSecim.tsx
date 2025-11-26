import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import EkstraHizmetRadioButton from './EkstraHizmetRadioButton'
import { EkstraHizmetler } from '../../../../Fake-Data/EkstraHizmetler'
import { RootState, AppDispatch } from '../../../../Redux/store'
import { toggleOption } from '../../../../Slices/EkstraHizmetSlice'

const EkstraHizmetSecim = () => {
     const dispatch = useDispatch<AppDispatch>()
     const selectedOptions = useSelector((state: RootState) => state.EkstraHizmet.selectedOptions)

     return (
          <View>
               {EkstraHizmetler.map((hizmet: any) => (
                    <View key={hizmet.categoryId} style={styles.container}>
                         <Text style={styles.title}>{hizmet.categoryTitle}</Text>
                         <View style={{ marginTop: 10 }}>
                              {hizmet.options.map((item: any) => (
                                   <EkstraHizmetRadioButton
                                        key={item.id}
                                        HizmetIsmi={item.title}
                                        fiyat={item.price}
                                        unit={item.unit}
                                        selected={!!selectedOptions[item.id]}
                                        onPress={() => dispatch(toggleOption(item.id))}
                                   />
                              ))}
                         </View>
                    </View>
               ))}
          </View>



     )
}

export default EkstraHizmetSecim

const styles = StyleSheet.create({
     container: {
          width: '85%',
          marginTop: 10
          ,
     },
     title: {
          fontSize: 20,
          color: '#1366B2',
     },
})
