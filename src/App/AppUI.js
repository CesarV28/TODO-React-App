import React from 'react';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

import './App.css';


function AppUI() {
    
    const { 
        loadError, 
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodo 
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loadError && <p>¡Ups!, parece que hubo un error al cargar.</p>}
            {loading && <p>Cargando lista...</p>}
            {(!loading && !searchedTodos.length) && <p>¡Crea un TODO!</p>}
            {searchedTodos.map((todo, index) => (
            <TodoItem
                key={index}
                itemId={index}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodos(index)}
                onDelete={() => deleteTodo(index)}
            />
            ))}
        </TodoList>

        <CreateTodoButton />
        </React.Fragment>
    )
}

export { AppUI };