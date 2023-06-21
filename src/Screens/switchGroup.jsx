import { createContext } from "react";
import { useState, useContext } from "react";
import { StyleSheet, View, Switch, Text } from "react-native";
// import { Context } from "../context";
import { SettingContext } from "../context";

const SwitchGroup = () => {
  const { switches, updateMySwitches } = useContext(SettingContext);

  const handleSwitchToggle = (id) => {
    const newSwitches = switches.map((item) =>
      item.id === id ? { ...item, value: true } : { ...item, value: false }
    );
    updateMySwitches(newSwitches);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          textAlign: "center",
        }}
      >
        Mode
      </Text>
      {switches.map((item) => (
        <View key={item.id} style={styles.switchContainer}>
          <Text style={{ fontSize: 20 }}>{item.title}</Text>
          <Switch
            style={{ transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }] }}
            trackColor={{ false: "light-grey", true: "#32CD32" }}
            thumbColor={item.value ? "white" : "white"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => handleSwitchToggle(item.id)}
            value={item.value}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    marginTop: 5,
  },
});

export default SwitchGroup;
