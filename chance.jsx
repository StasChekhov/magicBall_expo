import React, { useState, useEffect } from "react";
import { Text } from "react-native";

function FiftyFifty() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const randomNum = Math.random(); // generates a random number between 0 and 1
    if (randomNum < 0.5) {
      setMessage("Yes");
    } else {
      setMessage("No");
    }
  }, []);

  return (
    <Text style={{ position: "absolute", color: "white", fontSize: "30px" }}>
      {message}
    </Text>
  );
}

export default FiftyFifty;
