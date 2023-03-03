import { useEffect, useRef } from "react";
import { Animated, StyleSheet, SafeAreaView, Image, View } from "react-native";

import FiftyFifty from "../../chance";
import RandomPhrase from "../../RandomPhrase";
import Ellipse from "../assets/Ellipse.png";

const PredictionCircle = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          // Bind opacity to animated value
          opacity: fadeAnim,
        }}
      >
        <View style={styles.view}>
          <Image source={Ellipse} />
          {/* <FiftyFifty /> */}
          <RandomPhrase />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 190,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PredictionCircle;
