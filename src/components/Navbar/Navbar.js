import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu.svg';
import close from '../../assets/close.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='flex justify-between items-center py-5 w-full bg-slate-50 sticky top-0 shadow-md'>
            <img src={logo} alt="quiz show" className='w-[138px] h-[30px] ml-8' />
            <div className='nav-links sm:flex hidden items-center mr-8'>
                <Link to='/'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/statistic'>Statistic</Link>
                <Link to='/blog'>Blog</Link>
            </div>
            <div className='sm:hidden flex flex-1 justify-end items-center mr-8'>
                <img src={toggle ? close : menu} alt='menu' className='w-[28px] h-[28px] object-contain' onClick={() => setToggle((previous) => !previous)} />

                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-slate-50 absolute top-[4.125rem] right-0 min-w-[140px] rounded-xl`}>
                    <div className='mobile-nav-links flex flex-col justify-center'>
                        <Link to='/'>Home</Link>
                        <Link to='/quiz'>Quiz</Link>
                        <Link to='/statistic'>Statistic</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;