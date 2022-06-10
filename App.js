import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Alert, TouchableWithoutFeedback, Button} from 'react-native';
import React, { useEffect, useState }  from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
//import { config } from 'dotenv';
import { SECRET_API_KEY } from './config';


//filler var for photo description and name
const baseurl = 'https://api.nasa.gov/planetary/apod?api_key='

const App = () => {
  //Set state
  const [image, setImage] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorOccured, setErrorOcured] = useState(false);

  const fetchingapi = () => {
    fetch(baseurl + SECRET_API_KEY)
      .then((response) => response.json())
      .then((rjson) => setImage(rjson))
      .catch((error) => alert(error) && setErrorOcured(true))
      .finally(() => setLoading(false));
      console.log(image);
  }

  // Event handler for pressing image
  const descripAlert = () => {Alert.alert(image.title, image.explanation)};
  const genPic = () => {console.log(isLoading)};
 
  useEffect(() => {
    if (!errorOccured && isLoading) {
      fetchingapi()}});

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
            width: 350,
            height: 600,
          uri: image.hdurl} }/>
        </TouchableWithoutFeedback>
        <Button title="Find Picture By Date" color="white" onPress={descripAlert}/>
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