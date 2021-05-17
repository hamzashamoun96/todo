import { useState } from 'react';
function useForm(name ,type , placeholder , min , max , defaultValue){
    const [control , setControl] = useState(defaultValue);
    const changeHandler = (e) =>{
        setControl({...control,[e.target.name]:e.target.value})
    }
    if(type === "range"){
        return {name ,defaultValue:control.difficulty||1, type , placeholder,min,max, onChange : changeHandler}
    }else{
       return {name , control,type , placeholder, onChange : changeHandler}
    }
}
export default useForm;