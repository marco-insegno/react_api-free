import React from 'react'
import './styles/aboutButton.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function AboutButton() {
    return (

        <Link to='/about'>
            <Button variant="link" className='about-button-custom'>About</Button>
        </Link>
    )
}

export default AboutButton