import { useContext } from 'react';
import superagent from 'superagent';
import {LogInContext} from '../context/acl';

function useSignUp( name , type , placeholder ){
    const API = "https://api-js401.herokuapp.com/"
    const logging = useContext(LogInContext)
    
    // const [control , setControl] = useState();
    
    
    const changeHandler = (e) =>{
        // console.log(e.target.value);
        // setControl({...control,[e.target.name]:e.target.value})
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        let username = e.target.username.value;
        let password = e.target.password.value;
        let email = e.target.email.value;
        let role = e.target.role.value;
        signUp(username,password,email,role)
    }

    const signUp = async (username ,password , email , role) =>{
       try {
            await superagent.post(`${API}signup`).send({
               username,
               password,
               email,
               role
            })
            logging.login(username,password)
       } catch (error) {
           alert('Duplicated username',error.message)
       }
    }

    if(!name){
        return {onSubmit}
    }else{
        return {name , type , placeholder, onChange : changeHandler}
    }
}
export default useSignUp;