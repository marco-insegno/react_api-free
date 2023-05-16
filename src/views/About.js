import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGitlab } from '@fortawesome/free-brands-svg-icons'

function About() {
    return (
        <section className='container container-page py-5 py-md-0 d-flex align-items-center'>
            <div className="row pb-5">
                <div className="col-12 col-md-6 mb-3 mb-md-0 d-flex flex-column align-items-center align-items-md-start justify-content-center">
                    <h1 className="display-2 text-center text-md-start">Hello 👋, </h1>
                    <h3 className="text-center text-md-start fw-light">my name is Marco.</h3>


                    <div className="mt-5">
                        <h4 className='fw-light font-roboto-mono'>Visit my developer Profiles</h4>

                        <div className="container">
                            <div className="row mt-3">
                                <div className="col-12 col-md-4">
                                    <a href="https://www.linkedin.com/in/marco-insegno/" target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faLinkedin} className='icon-social fa-3x' />
                                    </a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a href="https://github.com/marco-insegno" target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faGithub} className='icon-social fa-3x' /></a>
                                </div>
                                <div className="col-12 col-md-4">
                                    <a href="https://gitlab.com/marco_insegno" target='_blank' rel="noreferrer">
                                        <FontAwesomeIcon icon={faGitlab} className='icon-social fa-3x' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-12 col-md-6 mt-3 mb-md-0">

                    <img
                        src="./images/marco_sketch.jpg"
                        width='100%'
                        style={{
                            borderRadius: '50%',
                            border: '1px solid var(--light)'
                        }} />


                </div>
            </div>
        </section>
    )
}

export default About