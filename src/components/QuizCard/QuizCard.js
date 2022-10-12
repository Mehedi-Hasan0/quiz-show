import React, { useState } from 'react';
import QuizOption from './QuizOption/QuizOption';
import view from '../../assets/view.png';
import hidden from '../../assets/hidden.png'

const QuizCard = ({ quizData }) => {
    const { options, question, correctAnswer } = quizData;
    const [toggle, setToggle] = useState(false)

    return (
        <div className=' p-5 my-8 shadow-lg bg-blue-50 sm:max-w-4xl w-10/12 mx-auto'>
            <div className=' flex flex-row justify-between items-center mb-6'>
                <h2 className='font-poppins font-medium text-gray-600 text-2xl '>{question}</h2>
                <img className=' cursor-pointer' onClick={() => setToggle((prev => !prev))} src={toggle ? hidden : view} alt="eye" />
                <div className={`${toggle ? 'block' : 'hidden'} top-0 relative p-2 shadow-lg bg-white`}>
                    <p>{correctAnswer}</p>
                </div>
            </div>
            <div>
                {
                    options.map(option => <QuizOption
                        option={option}
                        correctAnswer={correctAnswer}
                    ></QuizOption>)
                }
            </div>
        </div>
    );
};

export default QuizCard;