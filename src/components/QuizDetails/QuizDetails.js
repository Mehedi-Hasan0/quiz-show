import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCard from '../QuizCard/QuizCard';

const QuizDetails = () => {
    const quizDetails = useLoaderData();
    console.log(quizDetails);
    return (
        <div>
            <h1 className=' mt-10'>Quiz Of {quizDetails.data.name}</h1>
            {
                quizDetails.data.questions.map(quizData => <QuizCard
                    key={quizData.id}
                    quizData={quizData}
                ></QuizCard>)
            }
        </div>
    );
};

export default QuizDetails;