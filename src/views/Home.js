import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Home() {

    return (
        <section className='container container-page py-5 py-md-0 d-flex align-items-center'>
            <div className="row pb-5">
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                    <h1 className="display-2 text-center text-md-start">The easiest way to find Public API.</h1>
                    <Link to='/api'>
                        <Button variant="link fs-1 text-decoration-none link-custom px-0 mt-5 link-custom" >Find Now
                            <span className='ms-3'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </Button>
                    </Link>
                </div>
                <div className="col-12 col-md-6 mt-3 mb-md-0">
                    <Player
                        autoplay
                        loop
                        src='./images/animation-home.json'
                        style={{ height: '80%' }}
                    >
                    </Player>



                </div>
            </div>
        </section>
    )
}

export default Home