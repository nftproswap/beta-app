import React from 'react';
import logo from '../../images/logo.png';

import './Footer.css'

const Footer = () => {
    return (
        <div className="footer font text-white">
            <div className="container">
                <div className="row">
                   <div className="footer-content d-flex">
                   <div className="col-md-6">
                        <img src={logo} alt=""className='w-50  mb-3' />
                        <h4>NFTSwaps is a product of Blockchain4Africa Limited. The company is created to provide e-commerce services, Internet Marketing, ICT, and blockchain-based services. The Blockchain4africa team has been active in multiple projects in the Blockchain industry and have extensive experience with DAPP development. Our team is composed of multiple blockchain experts from all around the world focused and dedicated to bringing you a transparent and provably fair blockchain-based decentralized platform.</h4>
                    </div>
                    <div className="col-md-3">
                        <h3>Socials</h3>
                        <div></div>
                    </div>
                    <div className="col-md-3">
                        <h3>Quick Links</h3>
                        <ul>
                             <li>Home</li>
                             <li>How It Works</li>
                             <li>Buy Tokens</li>
                        </ul>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;