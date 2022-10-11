import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
    return (

        <Navbar className='header' expand="lg">
            <Container>
                <Navbar.Brand href="/">Quiz Station</Navbar.Brand>
                <div>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/topics">Topics</Nav.Link>
                        <Nav.Link href="/statistics">Statistics</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>
            
        
    );
};

export default Header;