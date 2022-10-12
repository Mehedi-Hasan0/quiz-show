import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizOption = ({ option, correctAnswer }) => {
    const check = () => {
        if (correctAnswer === option) {
            toast.success("Right Answer! ")
        } else if (correctAnswer !== option) {
            toast.error("Wrong Answer!")
        }
    }

    return (
        <div className=' p-2 my-3 border-2 border-sky-200  sm:w-1/2 w-3/4 mx-auto hover:bg-sky-200 transition-colors ease-in'>
            <p onClick={check} className='cursor-pointer font-poppins text-base sm:text-lg'>{option}</p>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default QuizOption;