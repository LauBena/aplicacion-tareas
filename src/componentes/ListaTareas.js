import React, { useState } from 'react'
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../estilos/ListaTareas.css';


function ListaTareas() {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //esa constante va a ser el arreglo filtrado
        setTareas(tareasActualizadas); //actualiza el estado de la tarea
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => { //tomamos una tarea
        if (tarea.id === id) { //verificamos si fue completada o no
            tarea.completada = !tarea.completada; //actualizamos su estado
        }
        return tarea; //retornamos la tarea, esto genera un nuevo arreglo de tareas que asignamos a tareasActualizadas
        });
        setTareas(tareasActualizadas); //actualizamos la lista de tareas
    };

    return(
        <>
            <TareaFormulario onSubmit={agregarTarea} />
            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) => //si agregamos una tarea, al usar el mal se genera un componente por cada elemento en en arreglo tarea
                    <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}/>
                    )
                }
            </div>
        </>
    );
}

export default ListaTareas;