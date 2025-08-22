import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css'; 
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div
            className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden'
            style={{ backgroundImage: "url('/Wheel.png')" }}
            id='Header'
        >
            <Navbar />

            <div className='text-left py-4 px-0 text-white w-full'>
                <h2 className='text-5xl sm:text-6xl md:text-[82px] max-w-3xl font-semibold pt-20'>
                    Find Car Parts Easily
                </h2>
                <p className="mb-6 text-lg max-w-xl">
                    Buy & sell new or used parts with ease across Ghana.
                </p>
                <div className='space-x-6 mt-8'>
                
                    <Link to="/">
        <button className="button1">Browse Parts</button>
        </Link>

                    
    <Link to="/sellparts">
        <button className="button1">Sell Parts</button>
        </Link>

                </div>
            </div>
        </div>
    );
};

export default Header;
