import React from 'react'
import { useGlobalContext } from '../context';
import Loader from '../components/Loader';
import ApiCard from '../components/ApiCard';
import { Link } from 'react-router-dom';


function AllApi() {

  // l'array di oggetti mi arriva dal context poichè passato attraverso attrivuto value del Provider
  const { loading, error, data, count } = useGlobalContext()

  return (
    <>

      {
        loading &&
        <section className="container mt-5 pt-5 section-api">
          <section className="container mt-5 pt-5">
            <div className="row mt-5 text-center justify-content-center">
              <div className="col-8 position-absolute top-50">
                <Loader />
              </div>
            </div>
          </section>
        </section>
      }

      {
        error &&
        <section className="container mt-5 pt-5 section-api">
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

      {
        !loading && !error && <section className="container mt-5 pt-5 section-api">

          <section className="container mt-5 pt-5">
            <div className="row mt-5">
              <div className="col-12">
                <h1>form input search</h1>
              </div>
            </div>
            <div className="row mt-5">

              {data && data.map((api, index) => {
                return (
                  <ApiCard key={index} {...api} />
                )
              })}

            </div>
          </section>
        </section>
      }

    </>
  )
}

export default AllApi