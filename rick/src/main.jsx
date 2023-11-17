import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import RickAndMorty from './components/RickAndMorty.jsx'
import Episode from './components/Episode.jsx'

const routes =createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/rickandmorty',
    element: <RickAndMorty/>
  },
  {
     path: '/episode/:id',
     element: <Episode />
}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <RouterProvider router={routes} />
</React.StrictMode>,
)
