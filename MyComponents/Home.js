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
import {observer} from 'mobx-react';
import {Provider as PaperProvider, Button} from 'react-native-paper';
import {observe} from 'mobx';

const Home = ({store}) => {

const onChange = () => {
    store.updateUser('purvi')
}

const addSub= () => {
    store.addSubject('tamil')
}

  return (
    <>
      

      <PaperProvider>
      <Text style={styles.bg}>{store.userInfo.name}</Text>
      {/* <Text style={styles.bg}>{store.userInfo.subject}</Text> */}
        <Button
          icon="forward"
          mode="contained"
          onPress={onChange}>
          update name
        </Button>
        <Button
        style = {styles.top}
          icon="forward"
          mode="contained"
          onPress={addSub}>
          add subject
        </Button>
        {store.userInfo.subject.map((item,index)=>
                <Text key = {index}>{item}</Text>
        )}
      </PaperProvider>
    </>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  bg: {
    fontSize: 20,
  },
  top: {
      marginTop: 10
  }
});
