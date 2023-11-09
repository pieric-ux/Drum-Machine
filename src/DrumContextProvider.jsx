import { createContext, useContext, useState } from "react";
import data from "./data.json";

const DrumContext = createContext();

export function DrumContextProvider({ children }) {
  const [power, setPower] = useState(true);
  const [selectedBank, setSelectedBank] = useState("bank1");
  const [display, setDisplay] = useState('');
  const [volume, setVolume] = useState(0.3);

  return (
    <DrumContext.Provider 
      value={{ 
        selectedBank, 
        setSelectedBank, 
        power, 
        setPower,
        display,
        setDisplay,
        data,
        volume,
        setVolume
      }}
    >
      {children}
    </DrumContext.Provider>
  );
}

export function useDrumContext() {
  return useContext(DrumContext);
}