import React from 'react';

const QuizCard = ({ quizData }) => {
    const { id, options, question, correctAnswer } = quizData;

    return (
        <div className=' p-5 mx-10 my-8 shadow-md bg-slate-100-'>
            <h2>{question}</h2>
            <div>
                {
                    options.map(option => <div className=' p-2 my-3 border-l-gray-300'>
                        <p>{option}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default QuizCard;