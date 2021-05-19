import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import useLogIn from '../../hooks/login';
import {useContext} from 'react';
import {LogInContext} from '../../context/acl';


function LogIn (props){

    const usernameControl = useLogIn('username','text','Username')
    const passwordControl = useLogIn('password','password','Password')

    const logInAcl = useContext(LogInContext);


    const onSubmit = (e)=>{
      e.preventDefault()

      logInAcl.setLogin(logInAcl.login(e.target.username.value , e.target.password.value))

    }

    return(
    <Form id="logInForm" onSubmit={onSubmit}>
      <FormControl {...usernameControl}/>
      <FormControl {...passwordControl}/>
      <Button type="submit">LogIn</Button>
    </Form>
    );
}
export default LogIn;