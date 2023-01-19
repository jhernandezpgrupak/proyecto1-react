import './App.css';
import Testimonio from './components/Testimonio';
import TestimonioInformacion  from './components/TestimonioInformacion';

function App() {
  const info = new TestimonioInformacion();
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>        
        <Testimonio
          nombre = {info.nombre}
          cargo = {info.cargo}
          empresa = {info.empresa}
          imagen = {info.imagen}
          testimonio = {info.testimonio}
        />
     
      </div>
    </div>    
  );
}
export default App;
