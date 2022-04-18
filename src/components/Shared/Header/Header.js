import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <div className='header'>
            <Navbar bg="transparent" expand="lg">
                <Container>
                    <Navbar.Brand href="#">
                        <Link to='/home'><img height={'50px'} src={logo} alt="" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0 d-flex align-items-center"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to='/home'>Home</Link>
                            <Link to='/aboutme'>About Me</Link>
                            <Link to='/blogs'>Blogs</Link>
                            {
                                user ? <button className='btn btn-link sign-out' onClick={handleSignOut}>Sign Out</button> : <Link to='/login'>Login</Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;