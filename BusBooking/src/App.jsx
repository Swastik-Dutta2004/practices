import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './componenets/Navbar'
import About from './componenets/About'
import Home from './componenets/Home'
import Contact from './componenets/Contact'
import Login from './componenets/Logoin'

function App() {
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

        <div className="ticket mt-15 flex flex-col items-center">
          <div className="ride bg-white p-6 rounded-xl max-w-md w-full">
            <input
              type="text"
              placeholder="From"
              className="w-full border p-3 mb-4 rounded-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="To"
              className="w-full border p-3 rounded-lg focus:outline-none"
            />
          </div>

          <button className="bg-amber-600 border-2 rounded-3xl w-52 h-10 font-bold mt-4">
            Search Bus
          </button>
        </div>

      </div>

    </div>

  )
}

export default App
