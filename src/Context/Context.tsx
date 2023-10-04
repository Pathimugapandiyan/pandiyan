import React, { createContext, useContext } from "react";

interface MyContextData {}

const MyContext = createContext<MyContextData | undefined>(undefined);

export const MyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const contextData: MyContextData = {};

  return (
    <MyContext.Provider value={contextData}>{children}</MyContext.Provider>
  );
};

export const useMyContext = (): MyContextData => {
  const context = useContext(MyContext);

  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
