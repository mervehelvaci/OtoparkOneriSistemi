import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const [svalue, setSvalue] = useState(true);
  return (
    <GlobalContext.Provider value={{ svalue: svalue, setSvalue }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
