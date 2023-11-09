import { useDrumContext } from "../DrumContextProvider";

export default function SwitchBank() {
  const { selectedBank, setSelectedBank } = useDrumContext();
  
  const handleBank = () => {
    setSelectedBank(selectedBank === "bank1" ? "bank2" : "bank1");
  }
  
  return (
    <div className="control">
      <p>Bank</p>
      <div className="select" onClick={handleBank}>
        <div className={`inner ${selectedBank === 'bank1' ? 'left':'right'}`}></div>
      </div>
    </div>
  );
}