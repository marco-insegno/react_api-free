import React from 'react'
import './styles/footer.css'

function Footer() {
  return (
    <div className="text-center p-3 footer-custom" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      © 2023 || <a href='https://www.smarcode.it/' target='_blank' className='text-decoration-none'><span className='link-custom text-white cursor-pointer'>SmarcodE</span></a>
    </div>
  )
}

export default Footer