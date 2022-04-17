import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, description } = service
    return (
            <div className="col-lg-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <p>Price: {price}</p>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link className='btn btn-warning' to='/signup'>Book Now</Link>
                    </Card.Body>
                </Card>
            </div>
    );
};

export default Service;