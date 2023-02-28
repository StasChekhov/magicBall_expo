// import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, View, Vibration, TouchableOpacity, Text} from 'react-native';
import ball from "./src/assets/ball.png"
import Ellipse from "./src/assets/Ellipse.png"
import background from "./src/assets/background.png"

import {  useEffect, useState } from 'react';
import { Accelerometer } from 'expo-sensors';
import FiftyFifty from './chance';
import RandomPhrase from './RandomPhrase';

const THRESHOLD = 1.2; // adjust this value to suit your needs

export default function App() {
  const [isShaken, setIsShaken] = useState(false);
  console.log("isShaken",isShaken);
  useEffect(() => {
   if (isShaken===false) {
     const subscription = Accelerometer.addListener((accelerometerData) => {
       if (Math.abs(accelerometerData.x) > THRESHOLD ||
           Math.abs(accelerometerData.y) > THRESHOLD ||
           Math.abs(accelerometerData.z) > THRESHOLD) {
         // do something when the device is shaken
         console.log(' shaken!');
        
         setIsShaken(true)
         Vibration.vibrate()
         // Accelerometer.setUpdateInterval(1000);
         subscription.remove()
       }

     });
   }
    return 
  }, [isShaken])
  

  return (
    <View style={styles.container}>
       <ImageBackground source={background} resizeMode="cover" style={styles.background}>
        <View style={{ alignItems: 'center',
    justifyContent: 'center',}}>
          <Image style={styles.ball} source={ball}/>
          {isShaken ?
          <>
          <Image style={styles.circle} source={Ellipse}/>
          <RandomPhrase style={{position: "absolute", top:"100px"}}/>
          </>
          : null
        }
        
        {isShaken ? 
      <TouchableOpacity style={{borderWidth: 5, borderColor: "green"}} onPress={()=> {setIsShaken(false)}}>
      <Text>Button back</Text>
    </TouchableOpacity> 
    :
    <TouchableOpacity style={{borderWidth: 5, borderColor: "red"}}>
          <Text>Button back</Text>
        </TouchableOpacity>
      }
        </View>
       </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: "center"
    // resizeMode: 'cover',
  },
  ball: {
    position:"relative",
    top: 100

  }, 
  circle:{
  position:"absolute",
  top: 189.5
  }
})
