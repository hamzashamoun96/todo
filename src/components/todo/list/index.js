import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

function TodoList (props){
  const edit = (e)=>{
    e.preventDefault();
    let id = e.target.id.value;
    let list = props.list;
    let item = list.find(e=>e._id.toString() === id);
    let index = list.indexOf(item);

    list[index].text = e.target.text.value;
    list[index].date = new Date(Date.now()).toUTCString();
    list[index].assignee = e.target.assignee.value;
    list[index].difficulty = e.target.difficulty.value;

    props.afterEdit(list)
  }
  const deleteItem = (e)=>{
    let id = e.target.id;
    let list = props.list;
    let item = list.find(e=>e._id.toString() === id);
    let index = list.indexOf(item);

    list.splice(index,1)
    props.afterDelete(list)
  }
  const showHide = (e)=>{
    (e.target.nextSibling.style.display === 'none')?e.target.nextSibling.style.display = 'flex':e.target.nextSibling.style.display = 'none'
  }
  return(
          <ul>
        {props.list.map(item => (
          <li
            className={`complete-${item.complete.toString()}`}
            key={item._id}
          >
            <span onClick={() => props.handleComplete(item._id)}>
              {item.text}<br/>
              {item.date}<br/>
              {item.assignee}<br/>
              {item.difficulty}<br/>
            </span>
              <Button variant="danger" id={item._id} onClick={deleteItem}>Delete</Button>
              <Button onClick={showHide}>Edit</Button>
              <Form style={{ display: "none" }} onSubmit={edit}>
                <fieldset>
                <FormControl type="hidden" name="id" defaultValue={item._id}/>
                <FormControl type="text" name="text" defaultValue={item.text}/>
                <FormControl type="text" name="assignee" placeholder="Assigned To"/>
                <FormControl defaultValue="1" type="range" min="1" max="5" name="difficulty"/>
                <Button type="submit">Edit</Button>
                </fieldset>
              </Form>
          </li>
        ))}
      </ul>
  );
}

export default TodoList;