import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMobile , faUser } from '@fortawesome/free-solid-svg-icons';
import bgImg from '../../../images/bg-1.png';
import paymentIcon from '../../../images/icons/payment.png';
import visaIcon from '../../../images/icons/visa.png';
import americanIcon from '../../../images/icons/american-express.png';

const CheckOut = () => {  
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='mb-5'>Checkout</h1>
                        <form>
                            <div className="form-group mb-3">
                                <label for="name">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </label>
                                <input className='d-block w-75' type="text" name='name' placeholder='Full Name' />
                            </div>
                            <div className="form-group mb-3">
                                <label for="age">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </label>
                                <input className='d-block w-75' type="number" name='age' placeholder='Your Age' />
                            </div>
                            <div className="form-group mb-3">
                                <label for="email">
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </label>
                                <input className='d-block w-75' type="email" name='email' placeholder='Enter Email' />
                            </div>
                            <div className="form-group mb-1">
                                <label for="phone">
                                    <FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>
                                </label>
                                <input className='d-block w-75' type="number" name='phone' placeholder='Enter Phone Number' />
                            </div>
                            <button className='btn btn-warning d-block py-1 px-4 mt-4'>Proceed Checkout</button>
                        </form>
                        <div className='d-flex my-5 social-option'>
                            <p>You can pay me via-</p>
                            <div className='mx-auto'>
                                <img src={paymentIcon} alt="" />
                                <img className='mx-4' src={visaIcon} alt="" />
                                <img src={americanIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        {/* <img className='img-fluid' src={'https://img.freepik.com/free-photo/shocked-impressed-female-tourist-points-copy-space-holds-travel-map_273609-25415.jpg?t=st=1650187663~exp=1650188263~hmac=908ca8b797d417a3a5b500577dd6309f1bbcd0c4425599178d9e5b43e97361e2&w=740'} alt="" /> */}
                        <img height={'400px'} src={bgImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;