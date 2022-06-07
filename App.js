import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableWithoutFeedback, Button} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { getImageforDate, getImageforToday } from './utils/api';


//filler var for photo description and name
let photoDescrip = "...";
let photoName = "Name of Photo";
// Event handler for pressing image
const descripAlert = () => {Alert.alert(photoName, photoDescrip)};

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}> NASA PICTURE OF THE DAY</Text>
      <StatusBar style="auto" />
      <TouchableWithoutFeedback onPress={descripAlert}>
      <Image 
      style={styles.picture}
        source={{ 
          width: 350,
          height: 600,
          //this is a filler image - not for final product 
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableWithoutFeedback>
      <Button title="Find Picture By Date" color="white" onPress={/* filler input */ descripAlert}/>
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
