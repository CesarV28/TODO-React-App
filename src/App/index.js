import React from 'react';

import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: 'Tomar la clase de Inglés', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Instalar linux', completed: false },
//   { text: 'Configurar VS Code', completed: true },
// ];

function App() {

    const DB = 'TODOS_RV01'

    const localStorageTodos = localStorage.getItem( DB );

    let parsedTodos;

    if(!localStorageTodos){
      localStorage.setItem( DB, JSON.stringify([]));
      parsedTodos = [];
    } else {
      parsedTodos = JSON.parse(localStorageTodos);
    }

    const [ todos, setTodos ] = React.useState(parsedTodos);
    const [ searchValue, setSearchValue ] = React.useState('');

    const completedTodos = todos.filter( todo => todo.completed ).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    
    if( !searchValue.length > 0){
        searchedTodos = todos
    } else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
    }

    // Funcion que guarda un nuevo array de todos
    const saveTodos = (newTodo) => {
      const stringifiedTodos = JSON.stringify(newTodo);
      localStorage.setItem( DB, stringifiedTodos );
      setTodos(newTodo);
    }

    // Funcion que marca como completado o no un TODO y
    // cambia el esatdo de la aplicación
    const completeTodos = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos)
    }

    // Funcion que elimina un TODO 
    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        saveTodos(newTodos)
    }
  return (
    <AppUI 
    totalTodos = {totalTodos}
    completedTodos = {completedTodos}
    searchValue = {searchValue}
    setSearchValue = {setSearchValue}
    searchedTodos = {searchedTodos}
    completeTodos = {completeTodos}
    deleteTodo = {deleteTodo}
    />
  );
}

export default App;
