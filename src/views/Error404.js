import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <section className='container container-page d-flex justify-content-center '>
            <div className="row justify-content-center">
                <div className="col-12 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="display-2 ">404</h1>
                    <h3 className="display-2 text-center">Page not Found...</h3>

                    <Link to="/">
                        <button className="btn btn-custom mt-5">Back to Home</button>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Error404