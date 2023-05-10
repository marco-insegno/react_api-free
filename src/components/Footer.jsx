import React from 'react'
import './styles/footer.css'

function Footer() {
  return (
    <div className="text-center p-3 footer-custom" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
      © 2023 || <span className='link-custom text-white cursor-pointer'>SmarcodE</span>
    </div>
  )
}

export default Footer