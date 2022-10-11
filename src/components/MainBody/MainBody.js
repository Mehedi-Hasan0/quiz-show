import React from 'react';

const MainBody = ({ quiz }) => {
    const { name, logo } = quiz;
    return (
        <div className='flex flex-col bg-white p-2 shadow-lg items-center max-w-xs mt-4
        mb-16 mx-auto'>
            <img src={logo} alt="logo" className='w-[220px] h-[220px] bg-slate-200' />
            <div className='flex flex-row justify-between items-center py-2 w-full'>
                <p className='font-poppins'>{name}</p>
                <p className='font-poppins'>Q:</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded font-poppins text-sm">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default MainBody;