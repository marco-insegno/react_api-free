import React from 'react'
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';
import Loader from '../components/Loader';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import useTitle from '../useTitle';




function ApiPage() {

    const { name } = useParams();

    const {
        loading,
        data,
        scrollPosition,
        getScrollPosition,
        deleteScrollPosition,
    } = useGlobalContext()

    const filteredApi = data.filter((el) => el.API === name);

    const filtered = filteredApi[0];

    useTitle(`${filtered ? filtered.API : `Not Found`}`)


    return (
        <>

            {
                loading
                    ? <section className="container container-page d-flex justify-content-center align-items-center">

                        <div className="row">
                            <div className="col-12">
                                <Loader />
                            </div>
                        </div>
                    </section>
                    : filtered
                        ? <section className="container container-page d-flex align-items-center justify-content-center">

                            <div className="row justify-content-center align-items-center">
                                <div className="col-12 col-md-6">
                                    <div className='d-flex flex-column align-items-center align-items-md-start'>
                                        <h5 className='p-2' style={{
                                            border: '1px solid var(--violet)',
                                            color: 'var(--pink)'
                                        }}>{filtered.Category}</h5>
                                        <h1 className='mt-5'>{filtered.API}</h1>
                                        <h4 className='fst-italic my-5 text-center text-md-start'>{filtered.Description}</h4>

                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.5,
                                                ease: [0, 0.71, 0.2, 1.01]
                                            }}>
                                            <Link to='/api'>

                                                <Button variant="link link-custom px-0 fs-2 text-decoration-none" onClick={() => getScrollPosition(scrollPosition)} >
                                                    <span className='me-3'>
                                                        <FontAwesomeIcon icon={faArrowLeft} />
                                                    </span>Come Back</Button>

                                            </Link>
                                        </motion.div>
                                    </div>

                                </div>
                                <div className="col-8 col-md-4 col-lg-6">
                                    <a href={filtered.Link} target='_blank' rel='noreferrer'>
                                        <Player
                                            autoplay
                                            loop
                                            src='../images/animation-api-page.json'
                                            style={{ height: '80%'}}
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
                                            <h2 className=''>Visit</h2>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>

                        </section>
                        : <p>ciao</p>
            }

        </>
    )
}

export default ApiPage