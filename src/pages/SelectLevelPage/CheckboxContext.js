import { createContext, useContext, useState } from "react";

const CheckboxContext = createContext();

export const useCheckbox = () => {
  return useContext(CheckboxContext);
};

export const CheckboxProvider = ({ children }) => {
  const [isEasyMode, setIsEasyMode] = useState(false);

  return <CheckboxContext.Provider value={{ isEasyMode, setIsEasyMode }}>{children}</CheckboxContext.Provider>;
};
