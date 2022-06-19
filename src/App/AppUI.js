import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

import './App.css';


function AppUI({
    totalTodos, 
    completedTodos, 
    searchValue, 
    setSearchValue, 
    searchedTodos, 
    completeTodos, 
    deleteTodo
}) {

    return (
        <React.Fragment>
        <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
        />
        <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
        />

        <TodoList>
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