import React from 'react';

const Testimonial = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center'>Client Testimonial</h2>
            <div className="row mt-5">
                <div className="col-lg-6">
                    <div className="card mb-3" style={{width: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="card mb-3" style={{width: "540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_960_720.jpg" className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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