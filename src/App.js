import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistic from './components/Statistic/Statistic';
import Main from './layout/Main';
import error from './assets/error.svg'
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiz></Quiz>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]
    },
    {
      path: '/statistic',
      element: <Statistic></Statistic>
    },
    {
      path: '*',
      element: <div>
        <h1 className='font-poppins font-medium text-4xl sm:text-5xl mx-auto mt-5'>Page not found <span className=' text-blue-400'> :(</span></h1>
        <img className='w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] mx-auto' src={error} alt="error" /></div>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
