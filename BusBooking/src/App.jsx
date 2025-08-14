import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './assets/componenets/Navbar'

function App() {
  const router = createBrowserRouter([
    {
      paht: "/",
      element : "<Home>"
    },
    {},
  ])

  return (
   <div className="conatiner">
    <Navbar/>
   </div>
  )
}

export default App
