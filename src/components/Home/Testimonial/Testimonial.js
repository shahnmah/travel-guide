import React from 'react';

const Testimonial = () => {
    return (
        <div className='container my-5'>
            <h2>Client Testimonial</h2>
            <div className="row mt-5">
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                        <   div className="col-md-4">
                                <img className='img-fluid' src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Roberto Karlos</h5>
                                    <p className="card-text">Wow what great service, I love it! David impressed me on multiple levels. Just what I was looking for.Thanks for the great service</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className='img-fluid' src="https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Sandro John</h5>
                                    <p className="card-text">I would like to  thank you for your outstanding service. I couldn't have asked for more than this. This is simply unbelievable. I will refer everyone I know.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;