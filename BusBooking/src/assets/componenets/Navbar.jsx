import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">
            <img className='' src="buslogo.svg" alt="" />
            <span className="name">NextBus</span>
        </div>

        <div className="features">
            <a href=""><li>Home</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>About</li></a>
        </div>
    </nav>
  )
}

export default Navbar