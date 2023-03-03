import { useEffect, useState } from "react";
import { Text } from "react-native";

function RandomPhrase() {
  const [phrase, setPhrase] = useState("");

  const phrases = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful.",
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
export default RandomPhrase;

// ------- affirmative answers --------- //
// ● It is certain.
// ● It is decidedly so.
// ● Without a doubt.
// ● Yes definitely.
// ● You may rely on it.
// ● As I see it, yes.
// ● Most likely.
// ● Outlook good.
// ● Yes.
// ● Signs point to yes.
// ------- non-committal answers --------- //
// ● Reply hazy, try again.
// ● Ask again later.
// ● Better not tell you now.
// ● Cannot predict now.
// ● Concentrate and ask again.
// ------- negative answers --------- //
// ● Don't count on it.
// ● My reply is no.
// ● My sources say no.
// ● Outlook not so good.
// ● Very doubtful.
