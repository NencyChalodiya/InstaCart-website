import React, { createContext, useState } from "react";

export const TotalContext = createContext();

export const TotalProvider = ({ children }) => {
  const [total, setTotal] = useState(null);

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      {children}
    </TotalContext.Provider>
  );
};
