import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Screen4 from './Screen4'
import Screen5 from './Screen5'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Screen5 />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    padding: 8,
  },
  
});
