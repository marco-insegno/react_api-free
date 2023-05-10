import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import img from '../images/nft-img.png'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Player } from '@lottiefiles/react-lottie-player';
import animationHome from '../images/animation-home.json'
// https://api.publicapis.org/entries

function Home() {

  const image = img;

  const animation =
    <Player
      autoplay
      loop
      src={animationHome}
      style={{ height: '80%' }}
    >
    </Player>

  return (
    <>

    <main className='container min-vh-100 d-flex flex-column justify-content-center'>

      <Hero img={image} animation={animation}>The easiest way to find API Free.</Hero>
      {/* <section className="container mt-5 pt-5">
        <div className="row justify-content-between text-center text-md-start align-items-center">
          <div className="col-12 col-md-8">
            <h2 className='fs-1'>Search your api</h2>
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
      </section > */}
    </main>
    </>
  )
}

export default Home