import React, { useEffect } from 'react';
import TodoForm from '../form';
import TodoList from '../list';
import '../todo/todo.scss';
import useAjax from '../../../hooks/ajax';


const ToDo = () => {
  const [list , _getTodoItems,_addItem , _toggleComplete , _delete , _edit] = useAjax()

useEffect(()=>{
  _getTodoItems()
},[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <header>
        <h2>
          There are {list.filter(item => !item?.complete).length} Items To Complete
        </h2>
      </header>

      <section className="todo">

        <div>
          <TodoForm handleSubmit={_addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={_toggleComplete}
            afterDelete = {_delete}
            afterEdit = {_edit}
          />
        </div>
      </section>
    </>
  );
};

export default ToDo;