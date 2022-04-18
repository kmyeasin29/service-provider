import { React, useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="col-sm-12">
            <Carousel.Item>
                <img
                    className="d-block w-100" height={580}
                    src="https://i.ibb.co/TW8x6C6/hero-1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 style={{ color: "#bc74a5" }}>Care For Lifetime</h3>
                    <h1 style={{ color: "#0e54ae" }} className="bold">Committed To Excellence</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={580}
                    src="https://i.ibb.co/1zBSjjt/hero-2.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3 style={{ color: "#bc74a5" }}>Committed To Excellence</h3>
                    <h1 style={{ color: "#0e54ae" }}>Personalized & Comfortable</h1>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" height={580}
                    src="https://i.ibb.co/7bpVPVC/hero-3.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: "#bc74a5" }}>Care For Lifetime</h3>
                    <h1 style={{ color: "#0e54ae" }}>Let Us Brighten Your Smile</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;