import { useEffect, useRef, useContext } from "react";
import { Animated, StyleSheet, SafeAreaView, Image, View } from "react-native";

import FiftyFifty from "../Modes/chance";
import RandomPhrase from "../Modes/RandomPhrase";
import DaysOfTheWeek from "../Modes/day";
import Months from "../Modes/Months";

import Ellipse from "../assets/Ellipse.png";
import { SettingContext } from "../context";

function PredictionCircle() {
  const { switches } = useContext(SettingContext);

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const listItems = switches.map((item) => {
    if (item.id === 1 && item.title === "Classic" && item.value === true) {
      return <RandomPhrase />;
    } else if (
      item.id === 2 &&
      item.title === "Yes or No" &&
      item.value === true
    ) {
      return <FiftyFifty />;
    } else if (
      item.id === 3 &&
      item.title === "Days of the week" &&
      item.value === true
    ) {
      return <DaysOfTheWeek />;
    } else if (
      item.id === 4 &&
      item.title === "Months" &&
      item.value === true
    ) {
      return <Months />;
    }
  });

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
          <Image source={Ellipse} style={styles.circle} />
          {listItems}
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 208,
  },
  view: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 170,
    height: 170,
  },
});

export default PredictionCircle;
