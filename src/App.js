import React, {useState,useEffect} from 'react';
import './App.css';
import Formulario from './Components/Formulario';
import Lista from './Components/Lista';

function App() {

  const [tareas,setTareas] = useState(()=>{
    const saved = localStorage.getItem("tareas");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify([...tareas]));
  }, [tareas]);

  const agregarTarea = (nuevaTarea) => {
    setTareas([nuevaTarea,...tareas]);
  }

  const quitarTarea = (indice) => {
    let aux = tareas.filter((element,index) => index !== indice);
    setTareas([...aux]);
  }

  const tareaCompleta = (indice) => {
    tareas[indice].completa = !tareas[indice].completa;
    setTareas([...tareas]);
  }

  return (
    <div className="App">
      <Formulario agregarTarea={agregarTarea}/>
      <h2>Lista de tareas</h2>
      <Lista tareas={tareas} quitarTarea={quitarTarea} tareaCompleta={tareaCompleta}/>
    </div>
  );
}

export default App;
