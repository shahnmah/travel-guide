import React from 'react';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';
import facebookIcon from '../../../images/icons/facebook.png';
import './Footer.css'
const Footer = () => {
    return (
        <div className="bg-light">
            <div className='container py-4'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='m-0'>Copy Right &copy; 2022</p>
                    </div>
                    <div>
                        <span className='mx-3'>Find Me on</span>
                        <span><img src={googleIcon} alt="" /></span>
                        <span><img className='mx-3' src={githubIcon} alt="" /></span>
                        <span><img src={facebookIcon} alt="" /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

