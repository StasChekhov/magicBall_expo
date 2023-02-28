import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';

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
    <Text style={{opacity: 999, position:"absolute" , color:"red"}}>{message}</Text>
  );
}

export default FiftyFifty;

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

