import React from 'react';
import './Navbar.css';
import logo from '../../images/logo.png';



const Navbar = () => {

    return (
       <div className="shadow-lg fixed-top nav">
         <div className="container">
             <div className="row">
                 <div className="col-md-4">
                     <img src={logo} alt="logo.png" className='w-75 mt-2'/>
                 </div>
                 <div className="col-md-4"></div>
                 <div className="col-md-4">
                     <button className='headerBtn1 mb-md-0 mb-2 mt-md-0 mt-4 '>
                         <span>Locked Liq</span>
                     </button>
                     <button className='headerBtn2'>
                         Connect Wallet
                     </button>
                 </div>
             </div>
         </div>
       </div>
    );
};

export default Navbar;