import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate(auth);
    let errorElement;

    if (error) {
        errorElement = <div>
            <p>Error: {error.message}</p>
        </div>
    }

    if (user) {
        navigate('/Home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
                <p className='px-2 mt-2'>or</p>
                <div style={{ height: "1px" }} className="bg-primary w-50"></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='bg-primary w-100'><img style={{ width: "30px" }} src='https://i.ibb.co/JpGQ3wX/google.png'></img>Continue With Google</button>
        </div>
    );
};

export default SocialLogin;