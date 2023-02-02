//Componente que muestra las actividades (tareas) diarias de una persona
import React  from "react";
//import { datos } from "./datos";

function Tareas(props) {
  //const listadoTareas = datos;
  //const [listadoTareas, setListadoTareas] = useState(datos);

  console.log("Lista de tareas");

  //console.log(listadoTareas);


  const eliminarHandler = (item) =>{
    //console.log("eliminando tarea", item);
    props.eliminarClick(item);
    
  }

  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          {props.datos.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card mt-4">
                  <div className="card-header">
                    <h3>{item.titulo}</h3>
                  </div>
                  
                  <div className="card-body">
                    <p><strong>{item.responsable}</strong></p>
                    <p>{item.descripcion}</p>
                  </div>

                  <div className="card-footer">
                    <mark>{item.prioridad}</mark>
                    <p><button className= "btn btn-primary" onClick={()=> eliminarHandler(item)} >Eliminar</button></p>
                    
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tareas;