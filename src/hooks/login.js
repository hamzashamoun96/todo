// import { useState } from 'react';

function useLogIn( name , type , placeholder ){
    // const [control , setControl] = useState();
    
    const changeHandler = (e) =>{
        // console.log(e.target.value);
        // setControl({...control,[e.target.name]:e.target.value})
    }

    return {name , type , placeholder, onChange : changeHandler}
}
export default useLogIn;