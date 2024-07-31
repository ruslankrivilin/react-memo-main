import { createContext, useContext, useState } from "react";

const CheckboxContext = createContext(null);

export const useCheckbox = () => {
  return useContext(CheckboxContext);
};

export const CheckboxProvider = ({ children }) => {
  const [isEasyMode, setIsEasyMode] = useState(false);

  return <CheckboxContext.Provider value={{ isEasyMode, setIsEasyMode }}>{children}</CheckboxContext.Provider>;
};
