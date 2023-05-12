import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navigation.css';
import {Link} from 'react-router-dom';

function Navigation() {
    return (
        <>
            <Navbar bg="light" expand="lg" className='navbar-custom' sticky="top">
                <Container>
                    <Link to='/'>
                        <Navbar.Brand>
                            <img src='./images/logo.png' height='60px' alt='logo-app' />
                        </Navbar.Brand>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation