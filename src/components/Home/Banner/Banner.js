import React from 'react';
import { Carousel } from 'react-bootstrap';
import './banner.css'
import bgImg from '../../../images/bg-1.png'

const Banner = () => {
    return (
        <div className='banner container mb-5'>
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <h1>Your Travel Assistent in Bangladesh</h1>
                    <p className='py-2'>A journey of a thousand miles begins with a single step.Wherever you go becomes a part of you somehow.lets enjoy the the land Of beauty with your travel guide David.</p>
                    <button style={{background: '#FA8D24', color:'#000'}} className='btn py-2 px-4'>Contact Me</button>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex justify-content-center">
                    <img className='img-fluid' src='https://i.ibb.co/jHykyJQ/Trip-pana.png' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;