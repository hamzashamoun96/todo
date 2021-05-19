import React from "react";
import TodoForm from "../form";
import TodoList from "../list";
import { useState, useEffect } from "react";

function ToDo(props) {

  const [list,setList] = useState([]);

  const addItem = (item) => {
    item._id = Math.random();
    item.complete = false;
    let date = new Date(Date.now());
    item.date = date.toUTCString();
    setList([...list,item])
  };

  const toggleComplete = (id)=>{
    let item = list.filter(i => i._id === id)[0] || {};    
    if (item._id) {
          item.complete = !item.complete;
          let list1 = list.map(listItem => listItem._id === item._id ? item : listItem);
          setList(list1);
        }
  };

const afterEdit = (editedList)=>{
  setList([...editedList])
}
const afterDelete = (deletedList)=>{
  setList([...deletedList])
}
  useEffect(()=>{
    let date = new Date(Date.now())

    setList([
      { _id: 1, complete: false, text: 'Clean the Kitchen', difficulty: 3, assignee: 'Person A',date:date.toUTCString()},
      { _id: 2, complete: false, text: 'Do the Laundry', difficulty: 2, assignee: 'Person A',date:date.toUTCString()},
      { _id: 3, complete: false, text: 'Walk the Dog', difficulty: 4, assignee: 'Person B',date:date.toUTCString()},
      { _id: 4, complete: false, text: 'Do Homework', difficulty: 3, assignee: 'Person C',date:date.toUTCString()},
      { _id: 5, complete: false, text: 'Take a Nap', difficulty: 1, assignee: 'Person B',date:date.toUTCString()},
    ])

  },[])
  useEffect(() => {
    console.log('list change')
    document.title = `To Do List ${list.filter((item) => !item.complete).length}`
  },[list])

  return (
    <>
      <header>
        <h2>
          There are {list.filter((item) => !item.complete).length}{" "}
          Items To Complete
        </h2>
      </header>

      <section className="todo">
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList
            list={list}
            handleComplete={toggleComplete}
            afterEdit = {afterEdit}
          />
        </div>
      </section>
    </>
  );
}

export default ToDo;