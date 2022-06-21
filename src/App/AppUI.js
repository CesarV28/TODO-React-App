import React from 'react';

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import './App.css';
import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';


function AppUI() {
    
    const { 
        loadError, 
        loading, 
        searchedTodos, 
        completeTodos, 
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
        <TodoCounter />
        <TodoSearch />

        <TodoList>
            {loadError && <TodoError/>}
            {loading && <TodoLoading/>}
            {(!loading && !searchedTodos.length) && <EmptyTodo/>}
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

        {openModal && (
            <Modal>
                <TodoForm/>
            </Modal>
        )}

        <CreateTodoButton 
            openModal = {openModal}
            setOpenModal = {setOpenModal}
        />
        </React.Fragment>
    )
}

export { AppUI };