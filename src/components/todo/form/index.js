import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import useForm from '../../../hooks/form';

function TodoForm(props) {
  const [item,setItem] = useState({});
  console.log(item)
  const textControl = useForm('text','text','Add To Do List Item');
  const difficultyControl = useForm('difficulty','range','' , 1 , 5 ,1);
  const assigneeControl = useForm('assignee','text','Assigned To');

  function submitHandler(e){
    e.preventDefault();
    e.target.reset();
    let item = {
      text :textControl.control.text,
      difficulty:difficultyControl.defaultValue,
      assignee:assigneeControl.control.assignee
    }
    props.handleSubmit(item)
    const item1 = {};
    setItem(item1)
  }

  return (
    <>
      {/* <h3>Add Item</h3> */}
      <Form onSubmit={submitHandler}>
        <fieldset>
      <legend>Add Item</legend>
        <Form.Label>
          <span>To Do Item</span>
          <FormControl {...textControl}/>
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <FormControl {...difficultyControl}/>
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <FormControl {...assigneeControl}/>
        </Form.Label>
        <Button type="submit">Add Item</Button>
        </fieldset>
      </Form>
    </>
  );
}

export default TodoForm;