import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faStairs, faUserTie, faBullseye } from '@fortawesome/free-solid-svg-icons';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div style={{height: ' calc(100vh - 250px)'}} className='container my-5 about-me'>
            <div className="row">
                <div className="col-lg-4">
                    <img className='img-fluid' src="https://i.ibb.co/3SywncM/pexels-italo-melo-2379004-1.jpg" alt="" />
                </div>
                <div className="col-lg-8 p-4">
                    <FontAwesomeIcon icon={faUserTie}></FontAwesomeIcon>
                    <h3>About Me</h3>
                    <p>Hi there.I am Shahin Miah.I am a student.I study in department of Marketing in National University.I want to become a Full stack Web Developer.Currently, I am learning web development in Programming Hero</p>
                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <FontAwesomeIcon icon={faBullseye}></FontAwesomeIcon>
                            <h4>My Mission</h4>
                            <p>Lean HTML,CSS,JavaScript,React JS, MongoDb, Web architecture,HTTP and REST,Database storage,Node JS,Design skills in 2022.</p>
                        </div>
                        <div className="col-lg-6">
                            <FontAwesomeIcon icon={faStairs}></FontAwesomeIcon>
                        <h4>My Vision</h4>
                            <p>I want to become a Web Developer. Build a career in the Web and Software industry, and reach towards my goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;