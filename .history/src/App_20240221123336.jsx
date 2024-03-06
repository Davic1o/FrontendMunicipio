import './App.css';
import { MdDone } from "react-icons/md";
import InputPass from './components/inputs/InputPass';

function App() {
  return (
    <div className="App">
      <InputPass Icono={<MdDone />} Placeholder="Bienvenido"/> 
      
    </div>
  );
}

export default App;
