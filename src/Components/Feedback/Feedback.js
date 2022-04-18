import React from 'react';

const Feedback = () => {
    return (
        <div>
            <h2 className='text-primary text-center mt-5 mb-2'>FEEDBACK</h2>
            <div style={{ height: "325px" }} className='w-100 d-flex justify-cintent-center align-items-center container'>
                <div className='w-50 col-sm-12'>
                    <h2 className='p-3 bg-primary text-light'>"My family trusts Dr John completely, he's been with us for years and as helped us on numerous occasions"
                        <div style={{ height: "1px", width: "30%" }} className="bg-dark mt-2 text-center d-block"></div><br />
                        <img style={{width: "100px", height:"50px"}} src="https://i.ibb.co/1vrbXhv/signature.pnghttps://i.ibb.co/1vrbXhv/signature.png" alt="" />
                    </h2>
                </div>
                <div className='w-50 p-5'>
                    <img className='w-100' src="https://i.ibb.co/TW8x6C6/hero-1.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Feedback;