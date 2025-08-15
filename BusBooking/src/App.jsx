import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import About from './componenets/About'
import Home from './componenets/Home'
import Contact from './componenets/Contact'
import Login from './componenets/Logoin'

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
    <div className="relative bg-bus-pattern bg-cover bg-center min-h-screen">
      {/* Blur Overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-blue-900/30"></div>

      {/* Page Content */}
      <div className="relative z-10">
        <Navbar />
        <RouterProvider router={router} />
        <h1 className='text-white relative'>India's No. 1 online bus ticket booking site</h1>
        <div className="bg-image">
          <img className='w-full h-80' src="https://i.pinimg.com/1200x/7a/d7/7f/7ad77fdae977c55f86893ae07d879676.jpg" alt="" />
        </div>

        <div className="ticket mt-15 flex flex-col items-center w-full absolute top-50">
          <div className="ride bg-purple-200 p-6 rounded-xl w-80% flex gap-5">
            <div className="input flex flex-col items-center justify-center gap-3">
              <input
                type="text"
                placeholder="From"
                value={Fromlocation}
                onChange={(e) => setFromlocation(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none bg-purple-100"
              />

              <img className="" src="arrow.svg" alt="" onClick={exchange} />

              <input
                type="text"
                placeholder="To"
                value={Tolocation}
                onChange={(e) => setTolocation(e.target.value)}
                className="w-full border p-3 rounded-lg focus:outline-none bg-purple-100"
              />
            </div>

            <div className="others">
              <input
                type="text"
                placeholder="Calender"
                className="w-full border p-3 mb-4 rounded-lg focus:outline-none  bg-purple-100"
              />
              <input
                type="text"
                placeholder="Distance"
                className="w-full border p-3 mb-4 rounded-lg focus:outline-none  bg-purple-100"
              />
            </div>

          </div>

          <button className="bg-purple-800 text-white border-none rounded-3xl w-52 h-10 font-bold mt-4 hover:bg-purple-900 transition duration-200 ">
            Search Bus
          </button>
        </div>

      </div>

    </div>

  )
}

export default App
