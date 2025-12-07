import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from './components/layout/AppLayout'
import { Home } from './pages/Home'
import { Books } from './pages/Books'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
// import { getBooksData } from './api/GetAPI'
import { ErrorPage } from './pages/ErrorPage'

const App = () => {


  const router = createBrowserRouter([

    {

      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,

      children: [

        {

          path: '/',
          element: <Home />,
        },

        {
          path: '/books',
          element: <Books />,
          // loader: getBooksData,

        },

        {
          path: '/about',
          element: <About />
        },

        {
          path: '/contact',
          element: <Contact />
        }



      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />


    </>
  )
}

export default App