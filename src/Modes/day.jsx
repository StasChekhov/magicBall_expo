import { useEffect, useState } from "react";
import { Text } from "react-native";

function DaysOfTheWeek() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  }, []);

  return (
    <Text
      style={{
        position: "absolute",
        color: "white",
        fontSize: 15,
        textAlign: "center",
      }}
    >
      {phrase}
    </Text>
  );
}
export default DaysOfTheWeek;
