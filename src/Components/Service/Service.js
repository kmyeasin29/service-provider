import React from 'react';

const Service = ({ service }) => {
    const { name, image, details, price } = service
    return (
        <div className='gx-8 gy-3 col--sm-12 col-md-6 col-lg-3'>
            <div class="card " style={{ width: "18rem" }}>
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h4 class="card-text">${price}</h4>
                <p class="card-text">{details}</p>
                <a href="#" class="btn btn-info">Get Appoinment</a>
            </div>
        </div>
            {/* <img width={250} src={image} alt="" />
            <h2>{name}</h2>
            <h5>${price}</h5>
            <p>{details}</p> */}
        </div>
    );
};

export default Service;