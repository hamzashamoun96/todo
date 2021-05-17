import { useState } from "react";
import axios from "axios";

const useAjax = (cb) => {
  const todoAPI = "https://api-js401.herokuapp.com/api/v1/todo";
  const [list, setList] = useState([]);
  const getMethod = () => {
    axios.get(todoAPI).then((data) => {
        setList(data.data.results);
    });
  };
 const postMethod = (item) => {
    item.due = new Date();
    axios.post(todoAPI,item).then((savedItem)=>{
      setList([...list,savedItem.data])
    })
  };
  const putMethod = id => {
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {
      item.complete = !item.complete;
      let url = `${todoAPI}/${id}`;
      axios.put(url,item).then((savedItem)=>{
        setList(list.map(listItem => listItem._id === item._id ? savedItem.data : listItem));
      })
}
  };
  const deleteMethod = id =>{
    let item = list.filter(i => i._id === id)[0] || {};
    if (item._id) {

        item.complete = !item.complete;
  
        let url = `${todoAPI}/${id}`;
  
        axios.delete(url).then(()=>{
            axios.get(todoAPI).then((data) => {
                return setList(data.data.results);
              });
        })
      }
  }
  const editMethod = (id,idx,item) => {
      let url = `${todoAPI}/${id}`;
      axios.put(url,item).then((updatedItem)=>{
          list.splice(idx,1,updatedItem.data)
          setList([...list]);
      })
  };
return [list , getMethod , postMethod , putMethod , deleteMethod , editMethod]
};
export default useAjax;