import React from 'react'
import './styles/contactButton.css';

function ContactButton() {
    return (
        <div className='contact-button-custom'>
            <p className='mb-0'>Contact</p>
            <hr />
            <p className='mb-0'>
                <a href='mailto:info@smarcode.it' className='text-decoration-none text-white font-roboto-mono fst-italic'>info@smarcode.it</a>
            </p>
            <p className='mb-0 font-roboto-mono fst-italic'>
            <a href='tel:+393472311690' className='text-decoration-none text-white font-roboto-mono fst-italic'>+39 3472311690</a></p>

        </div>
    )
}

export default ContactButton