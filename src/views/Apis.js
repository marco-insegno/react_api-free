import React, {useEffect} from 'react'
import { useGlobalContext } from '../context';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import ApiCard from '../components/ApiCard';

function Apis() {

    const { loading, error, data, scrollPosition, deleteScrollPosition } = useGlobalContext()

    useEffect(() => {
        if (scrollPosition > 0) {
            window.scrollTo(0, scrollPosition)
            deleteScrollPosition()
        } else {
            window.scrollTo(0, 0)
        }
    }, [])


    return (
        <>

            {
                loading &&

                <section className="container container-page d-flex justify-content-center">
                    <div className="row text-center">
                        <div className="col-12 d-flex flex-column justify-content-center text-danger">
                            <Loader />
                        </div>
                    </div>
                </section>
            }

            {
                error &&
                <section className="container container-page d-flex justify-content-center">
                    <div className="row text-center">
                        <div className="col-12 d-flex flex-column justify-content-center text-danger">
                            <h1 className='text-danger'>!!! Data fetching failed !!!</h1>
                            <h4 className='text-danger'>Something went wrong in the fetch call...</h4>
                            <Link to='/'>
                                <button className='btn btn-custom mt-5'>Back to Home</button>
                            </Link>
                        </div>
                    </div>
                </section>

            }


            {
                !loading && !error &&

                <section className="container mt-5">

                    <section className="container pb-5">

                        <div className="row">

                            {
                                data && data.map((api, index) => {
                                    return (
                                        <ApiCard key={index} {...api} />
                                    )
                                })
                            }

                        </div>
                    </section>
                </section>
            }

        </>
    )
}

export default Apis