import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import useTitle from '../useTitle'
import Loader from '../components/Loader'
import { Player } from '@lottiefiles/react-lottie-player';
import animationApi from '../images/animation-api-page.json';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"

function ApiPage() {

    const { name } = useParams()

    const {
        loading,
        error,
        data,
        scrollPosition,
        getScrollPosition,
    } = useGlobalContext()

    const filteredApi = data.filter((el) => el.API === name)

    const filtered = filteredApi[0];

    useTitle(`${filtered ? filtered.API : `Not Found`}`)


    useEffect(() => { 

        window.scrollTo(0, 0);
        console.log('ciao')

    } ,[]);

    return (
        <>

            {
                loading
                    ?
                    <section className="container mt-5 pt-5 section-api">
                        <section className="container mt-5 pt-5">
                            <div className="row mt-5 text-center justify-content-center">
                                <div className="col-8 position-absolute top-50">
                                    <Loader />
                                </div>
                            </div>
                        </section>
                    </section>
                    : filtered ?

                        <section className="container mt-5 py-5 vh-100">
                            <section className="container mt-5 py-5 mt-md-1 py-md-1">
                                <div className="row">

                                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center align-items-md-start">

                                        <div className='position-relative'>
                                            <h5 className='p-2 position-absolute top-0' style={{
                                                border: '1px solid var(--violet)',
                                                color: 'var(--pink)'
                                            }}>{filtered.Category}</h5>
                                            <h1 className='mt-5'>{filtered.API}</h1>
                                            <h4 className='fst-italic my-5'>{filtered.Description}</h4>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.5 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    duration: 0.8,
                                                    delay: 0.5,
                                                    ease: [0, 0.71, 0.2, 1.01]
                                                }}>
                                                <Link to='/api'>
                                                    <Button variant="link fs-2 text-decoration-none link-custom px-0" onClick={() => getScrollPosition(scrollPosition)} >
                                                        <span className='me-3'>
                                                            <FontAwesomeIcon icon={faArrowLeft} />
                                                        </span>Come Back
                                                    </Button>
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <a href={filtered.Link} target='_blank' rel='noreferrer'>
                                            <Player
                                                autoplay
                                                loop
                                                src={animationApi}
                                                style={{ height: '60vh' }}
                                            >
                                            </Player>
                                        </a>


                                        <motion.div
                                            animate={{
                                                scale: [1, 0.8, 0.8, 1, 1],
                                                rotate: [0, 0, 0, 0, 0],
                                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                                            }}
                                            transition={{
                                                duration: 2,
                                                ease: "easeInOut",
                                                times: [0, 0.2, 0.5, 0.8, 1],
                                                repeat: Infinity,
                                                repeatDelay: 1
                                            }}
                                        >
                                            <div className='text-center'>
                                                <FontAwesomeIcon icon={faAnglesUp} className='fa-3x text-white' />
                                                <h2 className='mt-3'>Visit</h2>
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </section>

                        </section>


                        : <section className="container mt-5 pt-5 section-api">
                            <section className="container mt-5 pt-5">
                                <div className="row mt-5 text-center justify-content-center">
                                    <div className="col-8 position-absolute top-50">
                                        <h1 className='text-danger'>!!! Data fetching failed !!!</h1>
                                        <h4 className='text-danger'>Something went wrong in the fetch call...</h4>
                                        <Link to='/'>
                                            <button className='btn btn-custom mt-5'>Back to Home</button>
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        </section>
            }
        </>
    )
}

export default ApiPage