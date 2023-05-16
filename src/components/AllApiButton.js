import React from 'react'
import './styles/allApiButton.css'
import { Link } from 'react-router-dom'

function AllApiButton() {
  return (
    <Link to='/api'>
      <div className='all-api-button-custom'>All Api</div>
    </Link>
  )
}

export default AllApiButton