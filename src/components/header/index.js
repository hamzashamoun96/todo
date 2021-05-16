import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header (props){
return(
    <>
    <Navbar bg="dark" variant="dark">
    <Nav.Link href="#home">Home</Nav.Link>        
    </Navbar>
    </>
);
}

export default Header;