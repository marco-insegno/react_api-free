import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import './styles/apiCard.css';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context';

function ApiCard({ API, Description, Category }) {

    const { getScrollPosition } = useGlobalContext();

    const navigate = useNavigate();

    const goToApiPage = (name) => {
        getScrollPosition(window.pageYOffset)
        navigate(`/api/${API}`);
    }

    return (
        <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            onClick={() => goToApiPage(API)}
            style={{
                cursor: 'pointer'
            }}
        >

            <Card className='custom-card position-relative'>
                <div className='ps-3 py-2 border-bottom header-card'>{Category}</div>
                <Card.Body>
                    <Card.Title>{API}</Card.Title>
                    <Card.Text className='py-3'>
                        {Description.slice(0, 50)}
                    </Card.Text>

                </Card.Body>

                <Button variant="link text-decoration-none link-custom position-absolute end-0 bottom-0">
                    <FontAwesomeIcon icon={faAnglesRight} />
                </Button>

            </Card>


        </div>
    )
}

export default ApiCard