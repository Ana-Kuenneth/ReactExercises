
import { useState } from 'react'
import './App.css'

function App() {
  // Contador de tareas
  const [contTareas, setContTareas] = useState(0);


  // Lista de tareas
  const [tareas, setTareas] = useState([]);

    //Eliminar tareas guardadas
    const eliminarTarea = (index) => {
      const nuevasTareas = [...tareas];
      nuevasTareas.splice(index, 1);
      setTareas(nuevasTareas);
      setContTareas(contTareas - 1); // Reduce el contador de tareas
    };


  //Almacenar valor ingresado en el input
  const [inputValue, setInputValue] = useState(''); //valor inicial en el input es null

    // Función para manejar el cambio en el input
    const obtenerValorInput = (event) => {
      setInputValue(event.target.value); //Agrega valores al input
    };

    // Función para guardar el cambio en el input
    const manejarEnter = (event) => {
      if (event.key === 'Enter') {
        // event.preventDefault();
        guardarValorInput(event);
      }
    };

    const guardarValorInput = (event) => {
      event.preventDefault();

      // Agrega la nueva tarea al estado de tareas
      if (inputValue.trim() !== '') {
        setTareas([...tareas, inputValue]);
        setContTareas(contTareas + 1); // Incrementa el contador de tareas
        setInputValue(''); // Limpia el input después de agregar la tarea
      }
    };

  

  return (
    <>
      <div className="hoja">
        <h1>Bienvenido</h1>
        <p>Ingresa tus tareas</p>
        <form onSubmit={guardarValorInput} name='tarea'>
          <label id='input'>
            <input type="text"
              placeholder={`Tarea ${contTareas+1}...`}
              value={inputValue}
              onChange={obtenerValorInput}
              onKeyDown={manejarEnter}
            />
          </label>
        </form>


        <div>
          {tareas.map((tarea, index) => (
            <div key={index} id='tarea'>
              <span>{tarea}</span>
              <button onClick={() => eliminarTarea(index)}>X</button>
            </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default App
