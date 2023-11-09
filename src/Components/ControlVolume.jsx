import { useDrumContext } from "../DrumContextProvider";

export default function ControlVolume() {
  const { volume, setVolume } = useDrumContext();

  const handleVolume = (event) => {
    setVolume(parseFloat(event.target.value));
  }

  return (
    <div className="volume-slider">
      <input max="1" min="0" step="0.01" type="range" value={volume} onChange={handleVolume}/>
    </div>
  );
}