import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import SingleUser from './components/SingleUser/SingleUser';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        path: 'about',
        element: <About></About>,
        loader: () => fetch('https://dummyjson.com/users')

      },
      {
        path: 'user/:userId',
        element: <SingleUser></SingleUser>,
        loader: ({ params }) => fetch(`https://dummyjson.com/users/${params.userId}`)
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }, {
        path: '*',
        element: <div> 404 error</div>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
