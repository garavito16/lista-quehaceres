import React, {useState} from "react";
import './Formulario.css';

const Formulario = (props) => {

    const [item,setItem] = useState('');
    const [errorItem,setErrorItem] = useState('');

    const addTarea = (e) => {
        e.preventDefault();
        if(item.length < 3) {
            setErrorItem("La tarea debe tener como minimo 3 caracteres");
        } 
        else {
            props.agregarTarea({nombre:item,completa:false});
            setErrorItem("");
            setItem("");
        }
    }

    return (
        <div>
            <form className="formulario" onSubmit={(e)=>addTarea(e)}>
                <div className="divInputTarea">
                    <input className="inputTarea" placeholder="ingrese tarea" onChange={(e)=> setItem(e.target.value)} value={item}/>
                </div>
                <div>
                    <button className="botoncito" type="submit">Add</button>
                </div>
            </form>
            <div>
                <p className="error">{errorItem}</p>
            </div>
        </div>
    )
}

export default Formulario; 