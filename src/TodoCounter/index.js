import React from 'react'; 
import './TodoCounter.css';

function TodoCounter({totalTodos, completedTodos}) {

  return (
    <>
      <h1 className='TodoCounter-h1'>TODO APP</h1>
      {
        (totalTodos && (totalTodos - completedTodos)) 
        ? <h3 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h3>
        : <p className="TodoCounter">¡Felicidades, no tienes tareas por completar!</p>
      }
    </>
  );
}

export { TodoCounter };
