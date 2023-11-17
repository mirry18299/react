import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import RickAndMorty from './components/RickAndMorty.jsx'
import User from './components/User.jsx'

  const routes =createBrowserRouter([
    {
      path: '/',
      element: <App/>
    },
    {
      path: '/rickandmorty',
      element: <RickAndMorty/>
    },
    //dynamic route
    {
      path: '/user/:id',
      element: <User />
    }
  ])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
