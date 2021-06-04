import React from 'react';
import './AboutUs.css';
import us from '../../images/us.svg'

const AboutUs = () => {
    return (
        <div className="aboutUs font text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={us} alt="" className='w-75' />
                    </div>
                    <div className="col-md-6">
                        <h1>Make Money With Us</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit quos beatae iure recusandae laboriosam quam eum temporibus! Deserunt sapiente veniam, eius, ducimus mollitia facilis nostrum magni maxime iure ipsam totam.</p>
                        <button className='headerBtn1'>More Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;