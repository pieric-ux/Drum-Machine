import { useDrumContext } from "../DrumContextProvider";
import DrumPad from "./DrumPad";

export default function PadBank() {
  const { data, selectedBank } = useDrumContext();
  const commonAudioPath = data.commonAudioPath;

  const drumPads = data.banks[selectedBank].sounds.map((sound) => {
    const id = sound.name.replace(' ','-');
    return (
      <DrumPad
        key={id}
        id={id}
        letter={sound.letter}
        file={commonAudioPath + sound.file}
        name={sound.name}
      />
    );
  });
  
  return (
    <div className="pad-bank">
      {drumPads}
    </div>
  );
}