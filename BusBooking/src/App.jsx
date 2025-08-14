import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './assets/componenets/Navbar'
import about from './assets/componenets/About'
import Home from './assets/componenets/Home'
import Contact from './assets/componenets/Home'
import Login from './assets/componenets/Logoin'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <Home/>
    },
    {
      path:"/Login",
      element:<login/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    },
  ])

  return (
   <div className="conatiner">
    <Navbar/>
   </div>
  )
}

export default App
