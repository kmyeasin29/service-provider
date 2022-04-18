import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const location=useLocation();
    const from= location.state?.from?.pathname || '/'

    const handleEmailField = event => {
        setEmail(event.target.value)
    }

    const handlePasswordField = event => {
        setPassword(event.target.value)
    }

    if (user) {
        navigate(from, {replace:true});
    }

    const handleLoginButton = event => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='mx-auto w-50 container mt-5 border rounded p-5'>
            <h2 className='text-center text-primary'>LOGIN</h2>
            <Form onSubmit={handleLoginButton}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailField} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordField} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>
                    {error?.message}
                </p>
                <Button variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <p className='mt-3 fs-5'>Don't Register Yet??? <Link className='text-decoration-none' to='/Register'>Register Now</Link></p>
        <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;
