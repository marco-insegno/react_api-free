import React from 'react'
import './styles/footer.css';

function Footer() {
    return (
        <div className="text-center p-3 footer-custom" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            <p className='mb-0 me-2'>© 2023 || </p>
            <a href='https://www.smarcode.it/' target='_blank' rel="noreferrer" className='text-decoration-none'><span className='link-custom text-white cursor-pointer'>SmarcodE</span></a>
        </div>
    )
}

export default Footer