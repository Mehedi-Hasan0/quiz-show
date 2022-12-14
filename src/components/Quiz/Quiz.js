import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MainBody from '../MainBody/MainBody';


const Quiz = () => {
    const quizData = useLoaderData();
    return (
        <div className=' my-16'>
            <p className='font-poppins text-xl text-[#2370C8] font-medium'>TOP QUIZ</p>
            <h1 className='font-poppins text-4xl sm:text-5xl font-semibold text-[#262A4E]'>Test Your Knowledge!</h1>
            <div className='flex sm:flex-row sm:justify-around md:flex-wrap lg:flex-wrap lg:my-3 md:my-3 justify-between flex-col w-11/12 mx-auto my-4'>
                {
                    quizData.data.map(quiz => <MainBody
                        key={quiz.id}
                        quiz={quiz}
                    ></MainBody>)
                }
            </div>
        </div>
    );
};

export default Quiz;