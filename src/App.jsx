// import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Movie } from './pages/Movie';
import AppLayout from './components/layout/AppLayout';
import { ErrorPage } from './pages/ErrorPage';
import { getMoviesData } from './api/GetAPI';
import { MovieDetails } from './UI/MovieDetails';
import { getMovieDetails } from './api/GetMovieDetails';
import { Contact  } from './pages/Contact';
import { contactData } from './components/layout/ContactData';

const App = () => {

  //step 1 - create browser router
  const router = createBrowserRouter([
    // step2 - then add different paths also add routes (element) component 

    //Uncaught Error: Absolute route path "/" nested under path "/  " is not valid. An absolute child route path must start with the combined path of all its parent routes.
    //the error to show the not spacing in '' path
    {
      path: '/',
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/movie',
          element: <Movie />,
          loader: getMoviesData,

        },
        {
          path: '/movie/:movieID',
          element: <MovieDetails />,
          loader: getMovieDetails,
        },
        {
          path: '/contact',
          element: <Contact />,
          // eslint-disable-next-line no-undef
          action: contactData,
        }

      ]
    },

  ]);


  //this is created with helper function
  //  const router = createBrowserRouter(
  //   createRoutesFromElements(

  //     <Route>
  //       <Route path='/' element= {< Home/>}/>
  //       <Route path='/about' element= {<About />}/>
  //       <Route path='/contact' element= {< Contact/>}/>
  //       <Route path='/movie' element= {< Movie/>}/>
  //     </Route>
  //   )
  //  );

  //remember if you any routes implement so return is very important
  return <RouterProvider router={router} />
}
export default App;
