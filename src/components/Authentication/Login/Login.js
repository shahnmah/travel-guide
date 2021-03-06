import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import bgImg from '../../../images/bg-1.png';
import googleIcon from '../../../images/icons/google.png';
import githubIcon from '../../../images/icons/github.png';
import facebookIcon from '../../../images/icons/facebook.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    let errorElement;
    if (error || githubError || googleError) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {githubError?.message} {googleError?.message}</p>
        </div>
    }
    if (user || googleUser || githubUser) {
        navigate('/home')
    }
    // login
    const handleLoginForm = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    }

    // forgot password handler
    const handleForgotPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Enter Your Email First')
        }
    }
    return (
        <div style={{ height: ' calc(100vh - 250px)' }} className='login-form my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center">
                        <img height={'400px'} src={bgImg} alt="login img" />
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
                                <label for="password">
                                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                                </label>
                                <input onBlur={(e) => setPassword(e.target.value)} required className='d-block w-75' type="password" name='password' placeholder='Enter Password' />
                            </div>
                            <p role="button"
                                onClick={handleForgotPassword} className='text-decoration-none forgot-password'>Forgot Password ?</p>
                            <Link className='text-decoration-none d-block' to='/signup'>Don't have an account ?</Link>
                            <button style={{background: '#FA8D24', color:'#000'}} className='btn py-1 px-4 d-block mt-4'>Login</button>
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