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
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis voluptate necessitatibus perspiciatis culpa, porro optio magni voluptatibus sit cumque minima.</p>
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