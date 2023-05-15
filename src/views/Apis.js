import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context';
import Loader from '../components/Loader';
import { Link } from 'react-router-dom';
import ApiCard from '../components/ApiCard';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"
import Alert from 'react-bootstrap/Alert';

function Apis() {

    const { loading, error, data, scrollPosition, deleteScrollPosition, uniqueCategories } = useGlobalContext()

    const [count, setCount] = useState('');

    const [notFound, setNotFound] = useState(false);

    const [filtered, setFiltered] = useState({
        input: '',
        list: []
    })


    const handleChange = (e) => {

        setNotFound(false)

        const results = data.filter((el) => {
            if (e.target.value === '') {
                return data
            }
            return el.API.toLowerCase().includes(e.target.value.toLowerCase())
        })

        setFiltered({
            input: e.target.value,
            list: results
        })

        setCount(results.length)

    };

    const handleSubmit = (e) => {

        e.preventDefault()

        if (filtered.list.length === 0) {

            setNotFound(true)
        }
    }

    // categorie button
    const getApiByCategory = (category) => {
        const apisByCategory = data.filter((el) => el.Category === category)

        setFiltered({
            list: apisByCategory
        })

        window.scrollTo(0, 0)
    }


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
                            <h4 className='text-danger'>... retry few later ⌛</h4>
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

                        <div className="row justify-content-between mb-5">

                            <div className="col-12 col-md-6 ">
                                <h1 className='mb-0'>Search your Api</h1>
                            </div>

                            <div className="col-12 col-md-6 d-flex justify-content-start justify-content-md-end align-items-center mt-3 mt-md-0">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3 mb-md-0 position-relative" controlId="formBasicEmail">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search..."
                                            className='input-custom'
                                            onChange={handleChange} />

                                        <Button variant="link" type="submit" className='position-absolute top-0 end-0'>
                                            <FontAwesomeIcon icon={faEye} className='icon-custom' />
                                        </Button>

                                        <p className='mt-1 mb-0 fst-italic text-muted text-md-end'>{

                                            count === ''
                                                ? ''
                                                : count === 0
                                                    ? <Alert className='alert-custom mt-2 p-2 text-center'>
                                                        Not Found !!!
                                                    </Alert>
                                                    : count === 1
                                                        ? `Found ${count} item`
                                                        : `Found ${count} items`
                                        }</p>
                                    </Form.Group>

                                </Form>
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-12 col-sm-3 col-lg-2 px-0">
                                {
                                    uniqueCategories && uniqueCategories.map((category, index) => {
                                        return (
                                            <div key={index} className="col-12 border box-category-custom" >
                                                <Button variant="link" className='text-decoration-none text-white' onClick={(e) => getApiByCategory(e.target.innerText)}>
                                                    {category}
                                                </Button>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div className="col-12 col-sm-9 col-lg-10 ">

                                {filtered.list.length === 0 && !notFound
                                    ?
                                    <div className="row">
                                        {data && data.map((api, index) => {
                                            return (
                                                <ApiCard key={index} {...api} />
                                            )
                                        })}
                                    </div>
                                    :
                                    (filtered.list.length > 0 && !notFound)
                                        ?
                                        <div className="row">

                                            {
                                                filtered.list.map((api, index) => {
                                                    return (
                                                        <ApiCard key={index} {...api} />
                                                    )
                                                })
                                            }

                                        </div>
                                        :

                                        <div className="row pt-5">
                                            <div className="col-12 pt-5 text-center">
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.5 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ duration: 1.5 }}
                                                >
                                                    <h2 className='text-danger fst-italic'>No item found with this name...</h2>
                                                </motion.div>
                                            </div>
                                        </div>
                                }

                            </div>

                        </div>

                    </section>
                </section >
            }

        </>
    )
}

export default Apis