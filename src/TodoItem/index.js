import React from 'react';
import './TodoItem.css';

function TodoItem({ completed, text, onComplete, itemId, onDelete}) {

  return (
    <li className="TodoItem" id={itemId}>
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
            onClick={onComplete}
      >
        √
      </span>
      <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
        {text}
      </p>
      <span className="Icon Icon-delete"
            onClick={onDelete}
      >
        <i className="fa-solid fa-trash-can"></i>
      </span>
    </li>
  );
}

export { TodoItem };
