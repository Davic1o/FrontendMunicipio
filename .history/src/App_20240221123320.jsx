import './App.css';
import { MdDone } from "react-icons/md";
import InputTexto from './components/inputs/InputTexto';

function App() {
  return (
    <div className="App">
      <InputPass Icono={<MdDone />} Placeholder="Bienvenido"/> 
      
    </div>
  );
}

export default App;
