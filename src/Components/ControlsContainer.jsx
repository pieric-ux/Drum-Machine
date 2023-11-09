import SwitchPower from "./SwitchPower";
import Display from "./Display";
import SwitchBank from "./SwitchBank";
import ControlVolume from "./ControlVolume";

export default function ControlsContainer() {
  
  return (
    <div className="controls-container">
      <SwitchPower />
      <Display />
      <ControlVolume />
      <SwitchBank />
    </div>
  );
}