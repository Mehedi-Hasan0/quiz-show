import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainBody from '../MainBody/MainBody';

const Home = () => {
    const quizData = useLoaderData();

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                {
                    quizData.data.map(quiz => <MainBody
                        key={quiz.id}
                        quiz={quiz}
                    ></MainBody>)
                }
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;