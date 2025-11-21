import RootNavigation from './Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Text, View } from 'react-native';


export default function App() {
  return (

    //<View><Text>asdsadasda</Text></View>

    <Provider store={store}>
      <RootNavigation />
    </Provider>

  );
}