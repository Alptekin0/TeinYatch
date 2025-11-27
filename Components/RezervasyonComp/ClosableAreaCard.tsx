import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Input from '../AppComp/Input';


const ClosableAreaCard = () => {
     const [close, setClose] = useState(true);
     const [height, setHeight] = useState(48);
     const [display, setDisplay] = useState<'flex' | 'none'>('none');
     const [color, setColor] = useState('#1366B2');

     const [kartSahibiAdi, setKartSahibiAdi] = useState("");

     const AreaClose = () => {
          setClose(true);
          setHeight(48);
          setDisplay('none');
          setColor('black');
     };

     const AreaOpen = () => {
          setHeight(350);
          setClose(false);
          setDisplay('flex');
          setColor('#1366B2');
     };

     // Kart numarası yönetimi
     const [cardNumber, setCardNumber] = useState(['', '', '', '']);
     const [sonkullanimTarihi, setSonkullanimTarihi] = useState(['', '']);
     const [CVC, setCVC] = useState(['']);

     const inputs = useRef<Array<TextInput | null>>([]);

     const handleChange = (text: string, index: number) => {
          const cleanText = text.replace(/[^0-9]/g, '');
          const newCard = [...cardNumber];
          newCard[index] = cleanText;
          setCardNumber(newCard);

          if (cleanText.length === 4 && index < 3) {
               inputs.current[index + 1]?.focus();
          }

          if (cleanText.length === 0 && index > 0) {
               inputs.current[index - 1]?.focus();
          }
     };

     const handleChangeSKT = (text: string, index: number) => {
          const cleanText = text.replace(/[^0-9]/g, '');
          const SKT = [...sonkullanimTarihi];
          SKT[index] = cleanText;
          setSonkullanimTarihi(SKT);

          if (cleanText.length === 2 && index < 1) {
               inputs.current[index + 1]?.focus();
          }

          if (cleanText.length === 0 && index > 0) {
               inputs.current[index - 1]?.focus();
          }
     };

     const handleChangeCVC = (text: string, index: number) => {
          const cleanText = text.replace(/[^0-9]/g, '');
          const cvc = [...CVC];
          cvc[index] = cleanText;
          setCVC(cvc);
     };

     return (
          <View style={[styles.container, { height }]}>

               <View style={styles.titleWrapper}>
                    <FontAwesome6 name="money-check" size={20} color={color} />
                    <Text style={[styles.title, { color }]}>Kredi Kartı ile Ödeme</Text>

                    {close ? (
                         <TouchableOpacity style={styles.button} onPress={AreaOpen}>
                              <SimpleLineIcons name="arrow-down" size={22} color={color} />
                         </TouchableOpacity>
                    ) : (
                         <TouchableOpacity style={styles.button} onPress={AreaClose}>
                              <SimpleLineIcons name="arrow-up" size={22} color={color} />
                         </TouchableOpacity>
                    )}
               </View>

               <View style={{ marginTop: 20 }} />

               <View style={[styles.bodyWrapper, { display }]}>

                    <Input
                         Title='Kart Sahibinin Adı'
                         height={48}
                         width={330}
                         keyboardType='default'
                         placeholder='Kart Sahibinin Adı'
                         value={kartSahibiAdi}
                         onChangeText={(text) => setKartSahibiAdi(text)}
                    />

                    <Text style={{ marginTop: 30, fontSize: 16 }}>Kart Numarası</Text>

                    <View style={styles.kartNoWrapper}>
                         {cardNumber.map((section, index) => (
                              <TextInput
                                   key={index}
                                   style={styles.input}
                                   maxLength={4}
                                   keyboardType="number-pad"
                                   value={section}
                                   onChangeText={(text) => handleChange(text, index)}
                                   ref={(ref) => { inputs.current[index] = ref; }}
                              />
                         ))}
                    </View>


                    <View style={{ flexDirection: "row", gap: 50 }}>
                         <View>
                              <Text style={{ marginTop: 30, fontSize: 16 }}>Son Kullanım Tarihi</Text>
                              <View style={styles.kartNoWrapper}>
                                   {sonkullanimTarihi.map((section, index) => (
                                        <TextInput
                                             key={index}
                                             style={styles.input}
                                             maxLength={2}
                                             keyboardType="number-pad"
                                             value={section}
                                             onChangeText={(text) => handleChangeSKT(text, index)}
                                             ref={(ref) => { inputs.current[index] = ref; }}
                                        />
                                   ))}
                              </View>
                         </View>


                         <View>

                              <Text style={{ marginTop: 30, fontSize: 16 }}>CVV/CVC</Text>

                              <View style={styles.kartNoWrapper}>
                                   {CVC.map((section, index) => (
                                        <TextInput
                                             key={index}
                                             style={styles.input}
                                             maxLength={3}
                                             keyboardType="number-pad"
                                             value={section}
                                             onChangeText={(text) => handleChangeCVC(text, index)}
                                             ref={(ref) => { inputs.current[index] = ref; }}
                                        />
                                   ))}
                              </View>

                         </View>
                    </View>
               </View>
          </View>
     )
}

export default ClosableAreaCard

const styles = StyleSheet.create({
     container: {
          width: 356,
          backgroundColor: "#F2F9FF",
          borderWidth: 1,
          borderColor: "#CCE7FF",
          alignItems: "center",
          padding: 10
     },
     titleWrapper: {
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between"
     },
     button: {
          width: 40,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
     },
     title: {
          fontWeight: '500',
          fontSize: 18,
     },
     bodyWrapper: {},
     kartNoWrapper: {
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
     },
     input: {
          width: 75,
          height: 50,
          borderWidth: 1,
          borderColor: "#1366B2",
          borderRadius: 8,
          fontSize: 18,
          paddingHorizontal: 15,
          fontWeight: '600',
     }
});
