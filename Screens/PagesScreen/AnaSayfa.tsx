import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './AnaSayfaScreen/MainPage';
import YatDetay from './AnaSayfaScreen/YatDetay';
import RezervEt from './AnaSayfaScreen/RezervEt';
import RezervEkstraHizmet from './AnaSayfaScreen/RezervEkstraHizmet';
import RezervOdeme from './AnaSayfaScreen/RezervOdeme';
import RezervOnay from './AnaSayfaScreen/RezervOnay';
import YatDetayForSale from './AnaSayfaScreen/YatDetayForSaleNavigation';
import LocationSelectorMain from '../../Components/MainPageComp/LocationSelectorMain';

const Stack = createStackNavigator();


const AnaSayfa = () => {

  return (

    <Stack.Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen name='MainPage' component={MainPage} />
      <Stack.Screen name='LocationSelectorMain' component={LocationSelectorMain} />
      <Stack.Screen name='YatDetay' component={YatDetay} />
      <Stack.Screen name='YatDetayForSale' component={YatDetayForSale} />
      <Stack.Screen name='RezervEt' component={RezervEt} />
      <Stack.Screen name='RezervEkstraHizmet' component={RezervEkstraHizmet} />
      <Stack.Screen name='RezervOdeme' component={RezervOdeme} />
      <Stack.Screen name='RezervOnay' component={RezervOnay} />
    </Stack.Navigator>

  )
}

export default AnaSayfa