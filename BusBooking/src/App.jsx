import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import About from './componenets/About'
import Home from './componenets/Home'
import Contact from './componenets/Contact'
import Login from './componenets/Logoin'
import Calender from './componenets/Calender'

function App() {

  const [Fromlocation, setFromlocation] = useState("")
  const [Tolocation, setTolocation] = useState("")

  const exchange = () => {
    let temp = Fromlocation
    setFromlocation(Tolocation)
    setTolocation(temp)
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Login",
      element: <Login />
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/about",
      element: <About />
    },
  ])

  return (
    <div data-theme="synthwave">
      <Navbar/>

      <div className='w-full min-h-screen flex flex-col justify-center items-center'>
        <Calender/>
      </div>
    </div>

  )
}

export default App
