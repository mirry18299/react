import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
/*import store from "./redux/store";*/
import TodoList from './components/TodoList.jsx';
/*import { RouterProvider } from 'react-router-dom'*/

const routes =createBrowserRouter([
  {
  path: '/',
  element: <App />
  },
  {
  path: '/todolist',
  element: <TodoList />

  }
])

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes} /> 
  </React.StrictMode>,
  document.getElementById('root')
);

 