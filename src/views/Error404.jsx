import React from 'react'
import './styles/error404.css'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <section className="container d-flex justify-content-center align-items-center error-404">
            <div className="row justify-content-center text-center">
                <div className="col-12">
                    <h1 className='display-1'>404</h1>
                    <h3>Page not found...</h3>
                    <Link to='/'>
                        <button className='btn btn-custom mt-5'>Home</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Error404