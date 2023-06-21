import { StyleSheet, View } from "react-native";
import SwitchGroup from "./switchGroup";
import BackgroundImage from "./BackgroundImage";

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <BackgroundImage />
      <View
        style={{
          width: "100%",
        }}
      >
        <SwitchGroup />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "flex-start",
    paddingTop: 50,
  },
});

export default SettingsScreen;
