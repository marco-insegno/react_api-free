import React from 'react'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function Hero({ children, img }) {

  return (
    <section className='container my-5 hero-custom'>

      <div className="row h-100 justify-content-center justify-content-md-between align-items-center">
        <div className="col-10 col-md-6 mt-5 mt-lg-0 pe-3 text-center text-md-start">
          <h1 className='text-white display-1 fw-bold'>{children}</h1>
          <Button variant="link fs-1 text-decoration-none link-custom px-0 mt-5" >Start Now
            <span className='ms-3'>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Button>
        </div>

        {img &&
          <div className="col-10 col-md-6 mt-5 mt-lg-0">
            <img src={img} width='90%' alt="nft" className='img-fluid' />
          </div>
        }
      </div>


    </section>
  )
}

export default Hero