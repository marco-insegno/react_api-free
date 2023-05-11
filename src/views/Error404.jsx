import React from 'react'
import './styles/error404.css'
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player';
import animationJs from '../images/animation-404.json'

function Error404() {
    return (
        <main className='container min-vh-100 d-flex flex-column justify-content-center'>
            <section className="container d-flex justify-content-center align-items-center error-404">
                <div className="row justify-content-center text-center">
                    <div className="col-12">

                        <Player
                            autoplay
                            loop
                            src={animationJs}
                            style={{ height: '100%' }}
                        >
                        </Player>

                        <Link to='/'>
                            <button className='btn btn-custom mt-5'>Back to Home</button>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Error404