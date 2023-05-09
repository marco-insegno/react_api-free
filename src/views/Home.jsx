import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import img from '../images/nft-img.png'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Home() {

  const image = img;

  return (
    <>
      <Hero img={image}>The easiest way to buy Photos as NFT.</Hero>
      <section className="container mt-5 pt-5">
        <div className="row justify-content-between text-center text-md-start align-items-center">
          <div className="col-12 col-md-8">
            <h2 className='fs-1'>Search your photos</h2>
          </div>
          <div className="col-12 col-md-4 mt-3 mt-md-0 text-center text-md-end">
            <h6 className='text-muted'>50/50</h6>
          </div>
        </div>

        <div className="row mt-5 d-flex justify-content-center justify-content-md-start">
          <div className="col-8 col-md-4">
            <Form onSubmit={(e) => { e.preventDefault() }
            }>
              <Form.Group className="mb-3 position-relative" controlId="formGroupSearch">
                <Form.Control type="text" placeholder="Search..." className='bg-dark rounded-5 text-white px-3' />
                <button type='submit' className='btn position-absolute end-0 top-0'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                </button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section >
    </>
  )
}

export default Home