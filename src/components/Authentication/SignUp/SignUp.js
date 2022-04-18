import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';
import facebookIcon from '../../../images/icons/facebook.png';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let errorElement;
    if (error || githubError || googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message} {googleError?.message}</p>
        </div>
    }
    if (user || googleUser || githubUser) {
        navigate('/home')
    }
    const handleFormSubmit = (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div style={{ height: ' calc(100vh - 205px)' }}>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className='mb-5'>Sign Up</h1>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-group mb-3">
                                <label for="name">
                                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                                </label>
                                <input className='d-block w-75' type="text" name='email' placeholder='Enter Name' />
                            </div>
                            <div className="form-group mb-3">
                                <label for="email">
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} required className='d-block w-75' type="email" name='email' placeholder='Enter Email' />
                            </div>
                            <div className="form-group mb-1">
                                <label for="password">
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} requireds className='d-block w-75' type="password" name='password' placeholder='Enter Password' />
                            </div>
                            <Link className='text-decoration-none d-block' to='/login'>Already have an account ?</Link>
                            <button style={{background: '#FA8D24', color:'#000'}} className='btn d-block py-1 px-4 mt-4'>Sign Up</button>
                        </form>
                        {errorElement}
                        <div className='d-flex my-5 social-option'>
                            <p>Or Sign up with-</p>
                            <div className='mx-auto'>
                                <img onClick={() => signInWithGoogle()} src={googleIcon} alt="" />
                                <img onClick={() => signInWithGithub()} className='mx-4' src={githubIcon} alt="" />
                                <img src={facebookIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img height={'400px'} src='https://i.ibb.co/nPx8GXx/Resume-pana.png' alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;