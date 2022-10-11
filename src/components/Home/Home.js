import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainBody from '../MainBody/MainBody';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main>
                <MainBody></MainBody>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;