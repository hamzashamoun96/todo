import {useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Card from 'react-bootstrap/Card';
import {SettingsCon} from '../../../context/settings';


function TodoList (props){

const pagesSetting = useContext(SettingsCon)


const screenDispaly = (e) =>{
  pagesSetting.setSnum(parseInt(e.target.value));
  pagesSetting.setPage(parseInt(e.target.value));
}



const pagnation = (e) =>{
  let number = parseInt(e.target.innerHTML) * pagesSetting.sNum;
  for(let i = 1; i < pagesSetting.num.length+1; i++){
    document.getElementById(`${i}BTN`).style.backgroundColor = 'transparent'
  }
  document.getElementById(`${number/pagesSetting.sNum}BTN`).style.backgroundColor = 'blue'
  pagesSetting.setPage(number)
}
const prevNext = (e) =>{
  
  if(e.target.id === 'prev'){
    let number = ((pagesSetting.page/pagesSetting.sNum)-1)*pagesSetting.sNum;
    if(number >= pagesSetting.sNum){
      for(let i = 1; i < pagesSetting.num.length+1; i++){
        document.getElementById(`${i}BTN`).style.backgroundColor = 'transparent'
      }
      document.getElementById(`${number/pagesSetting.sNum}BTN`).style.backgroundColor = 'blue'
      pagesSetting.setPage(number);
    } 
  }else{
    let number =((pagesSetting.page/pagesSetting.sNum)+1)*pagesSetting.sNum;
    let num2 = pagesSetting.page/pagesSetting.sNum
    if(num2 < pagesSetting.num.length){
      for(let i = 1; i < pagesSetting.num.length+1; i++){
        document.getElementById(`${i}BTN`).style.backgroundColor = 'transparent'
      }
      pagesSetting.setPage(number);
      document.getElementById(`${number/pagesSetting.sNum}BTN`).style.backgroundColor = 'blue'
    } 
  }
}

  const showTask = ()=>{
   let Arr = document.getElementsByClassName('complete-true')
   for(let i = 0; i < Arr.length; i++){
     if(Arr[i]) {
      (Arr[i].style.display === 'flex') ? Arr[i].style.display = 'none' : Arr[i].style.display = 'flex';
    }
  }
}
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
    <>
    <div style={{ display: 'flex' }}>
    <Form style={{ border: '2px solid black' }}>
    <Form.Label>
     <span> Screen Display</span>
      <FormControl onChange={screenDispaly} type="number" defaultValue="3"name="screenDis"/>
      </Form.Label>

    </Form>

    <button onClick={showTask}>Show Completed Tasks</button>

    </div>
    <ul>
    {pagesSetting.pages.map((item,idx) => (
      
      <li
        className={`complete-${item?.complete.toString()}`}
        key={item?._id || idx}
      >
    
        <Card border="primary" style={{ width: '32.5rem' }} onClick={() => props.handleComplete(item?._id)}>
        <Card.Header as="h5" style={{display:"flex",justifyContent:"space-between"}} >
          {item?.complete?<p className="comp">Completed</p>:<p className="pending">Pending</p>}
          {item?.assignee}
          <Button variant="secondary" id={item?._id} onClick={deleteItem}>x</Button>
        </Card.Header>
        <Card.Text as="h6">{item?.text}</Card.Text>
          <p>{item?.date}</p><br/>
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
    <button onClick={prevNext} id="prev">Prev</button>
    {pagesSetting.num.map((e,idx)=>{
      
      return(<button onClick={pagnation} key={idx} id={`${e}BTN`}> {e} </button>)
    })}
    <button onClick={prevNext} id="next">Next</button>

    </>
  );
}

export default TodoList;