import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { ReactComponent as Logo } from '../images/logo.svg';
// import { ReactComponent as CartIcon } from '../images/cart.svg';
import './styles/navigation.css'
import { Link } from 'react-router-dom';

import AppLogo from '../images/logo.svg';
import CartIcon  from '../images/cart.svg';

function Navigation() {
  return (
    <Navbar expand="lg" className='navbar-custom'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img src={AppLogo}/>
            {/* <Logo /> */}
          </Navbar.Brand>
        </Link>
        <Link to='/checkout'>
          <Nav className="ms-auto">
          <img src={CartIcon}/>
          </Nav>
        </Link>
      </Container>
    </Navbar >
  )
}

export default Navigation