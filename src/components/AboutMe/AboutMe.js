import React from 'react';

const AboutMe = () => {
    return (
        <div style={{height: ' calc(100vh - 250px)'}} className='container my-5'>
            <div className="row">
                <div className="col-lg-4">
                    <img className='img-fluid' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
                <div className="col-lg-8">
                    <h4>About Me</h4>
                    <p>Hi there.I am Shahin Miah.I am a student.I study in department of Marketing in National University.I want to become a Full stack Web Developer.Currently, I am learning web development in Programming Hero</p>
                    <div className="row">
                        <div className="col-lg-6">
                            <h5>My Mission</h5>
                            <p>Lean HTML,CSS,JavaScript,React JS, MongoDb, Web architecture,HTTP and REST,Database storage,Node JS,Design skills in 2022.</p>
                        </div>
                        <div className="col-lg-6">
                        <h5>My Vision</h5>
                            <p>I want to become a Web Developer. Build a career in the Web and Software industry, and reach towards my goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;