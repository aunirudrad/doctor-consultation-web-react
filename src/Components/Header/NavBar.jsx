import React from 'react';
import logo from './../../assets/logo.png'
import { NavLink } from 'react-router';

const NavBar = () => {
    const links = <>
    <NavLink><li className='text-lg font-medium'>Home</li></NavLink>
    <NavLink><li className='text-lg font-medium'>My-Bookings</li></NavLink>
    <NavLink><li className='text-lg font-medium'>Blogs</li></NavLink>
    <NavLink><li className='text-lg font-medium'>Contact Us</li></NavLink>
    
    </>
    return (
        <div className=' md:max-w-[80%] mx-auto py-6 px-2 bg-[#EFEFEF]'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='ml-4 flex justify-center items-center'>
                        <img className='w-8 md:w-10' src={logo} alt="" />
                        <a className="btn btn-ghost text-[2rem] text-black">Phudu</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-[#EFEFEF] flex justify-between items-center gap-8 text-black">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary rounded-4xl text-lg md:text-xl md:py-6 md:px-9">Emergency</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;