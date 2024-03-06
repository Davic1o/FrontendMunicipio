import './App.css';
import { MdDone } from "react-icons/md";
import InputTexto from './components/inputs/InputTexto';

function App() {
  return (
    <div className="App">
      <InputTexto Icono={<MdDone />} Placeholder=""/> 
      
    </div>
  );
}

export default App;
