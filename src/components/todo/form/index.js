import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function TodoForm(props) {
  const [item,setItem] = useState({});

  const handleInputChange = (e) => {
    setItem({...item,[e.target.name]:e.target.value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    props.handleSubmit(item);
    const item1 = {};
    setItem(item1)
  };

  return (
    <>
      {/* <h3>Add Item</h3> */}
      <Form onSubmit={handleSubmit}>
        <fieldset>
      <legend>Add Item</legend>
        <Form.Label>
          <span>To Do Item</span>
          <FormControl
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Difficulty Rating</span>
          <FormControl
            defaultValue="1"
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Form.Label>
          <span>Assigned To</span>
          <FormControl
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleInputChange}
          />
        </Form.Label>
        <Button type="submit">Add Item</Button>
        </fieldset>
      </Form>
    </>
  );
}

export default TodoForm;
