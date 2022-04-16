import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <img height={'50px'} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/home'>Home</Link>
                            <Link to='/Login'>Login</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;