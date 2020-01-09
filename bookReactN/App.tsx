import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Routes from './app/Routes.tsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="#002f6c"
        barStyle="light-content"
      />
      <Routes />
    </View>
  );
}
