    import React, { useState } from 'react'
    import ghautox from '../../../assets/ghautox.png'
    import menu from '../../../assets/menu.png'
    import cross from '../../../assets/cross.png'
    

    const Navbar = () => {
        const [showMobileMEnu, setShowMobileMenu] = useState(false);
    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
                <img src={ghautox} alt="logo" className='w-20 h-auto'/>
                <ul className='hidden md:flex gap-7 text-white'>
                    <a href="#Header" className='cursor-pointer hover:text-gray-400'>Browse Parts</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>Sell Parts</a>
                    <a href="#Contact" className='cursor-pointer hover:text-gray-400'>Help</a>
                </ul>
                

<input type="text" name="text" class="input" placeholder="Search For Parts...."></input>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Login</button>
                <img onClick={()=> setShowMobileMenu(true)} src={menu} alt="Menu Icon" className='md:hidden w-7 cursor-pointer ' />
            </div>

            {/* .......Mobile Menu..... */}

            <div className={`md:hidden ${showMobileMEnu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                <div className='flex justify-end p-6 cursor-pointer '>
                    <img onClick={()=> setShowMobileMenu(false)} src={cross} className='w-6' alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Home</a>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Browse Parts</a>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Sell Parts</a>
                    <a href="" className='px-4 py2 rounded-full inline-block'>Login</a>
                </ul>

            </div>
        
        </div>
    )
    }

    export default Navbar
