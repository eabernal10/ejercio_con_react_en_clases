//import logo from './logo.svg';
import './App.css';
import Ejercicio from './components/Ejercicio';
import Saludos from './components/Saludos';
import Tareas from './components/Tareas';
import {datos} from './components/datos';
import {useState} from 'react';
import TareaAdd from './components/TareaAdd';

function App() {
  const [data, setData] = useState(datos);

  const eliminarClick = (item) =>{
    console.log("eliminado tarea", item.titulo);
    if(window.confirm("Confirme que desee eliminar esta tarea? "))
    {
      const NuevaLista = data.filter( tarea => {
        return tarea.titulo!==item.titulo;
      });
      //console.log("Nueva lista", NuevaListaTareas);
      setData(NuevaLista);
    }
 
  }
  const guardarTarea = (tarea) =>{
    console.log("Esta es la nueva tarea", tarea);
    setData([...data,tarea]);
  }



  return (
    <div className="App">
      <h1>Primeros pasos con REACT</h1>
      <h2>Bienvenidos</h2>
      <Saludos nombre="Ethan" apellido="Bernal"/>
      <Ejercicio nombre="Daniel" edad="25" pasatiempo="Practicar BJJ" />

      <div className='row'>
        <div className='col-2'>
           <TareaAdd guardarTarea= {guardarTarea}/>
        </div>
        <div className='col-10'>
          <Tareas datos={data} eliminarClick= {eliminarClick} />
        </div>
    </div>
  </div>
  );
}

export default App;