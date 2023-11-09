import { useEffect, useRef } from "react";
import { useDrumContext } from "../DrumContextProvider";

export default function DrumPad({ id, letter, file, name }) {
  const { power, setDisplay, volume } = useDrumContext();
  const audioRef = useRef(null);
  
  const handleClick = () => {
    if(power) {
      audioRef.current.volume = volume;
      audioRef.current.play();
      setDisplay(name);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toUpperCase() === letter) {
        handleClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    audioRef.current.volume = volume;
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [letter, volume]);
  
  return (
    <div className="drum-pad" id={id} onClick={handleClick}>
      <audio ref={audioRef} className="clip" id={letter} src={file}></audio>
      {letter}
    </div>
  );
}