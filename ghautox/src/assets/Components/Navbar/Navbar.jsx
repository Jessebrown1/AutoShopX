    import React, { useState } from 'react'
    import ghautox from '../../../assets/ghautox.png'
    import menu from '../../../assets/menu.png'
    import cross from '../../../assets/cross.png'
    import { Link } from "react-router-dom";
    

    const Navbar = () => {
        const [showMobileMEnu, setShowMobileMenu] = useState(false);
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={ghautox} alt="logo" className='w-20 h-auto'/>
                <ul className='hidden md:flex gap-7 text-white'>
                <Link to="/" className='cursor-pointer hover:text-gray-400'>Browse Parts</Link>
                <Link to="/sell" className='cursor-pointer hover:text-gray-400'>Sell Parts</Link>
                <Link to="/mechanics" className='cursor-pointer hover:text-gray-400'>Mechanics</Link>
                </ul>
                


                
                                    <div className="relative">
                    <input
                        placeholder="Search..."
                        name="search"
                        type="search"
                        className="shadow-lg border border-gray-300 px-4 py-2 rounded-xl w-48 md:w-56 transition-all duration-300 focus:w-64 outline-none text-sm bg-gray-100 focus:border-2 focus:border-[#009087]"
                    />
                    <svg
                        className="w-5 h-5 absolute top-2.5 right-3 text-gray-500 pointer-events-none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        ></path>
                    </svg>
                    </div>








                <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer'>Login</button>
                <img onClick={()=> setShowMobileMenu(true)} src={menu} alt="Menu Icon" className='md:hidden w-7 cursor-pointer ' />
            </div>

            {/* .......Mobile Menu..... */}

            <div className={`md:hidden ${showMobileMEnu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer '>
                    <img onClick={()=> setShowMobileMenu(false)} src={cross} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <Link to="/" className='px-4 py2 rounded-full inline-block'>Home</Link>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Browse Parts</a>
                    <a href="/" className='px-4 py2 rounded-full inline-block'>Sell Parts</a>
                    <Link to="/mechanics" className='px-4 py2 rounded-full inline-block'>Mechanics</Link>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Login</a>
                </ul>

            </div>
        
        </div>
    )
    }

    export default Navbar
