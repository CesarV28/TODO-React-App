import React from 'react';

import { AppUI } from './AppUI';


const defaultTodos = [
  { text: 'Tomar la clase de Inglés', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Instalar linux', completed: false },
  { text: 'Configurar VS Code', completed: true },
];

function App() {

    const [ todos, setTodos ] = React.useState(defaultTodos);
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

    const completeTodos = (index) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos)
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
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
