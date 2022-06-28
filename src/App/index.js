import React from 'react';

import { useTodos } from './useTodos';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';

import { TodoForm } from '../TodoForm';
import { TodoLoading } from '../TodoLoading';
import { TodoError } from '../TodoError';
import { EmptyTodo } from '../EmptyTodo';
import { TodoHeader } from '../TodoHeader';

function App() {

  const { 
    loadError, 
    loading, 
    searchedTodos, 
    completeTodos, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue,
    addTodo, 
  } = useTodos();

  // =========== return =========== //
  return (
    <React.Fragment>

    <TodoHeader>
        <TodoCounter 
            totalTodos = {totalTodos} 
            completedTodos = {completedTodos}
        />
        
        <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
        />
    </TodoHeader>

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
            <TodoForm 
              addTodo= { addTodo }
              setOpenModal= {setOpenModal}
            />
        </Modal>
    )}

    <CreateTodoButton 
        openModal = {openModal}
        setOpenModal = {setOpenModal}
    />
    </React.Fragment>
  )
}


export default App;
