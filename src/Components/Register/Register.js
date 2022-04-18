import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/Home')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password.length < 6) {
            setError('Your Passwor is less than 8 character')
            return
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='mx-auto w-50 container mt-5 border rounded p-5'>
            <h2 className='text-center text-primary'>REGISTER</h2>
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>
                    {error}
                </p>
                <Button className='form-submit' variant="primary" type="submit">
                    Register
                </Button>

            </Form>
            <p className='mt-3 fs-5'>Already Registered??? <Link className='text-decoration-none' to='/Login'>Login</Link></p>
        </div>
    );
};

export default Register;