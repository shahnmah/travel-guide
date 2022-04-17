import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import bgImg from '../../../images/bg-1.png';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';
import facebookIcon from '../../../images/icons/facebook.png';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    let errorElement;
    if (error || githubError || googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message} {googleError?.message}</p>
        </div>

    }
    if (user || googleUser || githubUser) {
        navigate('/home')
    }
    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    const handleForgotPassword = async () => {
        if(email){
            await sendPasswordResetEmail(email);
        toast('Sent email');
        }
        else{
            toast('Enter Your Email First')
        }
    }
    return (
        <div className='login-form my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        {/* <img className='img-fluid' src={'https://img.freepik.com/free-photo/shocked-impressed-female-tourist-points-copy-space-holds-travel-map_273609-25415.jpg?t=st=1650187663~exp=1650188263~hmac=908ca8b797d417a3a5b500577dd6309f1bbcd0c4425599178d9e5b43e97361e2&w=740'} alt="" /> */}
                        <img height={'400px'} src={bgImg} alt="" />
                    </div>
                    <div className="col-lg-6 ps-5">
                        <h1 className='mb-5'>Login</h1>
                        <form onSubmit={handleLoginForm}>
                            <div className="form-group mb-3">
                                <label for="email">
                                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                                </label>
                                <input onBlur={(e) => setEmail(e.target.value)} required className='d-block w-75' type="email" name='email' placeholder='Enter Email' />
                            </div>
                            <div className="form-group mb-1">
                                <label for="email">
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} required className='d-block w-75' type="password" name='password' placeholder='Enter Password' />
                            </div>
                            <p role="button"
                                onClick={handleForgotPassword} className='text-decoration-none' to='/signup'>Forgot Password ?</p>
                            <Link className='text-decoration-none d-block' to='/signup'>Don't have an account ?</Link>
                            <button className='btn btn-warning d-block py-1 px-4 mt-4'>Login</button>
                        </form>
                        {errorElement}
                        <div className='d-flex my-5 social-option'>
                            <p>Or login with-</p>
                            <div className='mx-auto'>
                                <img onClick={() => signInWithGoogle()} src={googleIcon} alt="" />
                                <img onClick={() => signInWithGithub()} className='mx-4' src={githubIcon} alt="" />
                                <img src={facebookIcon} alt="" />
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default Login;