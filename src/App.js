import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import TopicsQuiz from './components/TopicsQuiz/TopicsQuiz';
import Main from './layouts/Main';

// for toast 
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async() =>{
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/topics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Home></Home>
        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/topics/:topicsId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`)
          },
          element: <TopicsQuiz></TopicsQuiz>
        },
        
      ]
    },
    {
      path: '*',
      element: <div>Route is not Correct! <br />
      <Link>Click Here</Link></div>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}>

      </RouterProvider>
    </div>
  );
}

export default App;
