import { useDrumContext } from "../DrumContextProvider";

export default function SwitchPower() {
  const { power, setPower } = useDrumContext();
  
  const handlePower = () => {
    setPower(!power);
  }

  return (
    <div className="control">
      <p>Power</p>
      <div className="select" onClick={handlePower}>
        <div className={`inner ${power ? 'right':'left'}`}></div>
      </div>
    </div>
  );
}