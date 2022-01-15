import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import UserStore from './MyComponents/UserStore';
import Home from './MyComponents/Home';
import { Button } from 'react-native-paper';

const App = () => {
  const store = new UserStore();

  return (
    <>
      <Text>
        <Home store={store} />

        
      </Text>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  bg: {
    color: 'red',
  },
});
