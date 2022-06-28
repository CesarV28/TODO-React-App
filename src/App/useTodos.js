import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(){

    const DB = 'TODOS_RV01';

    const {
      item: todos, 
      saveItem: saveTodos, 
      loading,
      loadError,
    } = useLocalStorage(DB, []);  

    const [ searchValue, setSearchValue ] = React.useState('');
    const [ openModal, setOpenModal ] = React.useState(false);

    const completedTodos = todos.filter( todo => todo.completed ).length;
    const totalTodos = todos.length;

    let searchedTodos = [];
    
    if( !searchValue.length > 0){
        searchedTodos = todos;
    } else{
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        });
    }

    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
            text,
            completed: false,
        })
        saveTodos(newTodos);
    }

    // Funcion que marca como completado o no un TODO y
    // cambia el esatdo de la aplicación
    const completeTodos = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
    }

    // Funcion que elimina un TODO 
    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
    }
// =========== return =========== //
    return {
            loading,
            loadError,
            totalTodos, 
            addTodo,
            completedTodos, 
            searchValue, 
            setSearchValue, 
            searchedTodos, 
            completeTodos, 
            deleteTodo,
            openModal,
            setOpenModal,
        };
}

export {
    useTodos,
};