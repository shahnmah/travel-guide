import React from 'react';
import notFoundImg from '../../images/404.png'

const NotFound = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <img height={'700px'} src={notFoundImg} alt="" />
        </div>
    );
};

export default NotFound;