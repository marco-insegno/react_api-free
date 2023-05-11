import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './styles/apiCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { Link as Url } from 'react-router-dom';

function ApiCard({ API, Description, Category, Link }) {

    return (
        <div className="col- col-sm-6 col-md-4 col-lg-3 mb-4">
            <Card className='custom-card position-relative'>
                <div className='ps-3 py-2 border-bottom header-card'>{Category}</div>
                <Card.Body>
                    <Card.Title>{API}</Card.Title>
                    <Card.Text className='py-3'>
                        {Description.slice(0, 50)}
                    </Card.Text>

                </Card.Body>
                <Url to={`/api/${API}`}>
                    <Button variant="link text-decoration-none link-custom position-absolute end-0 bottom-0">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </Button>
                </Url>
            </Card>
        </div>
    )
}

export default ApiCard