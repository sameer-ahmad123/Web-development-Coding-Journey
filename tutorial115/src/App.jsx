import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const App = () => {
  const router = createBrowserRouter ([
    {
      path : '/',
      element : <Login/>
    },
    {
      path : '/home',
      element : <Home/>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App