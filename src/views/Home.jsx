import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import animationHome from '../images/animation-home.json'
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <>

      <section className="container section-home mt-5">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className='display-2'>The easiest way to find Public API.</h1>
            <Link to='/api'>
            <Button variant="link fs-1 text-decoration-none link-custom px-0 mt-5" >Find Now
              <span className='ms-3'>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </Button>
            </Link>
          </div>
          <div className="col-12 col-md-6 text-center text-md-start mt-5 mt-md-0">
            <Player
              autoplay
              loop
              src={animationHome}
              style={{ height: '80%' }}
            >
            </Player>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home