import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import { List } from 'react-native-paper';
import Header from "../../../Components/AppComp/AppPagesHeader";

const SSS_DATA = [  // BU sayfayı komple yapay zeka yaptı sonra kontrol et.
  {
    id: '1',
    title: 'Teinyacth nedir ?',
    answer: 'Kullanıcılarımızın ödeme güvenlikleri için tüm önlemleri aldık. Rekabetçi ve uluslararası standartların üzerindeki teknolojik altyapımız sayesinde güveni ve konforu bir arada sunmaktayız.'
  },
  {
    id: '2',
    title: 'Teinyacth güvenli midir ?',
    answer: 'Kullanıcılarımızın ödeme güvenlikleri için tüm önlemleri aldık. Rekabetçi ve uluslararası standartların üzerindeki teknolojik altyapımız sayesinde güveni ve konforu bir arada sunmaktayız.'
  },
  {
    id: '3',
    title: 'Rezervasyonumu iptal edebilir miyim ?',
    answer: 'Rezervasyon politikalarımıza göre, belirli süre içerisinde iptal işlemi yapabilirsiniz. Detaylar rezervasyon ekranında belirtilmektedir.'
  },
  {
    id: '4',
    title: 'Kayıt olmadan rezervasyon yapabilir miyim ?',
    answer: 'Evet, kayıt olmadan da rezervasyon yapabilirsiniz. Ancak kayıtlı kullanıcılarımız ek avantajlardan yararlanabilir.'
  },
  {
    id: '5',
    title: 'Ekstra hizmetler fiyata dahil mi ?',
    answer: 'Her teknenin ekstra hizmet politikası farklıdır. İlgili tekne detay sayfasında fiyata dahil olan hizmetleri görebilirsiniz.'
  },
  {
    id: '6',
    title: 'Rezervasyonda değişiklik yapabilir miyim ?',
    answer: 'Rezervasyon değişiklik kuralları tekne sahibine bağlı olarak değişmektedir. Uygulama içinden destek talebi oluşturabilirsiniz.'
  },
  {
    id: '7',
    title: 'Ödeme seçenekleri nelerdir ?',
    answer: 'Kredi/banka kartı ile ödeme yapabilirsiniz. Güvenli ödeme altyapımız tüm işlemleri şifrelenmiş olarak gerçekleştirir.'
  },
  {
    id: '8',
    title: 'Depozito nedir ?',
    answer: 'Depozito; tekneye zarar gelmesi durumunda kullanılan güvence bedelidir. Sorunsuz dönüşlerde otomatik şekilde iade edilir.'
  },
  {
    id: '9',
    title: 'Yakıt fiyata dahil mi ?',
    answer: 'Yakıt ücreti çoğunlukla fiyata dahil değildir. Tekne detaylarında "fiyata dahil" alanını kontrol edebilirsiniz.'
  },
  {
    id: '10',
    title: 'Teknede bir hasar oluştu ne yapmalıyım ?',
    answer: 'Herhangi bir hasar durumunda doğrudan uygulama üzerinden tekne sahibi ile iletişime geçebilir veya destek ekibimizden yardım alabilirsiniz.'
  },
];

const SSS = () => {
  const [expandedId, setExpandedId] = useState<string | number | undefined>(undefined);

  const handlePress = (id: string | number) => {
    setExpandedId(expandedId === id ? undefined : id);
  };

  return (
    <View style={styles.container}>
      <Header text='Sıkça Sorulan Sorular' />

      <Image style={styles.image} source={require("../../../assets/icons/SSS.png")} />

      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        <List.AccordionGroup
          expandedId={expandedId}
          onAccordionPress={handlePress}
        >
          {SSS_DATA.map((item) => {
            const isActive = expandedId === item.id;

            return (
              <List.Accordion
                key={item.id}
                id={item.id}
                title={item.title}
                theme={{ colors: { primary: '#1366B2' } }}
                titleStyle={{
                  fontWeight: isActive ? 'bold' : 'normal',
                  color: isActive ? '#1366B2' : '#333',
                  fontSize: 15
                }}
                style={{
                  backgroundColor: isActive ? '#F0F8FF' : '#fff',
                  borderBottomWidth: 1,
                  borderBottomColor: '#eee'
                }}
              >
                <View style={styles.answerWrapper}>
                  <Text style={styles.answerText}>
                    {item.answer}
                  </Text>
                </View>
              </List.Accordion>
            );
          })}
        </List.AccordionGroup>
      </ScrollView>
    </View>
  );
};

export default SSS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    alignSelf: "center",
    marginBottom: 35,
  },
  answerWrapper: {
    padding: 16,
    backgroundColor: '#fafafa',
  },
  answerText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 22,
  }
});