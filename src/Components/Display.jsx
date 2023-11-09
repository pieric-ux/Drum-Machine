import { useDrumContext } from "../DrumContextProvider";
import { useEffect } from "react";

export default function Display() {
  const { data, display, setDisplay, power, selectedBank, volume } = useDrumContext();

  useEffect(() => {
    power ? setDisplay("ON") : setDisplay("OFF");
  },[power]);
  
  useEffect(() => {
    power ? setDisplay(data.banks[selectedBank].name) : setDisplay("OFF");
  },[selectedBank]);

  useEffect(() => {
    power ? setDisplay(`Volume ${parseInt(volume.toFixed(2)*100)}`) : setDisplay("OFF");
  },[volume])

  return (
    <p id="display">{display}</p>
  );
}