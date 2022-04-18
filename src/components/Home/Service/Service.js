import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { title, img, price, description } = service
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-2">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>Rate: {price}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Link style={{background: '#FA8D24', color:'#000'}} className='btn py-2 px-4' to='/checkout'>Book Now</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;