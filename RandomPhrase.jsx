import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";

function RandomPhrase() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "Фраза 1",
    "Фраза 2",
    "Фраза 3",
    "Фраза 4",
    "Фраза 5",
    "Фраза 6",
    "Фраза 7",
    "Фраза 8"
  ];

  useEffect(()=> {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  },[])


  return (
    <View>
      <Text>{phrase}</Text>
    </View>
  );
}
export default RandomPhrase;