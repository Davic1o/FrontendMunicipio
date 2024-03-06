import logo from './logo.svg';
import './App.css';
import BotonAcceso from './components/botones/BotonAcceso';
import { MdDone } from "react-icons/md";

function App() {
  return (
    <div className="App">
      <BotonAcceso Icono={<MdDone />} NombreBoton="Bienvenido"/>
    </div>
  );
}

export default App;
