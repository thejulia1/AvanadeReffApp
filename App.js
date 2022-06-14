import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableWithoutFeedback, Button,  Dimensions } from 'react-native';
import React, { useEffect, useState, Component}  from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import DateTimePickerModal from "react-native-modal-datetime-picker";

//Imports from my files
import { SECRET_API_KEY } from './config';
const lib = require('./dateConverter');



//url components

const baseurl = 'https://api.nasa.gov/planetary/apod?api_key='
const urlWithDate = '&date='
//picture dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  //Set state
  const [image, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorOccured, setErrorOcured] = useState(false);

  //Spends a requesst to Nasa api
  const fetchingapi = (aUrl) => {
    fetch(aUrl)
      .then((response) => response.json())
      .then((rjson) => setImage(rjson))
      .catch((error) => alert(error) && setErrorOcured(true))
      .finally(() => setLoading(false));
      console.log(image);
  }

  //date picker config from c/p from react-native website
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    //console.warn("A date has been picked: ", date);
    const day = date.toString();
    fetchingapi(baseurl + SECRET_API_KEY + urlWithDate + lib.convert(day));
    hideDatePicker();
  };

  // Event handler for pressing image
  const descripAlert = () => {Alert.alert(image.title, image.explanation)};
  const genPic = () => {console.log(isLoading)};
 
  //calls fetchingapi funtion
  useEffect(() => {
    if (!errorOccured && isLoading) {
      fetchingapi(baseurl + SECRET_API_KEY)}});

  if (!isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={genPic}>
        <Text style={styles.titleText}> NASA PICTURE OF THE DAY</Text>
        </TouchableWithoutFeedback>
        
        <StatusBar style="auto" />
        <TouchableWithoutFeedback onPress={descripAlert}>
        <Image 
        style={styles.picture}
          source={{ 
            width: windowWidth,
            height: windowHeight / 1.27,
          uri: image.url} }/>
        </TouchableWithoutFeedback>

        <Button title="Find Picture By Date" color="white" onPress={showDatePicker}/>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
      />
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={genPic}>
      <Text style={styles.titleText}> NASA PICTURE OF THE DAY</Text>
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
      <Button title="Find Picture By Date" color="white" onPress={ /** filler input*/ descripAlert}/>
    </SafeAreaView>
    )
  }
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
export default App;