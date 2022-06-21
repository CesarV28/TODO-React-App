import React from "react";

import './EmptyTodo.css'
import imgEmptyTodo from '../img/emptyTodo.png'

function EmptyTodo() {

    return (
        <div className="EmptyTodo-container">  
            <h3>Sin tareas por hacer, ¡crea una!</h3>
            <img src={imgEmptyTodo} alt='Load-error'/>
        </div>
    );
}

export { EmptyTodo };