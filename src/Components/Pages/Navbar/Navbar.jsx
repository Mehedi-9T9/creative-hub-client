import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'


const Navbar = () => {
    const navItems = <>
        <NavLink className="menuItem" to="/">Home</NavLink>
        <NavLink className="menuItem" to="/portfolio">Our Portfolio</NavLink>
        <NavLink className="menuItem" to="/team">Our Team</NavLink>
        <NavLink className="menuItem" to="/contract">Contract us</NavLink>
    </>
    return (
        <div className="navbar bg-[#FBD062] py-5 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#474747] text-base font-medium">
                        {navItems}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}

                <a className="btn btn-ghost text-3xl font-bold">Creative <span className='text-white'> Hub</span></a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-[#474747] text-base font-medium">
                    {navItems}

                </ul>
            </div>
            <div className="ml-24 md:ml-10">
                <Link to="/login"><a className="btn btn-warning text-white text-lg font-semibold border-none bg-[#111430]">Login</a></Link>
            </div>
        </div>
    );
};

export default Navbar;