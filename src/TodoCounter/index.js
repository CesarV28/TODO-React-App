import React from 'react';
import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <>
      <h1 className='TodoCounter-h1'>TODO APP</h1>
      <h3 className="TodoCounter">Has completado {completed} de {total} TODOs</h3>
    </>
  );
}

export { TodoCounter };
