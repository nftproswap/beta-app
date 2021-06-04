import React from 'react';
import './Services.css';
import icon from '../../images/icon.png';

const Services = () => {
    return (
      <div className="services font text-white text-center">
          <h1 className=' text-center'>Services</h1>
          <div className="container ">
              <div className="row serviceDetails">
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt=""className='icon' />
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='mt-4 swapBtn'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt=""className='icon' />
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='mt-4 swapBtn'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt="" className='icon'/>
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='swapBtn mt-4'>Swap Now</button>
                  </div>
                  <div className="col-md-3 box">
                      <img src={icon} alt=""className='icon' />
                      <h2 className='mt-4'>Swap Coins</h2>
                      <button className='mt-4 swapBtn'>Swap Now</button>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default Services;