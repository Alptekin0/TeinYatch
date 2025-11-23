import RootNavigation from './Navigation/RootNavigation';
import { Provider } from 'react-redux';
import { store } from './Redux/store';
import { Text, View } from 'react-native';


export default function App() {
  return (

    //<View style={{ alignItems: "center", justifyContent: "center", height: "100%" }}><Text style={{ fontSize: 20 }}>SelamAleyküm</Text></View>

    <Provider store={store}>
      <RootNavigation />
    </Provider>


  );
}