// import { useState } from "react";
import { useContext } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { SettingContext } from "../context";
import { useState } from "react";

const images = [
  {
    source: require("../assets/background.png"),
    title: "Standart blue",
  },
  {
    source: require("../assets/backgroundMystics.png"),
    title: "Mystic",
  },
  {
    source: require("../assets/backgroundWatercolors.png"),
    title: "Watercolor",
  },
  {
    source: require("../assets/backgroundGreen.png"),
    title: "Green",
  },
  {
    source: require("../../SplashScreen.png"),
    title: "Green lights",
  },
  {
    source: require("../assets/backgroundUniverse.png"),
    title: "Universe",
  },
];

const BackgroundImage = () => {
  const { handleChooseBackground } = useContext(SettingContext);

  const [selectedBackground, setSelectedBackground] = useState(
    images[0].source
  );
  const handleBackgroundSelection = (image) => {
    setSelectedBackground(image);
    handleChooseBackground(image);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textArticle}>Choose the background</Text>
      {images.map((image, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            selectedBackground === image.source && styles.buttonSelected,
          ]}
          onPress={() => handleBackgroundSelection(image.source)}
        >
          <Text
            style={[
              styles.buttonText,
              selectedBackground === image.source && styles.buttonTextSelected,
            ]}
          >
            {image.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  textArticle: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",

    padding: 10,
  },
  buttonSelected: {
    backgroundColor: "#32CD32",
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
  buttonTextSelected: {
    color: "white",
  },
});

export default BackgroundImage;
