import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import bgImg from '../../../images/bg-1.png'

const Banner = () => {
    return (
        <div className='banner container'>
            <div className="row align-items-center">
                <div className="col-lg-6">
                    <h1>Your Travel Assistent in Bangladesh</h1>
                    <p>A journey of a thousand miles begins with a single step.Wherever you go becomes a part of you somehow.lets enjoy the the land Of beauty with your travel guide David.</p>
                    <button className='btn btn-warning fw-bold py-2 px-4'>Contact Me</button>
                </div>
                <div className="col-lg-6 d-flex justify-content-center">
                    <img className='img-fluid' src={bgImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;