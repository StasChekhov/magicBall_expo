// import React from "react";

// export const SettingContext = React.createContext();

import React, { useState, createContext } from "react";

export const SettingContext = createContext();

// export const SettingContextProvider = ({ children }) => {
//   const [myState, setMyState] = useState("initial value");

//   const updateMyState = (newValue) => {
//     setMyState(newValue);
//   };

//   const contextValue = {
//     myState,
//     updateMyState,
//   };

//   return (
//     <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
//   );
// };
