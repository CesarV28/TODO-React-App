import React from "react";

import './TodoError.css'
import imgLoadError from '../img/loadError.png'

function TodoError() {

    return (
        <div className="TodoError-container">  
            <h3>¡Ups!, parece que hubo un error al cargar</h3>
            <img src={imgLoadError} alt='Load-error'/>
        </div>
    );
}

export { TodoError };