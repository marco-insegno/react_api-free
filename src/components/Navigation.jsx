import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles/navigation.css'
import { Link } from 'react-router-dom';

import AppLogo from '../images/logo.svg';


function Navigation() {
  return (
    <Navbar expand="lg" className='navbar-custom' fixed="top">
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={AppLogo} height='140px'/>
          </Navbar.Brand>
        </Link>
        
      </Container>
    </Navbar >
  )
}

export default Navigation