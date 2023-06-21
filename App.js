import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { SettingContext } from "./src/context";

// import HomeScreen from "./src/Screens/HomeScreen";
import { useRoute } from "./src/router";

export default function App() {
  const routing = useRoute();
  const settingsValues = [
    { id: 1, title: "Classic", value: true },
    { id: 2, title: "Yes or No", value: false },
    { id: 3, title: "Days of the week", value: false },
    { id: 4, title: "Months", value: false },
  ];

  const [switches, setSwitches] = useState(settingsValues);

  const updateMySwitches = (newValue) => {
    setSwitches(newValue);
  };

  const [backgroundImage, setBackgroundImage] = useState(null);

  const handleChooseBackground = (image) => {
    setBackgroundImage(image);
  };

  const contextValue = {
    backgroundImage,
    handleChooseBackground,
    switches,
    updateMySwitches,
  };

  return (
    <SettingContext.Provider value={contextValue}>
      <NavigationContainer>{routing}</NavigationContainer>
    </SettingContext.Provider>
  );
}

// const styles = StyleSheet.create({})
