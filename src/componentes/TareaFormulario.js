import React, { useState } from 'react'
import '../estilos/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value); //extraemos el valos del campo de texto
    };

    const manejarEnvio = e => {
        e.preventDefault(); //evita que se recarge la aplicacion cuando se envia el TareaFormulario

        const tareaNueva = {
            id: uuidv4(), //usamos uuid para tener un id unico para cada tarea
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva);
    };

    return(
        <form
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
            className='tarea-input'
            type='text'
            placeholder='Escribe una Tarea'
            name='texto'
            onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TareaFormulario;