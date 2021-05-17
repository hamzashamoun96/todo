import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';

function TodoList (props){
  const edit = (e)=>{
    e.preventDefault()
    let id = e.target.id.value;
    let updatedItem = {
      assignee:e.target.assignee.value,
      text:e.target.text.value,
      difficulty:e.target.difficulty.value
    }
    let list = props.list;
    let item = list.find(e=>e._id.toString() === id);
    let index = list.indexOf(item);
    
    props.afterEdit(id ,index, updatedItem);
  }
  const deleteItem = (e)=>{
    props.afterDelete(e.target.id)
  }
  const showHide = (e)=>{
    (e.target.nextSibling.style.display === 'none')?e.target.nextSibling.style.display = 'flex':e.target.nextSibling.style.display = 'none'
  }
  return(
          <ul>
        {props.list.map((item,idx) => (
          <li
            className={`complete-${item?.complete.toString()}`}
            key={item?._id || idx}
          >

            <Card border="primary" style={{ width: '25rem' }} onClick={() => props.handleComplete(item?._id)}>
            <Card.Header as="h5" style={{display:"flex",justifyContent:"space-between"}} >
              {item?.assignee}
              <Button variant="secondary" id={item?._id} onClick={deleteItem}>x</Button>
            </Card.Header>
            <Card.Text as="h6">{item?.text}</Card.Text>
              {item?.date}<br/>
              {item?.difficulty}<br/>
            </Card>
              <Button onClick={showHide}>Edit</Button>
              <Form style={{ display: "none" }} onSubmit={edit}>
                <fieldset>
                <FormControl type="hidden" name="id" defaultValue={item?._id}/>
                <FormControl type="text" name="text" defaultValue={item?.text}/>
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