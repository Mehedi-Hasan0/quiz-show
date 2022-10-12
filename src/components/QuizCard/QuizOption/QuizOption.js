import React from 'react';

const QuizOption = ({ option }) => {
    return (
        <div className=' p-2 my-3 border-2 border-sky-200  sm:w-1/2 w-3/4 mx-auto'>
            <p key={option.id} className='cursor-pointer font-poppins text-base sm:text-lg'>{option}</p>
        </div>
    );
};

export default QuizOption;