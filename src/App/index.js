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

    <TodoHeader loading = {loading}>
        <TodoCounter 
            totalTodos = {totalTodos} 
            completedTodos = {completedTodos}
        />
        
        <TodoSearch 
            searchValue = {searchValue}
            setSearchValue = {setSearchValue}
        />
    </TodoHeader>

    {/* ==== Render prop ==== */}
    <TodoList
      loadError = {loadError}
      loading = {loading}
      searchedTodos = {searchedTodos}
      totalTodos = {totalTodos}
      searchText = {searchValue}
      onError={() => <TodoError/>}
      onLoading={() => <TodoLoading/>}
      onEmptyTodos={() => <EmptyTodo/>}
      onEmptySearchedTodos={(searchText) => <p>Sin resultados para: {searchText}</p>}
      render={ todo => (
        <TodoItem
            key={todo.text}
            itemId={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
        />
      )}
    />

    {/* ==== Render function ==== */}
    {/* <TodoList>
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
    </TodoList> */}

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
