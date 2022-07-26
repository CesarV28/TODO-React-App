import React from 'react';
import './TodoList.css'

function TodoList(props) {

  const renderFunc = props.children || props.render;

  return (
    <section className='TodoList-container'>

      {props.loadError && props.onError()}
      {props.loading && props.onLoading()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

      {(!!props.totalTodos && !props.searchedTodos?.length) && props.onEmptySearchedTodos(props.searchText)}

      {( !props.loading && !props.loadError ) && props.searchedTodos.map(renderFunc)}

    </section>
  );
}

export { TodoList };
