import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert } from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { getImageforDate, getImageforToday } from './utils/api';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> NASA PICTURE OF THE DAY</Text>
      <StatusBar style="auto" />
      <Image 
      style={styles.picture}
        source={{ 
          width: 350,
          height: 600,
          uri: "https://picsum.photos/200/300"}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    //justifyContent: 'center',
  }, 
  titleText: {
    fontSize: 35,
    color: 'white',
    fontFamily: 'AmericanTypewriter'
  },
  picture: {
    //position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    //right: 80,
    //top: 200,
  }
});
