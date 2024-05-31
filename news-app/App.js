import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, } from 'react-native';
import NewsKizi from './components/NewsKizi';

export default function App() {
  return (
    <View style={styles.container}>
      <NewsKizi />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});