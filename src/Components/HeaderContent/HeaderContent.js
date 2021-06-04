import React, { useState } from 'react';
import './HeaderContent.css';
import { CarouselItem,Carousel } from 'react-bootstrap';
import bitcoin from '../../images/bitcoin.jpeg';
import coin from '../../images/coin.jpg';
import bit from '../../images/bit.jpg'

const HeaderContent = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div className="header font text-white ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Deposit Swap Atomic Trading.</h1>
                        <h5>NFT Just became liquid - experience NFT Trading Like Never Before.</h5>
                        <button className='headerBtn1 mt-md-3 mb-4'>Explore More...</button>
                    </div>
                    <div className="col-md-6">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 rounded"
                                src={bitcoin}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 rounded"
                                src={bit}
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 rounded"
                                src={coin}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderContent;