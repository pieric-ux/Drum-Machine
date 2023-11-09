import PadBank from "./Components/PadBank";
import ControlsContainer from "./Components/ControlsContainer";

export default function DrumMachine() {
  return (
    <div className="inner-container" id="drum-machine">
      <PadBank />
      <ControlsContainer />
    </div>
  );
}