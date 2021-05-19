import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import useSignUp from '../../hooks/signup';

function SignUp (props){

    const usernameControl = useSignUp('username','text','Username');
    const emailControl = useSignUp('email','email','Email');
    const passwordControl = useSignUp('password','password','Password');
    const formSubmit = useSignUp();

    return(
        <Form id="signUpForm" style={{display:"none"}} {...formSubmit}>
      <fieldset>
      <legend>Sign Up</legend>
        <Form.Label>
          <FormControl {...usernameControl} required/>
        </Form.Label><br/>
        <Form.Label>
          <FormControl {...emailControl} required/>
        </Form.Label><br/>
        <Form.Label>
          <FormControl {...passwordControl} required/>
        </Form.Label>
        <br/>

    <span>Role</span>
  <Form.Control  name="role" id="select" as="select">
      <option>user</option>
      <option>admin</option>
      <option>editor</option>
  </Form.Control>
        <Button type="submit">Sign Up</Button>
        </fieldset>
        </Form>
    );
}
export default SignUp;