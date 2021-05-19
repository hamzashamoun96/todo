import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import LogIn from '../login';
import Button from 'react-bootstrap/Button';
import {useContext} from 'react';
import {LogInContext} from '../../context/acl'; 
import { If } from "react-if";

function Header (props){
    const logging = useContext(LogInContext);

    const show = (e) =>{
        
        (document.getElementById('signUpForm').style.display === 'none')? document.getElementById('signUpForm').style.display = 'block':document.getElementById('signUpForm').style.display = 'none'
    }
return(
    <>
    <Navbar bg="dark" variant="dark">
    <Nav.Link href="#home">Home</Nav.Link>  
    <If condition={!logging.loggedIn}> 
    <>
    <Button onClick={show}>Sign Up</Button>
    <LogIn/>
    </>
    </If>  
    <If condition ={logging.loggedIn}> 
    <Button onClick={logging.logout} >LogOut</Button>
    </If>  

    </Navbar>
    </>
);
}

export default Header;