import React from 'react';
import { Link } from 'react-router-dom';

const MainBody = ({ quiz }) => {
    const { id, name, logo } = quiz;
    return (
        <div className='flex flex-col bg-white p-2 shadow-lg items-center max-w-xs mt-4
        mb-20 mx-auto'>
            <img src={logo} alt="logo" className='w-[220px] h-[220px] bg-slate-200' />
            <div className='flex flex-row justify-between items-center py-2 w-full'>
                <p className='font-poppins'>{name}</p>
                <p className='font-poppins'>Q:</p>
                <button onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded font-poppins text-sm">
                    <Link to={`/quiz/${id}`}>Get Started</Link>
                </button>
            </div>
        </div>
    );
};

export default MainBody;