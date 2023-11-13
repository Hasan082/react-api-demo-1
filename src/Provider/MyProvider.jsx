
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);

  const updateValue = (newValue) => {
    setLoader(newValue);
  };

  return (
    <MyContext.Provider value={{ loader, setLoader, updateValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
