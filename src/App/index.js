import React from 'react';

import { AppUI } from './AppUI';


// const defaultTodos = [
//   { text: 'Tomar la clase de Inglés', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Instalar linux', completed: false },
//   { text: 'Configurar VS Code', completed: true },
// ];

function useLocalStorage (itemName, initialValue) {

  const [ loading, setLoading ] = React.useState(true);
  const [ loadError, setloadError ] = React.useState(false);
  const [ item, setItem ] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {

      try {
        const localStorageItem = localStorage.getItem( itemName );

        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem( itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setloadError(error);
      }

    }, 1000);
  })

    // Funcion que guarda un nuevo array de todos
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem( itemName, stringifiedItem );
        setItem(newItem);
      } catch (error) {
        setloadError(error);
      }
    }

    return {
      item, 
      saveItem,
      loading,
      loadError, 
  };
}

function App() {

    const DB = 'TODOS_RV01';

    const {
      item: todos, 
      saveItem: saveTodos, 
      loading,
      loadError,
    } = useLocalStorage(DB, []);  

    const [ searchValue, setSearchValue ] = React.useState('');

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
  return (
    <AppUI 
    loading = {loading}
    loadError = {loadError}
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
