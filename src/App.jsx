import './App.css';
import { DrumContextProvider } from './DrumContextProvider';
import DrumMachine from './DrumMachine';

export default function App() {
  return (
    <div id="root">
      <DrumContextProvider>
        <DrumMachine />
      </DrumContextProvider>
    </div>
  )
}