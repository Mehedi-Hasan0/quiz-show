import React from 'react';
import QuizOption from './QuizOption/QuizOption';

const QuizCard = ({ quizData }) => {
    const { options, question, correctAnswer } = quizData;

    return (
        <div className=' p-5 my-8 shadow-lg bg-blue-50 sm:max-w-3xl w-10/12 mx-auto'>
            <h2 className='font-poppins font-medium leading-7 text-gray-600 text-2xl mb-6'>{question}</h2>
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