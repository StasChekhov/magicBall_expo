import { useEffect, useState } from "react";
import { Text } from "react-native";

function DaysOfTheWeek() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
