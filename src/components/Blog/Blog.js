import React from 'react';

const Blog = () => {
    return (
        <div className='font-poppins'>
            <div className=' w-4/5 my-10 mx-auto shadow-md bg-slate-50 p-5 rounded-xl'>
                <h2 className=' text-2xl font-medium my-2 text-[#262A4E]'>What is the purpose of React router?</h2>
                <p className=' text-lg text-justify text-[#262A4E]'>Ans: React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className=' w-4/5 my-10 mx-auto shadow-md bg-slate-50 p-5'>
                <h2 className=' text-2xl font-medium my-2 text-[#262A4E]'>How does Context API works?</h2>
                <p className=' text-lg  text-justify text-[#262A4E]'>Ans: The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className=' w-4/5 my-10 mx-auto shadow-md bg-slate-50 p-5'>
                <h2 className=' text-2xl font-medium my-2 text-[#262A4E]'>What is useRef?</h2>
                <p className=' text-lg text-justify text-[#262A4E]'>Ans: Essentially, useRef is like a “box” that can hold a mutable value in its .current property.Refs primarily as a way to access the DOM. If you pass a ref object to React with ref , React will set its .current property to the corresponding DOM node whenever that node changes.</p>
            </div>

        </div>
    );
};

export default Blog;