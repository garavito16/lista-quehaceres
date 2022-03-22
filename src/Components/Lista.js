import React,{useState} from 'react';
import './Lista.css';

const Lista = (props) => {

    const removeTarea = (e, value) => {
        e.preventDefault();
        props.quitarTarea(value);
    }

    const marcarTarea = (e,value) => {
        props.tareaCompleta(value);
    }

    return (
        <div>
            {
                props.tareas.map((tarea,indice)=>{
                    return (
                        <div className='divTarea' key={"tarea"+indice}>
                            {
                                (tarea.completa) ?
                                <span className="nombreTarea" style={{textDecoration:"line-through"}}>{tarea.nombre}</span> :
                                <span className="nombreTarea" style={{textDecoration:"none"}}>{tarea.nombre}</span>
                            }
                            {
                                <input type="checkbox" checked={tarea.completa} onChange={(e) => marcarTarea(e, indice)}/>
                            }
                            <button className="btnEliminar" onClick={(e) => removeTarea(e, indice)} type='submit'>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Lista;