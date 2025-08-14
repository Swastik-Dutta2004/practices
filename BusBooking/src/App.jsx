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
      element : <Home/>
    },
    {
      path:"/Login",
      element:<Login/>
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
    <div>
      <RouterProvider router={router}/>
      <Navbar/>
   </div>
  )
}

export default App
