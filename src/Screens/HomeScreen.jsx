import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Vibration,
  TouchableOpacity,
  Text,
} from "react-native";

import ball from "../assets/ball.png";
import background from "../assets/background.png";

import { useEffect, useState } from "react";
import { Accelerometer } from "expo-sensors";

import PredictionCircle from "./PredictionCircle";
import { createContext } from "react";
import { useContext } from "react";
import { SettingContext } from "../context";

const THRESHOLD = 2.9; // adjust this value to suit your needs

export const TestContext = createContext();

export default function HomeScreen() {
  const [isShaken, setIsShaken] = useState(false);
  useEffect(() => {
    if (isShaken === false) {
      const subscription = Accelerometer.addListener((accelerometerData) => {
        if (
          Math.abs(accelerometerData.x) > THRESHOLD ||
          Math.abs(accelerometerData.y) > THRESHOLD ||
          Math.abs(accelerometerData.z) > THRESHOLD
        ) {
          // do something when the device is shaken
          console.log(" shaken!");
          setIsShaken(true);
          Vibration.vibrate();
          subscription.remove();
        }
      });
    }
    return;
  }, [isShaken]);

  const { backgroundImage } = useContext(SettingContext);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImage || background}
        resizeMode="cover"
        style={styles.background}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image style={styles.ball} source={ball} resizeMode="cover" />
          {isShaken ? <PredictionCircle /> : null}
          {isShaken ? (
            <TouchableOpacity
              style={styles.buttonBack}
              onPress={() => {
                setIsShaken(false);
              }}
            >
              <Text style={{ fontSize: 15 }}>Reset</Text>
            </TouchableOpacity>
          ) : (
            ""
          )}
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ball: {
    position: "relative",
    top: 100,
    width: 380,
    height: 380,
  },
  circle: {
    position: "absolute",
    top: 189.5,
  },
  buttonBack: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 80,
    height: 80,
    borderWidth: 4,
    borderRadius: 50,
    borderColor: "blue",
    top: 500,
  },
});
