import React from 'react';
import image from '../../assets/background-img.svg';

const Header = () => {
    return (
        <section id='home' className='flex md:flex-row flex-col py-6 bg-slate-50 mb-8'>
            <div className='flex justify-center items-start flex-col sm:px-16 px-6'>
                <div className='flex flex-row justify-between items-center'>
                    <h1 className='font-poppins font-semibold ss:text-[64px] text-[44px] text-black ss:leading-[88px] leading-[52px]'>A community of Web Developers. </h1>
                </div>
                <p className='font-poppins font-normal text-[18px] leading-[30px] max-w-[470px] mt-5 mx-auto'>Check your programming skills by taking quiz. We are a developer community helping you to learn programming faster by taking quiz!!</p>
            </div>
            <div>
                <img src={image} alt="quiz" className='w-[100%] h-[100%]' />
            </div>
        </section>
    );
};

export default Header;