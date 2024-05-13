import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar() {
  return (
    
   <>
   <div className="navbar">
    <div className="navbarleft">
    <ul>
        <Link to="/main" className="links"><li>Home</li></Link>
        <Link to="/about" className="links"><li>About</li></Link>
        <Link to="/contact" className="links"><li>Contact</li></Link>
        
    </ul>
    </div>
    <div className="navbarright">
        <Link to="/"><button >Logout</button></Link>
    </div>
   </div>
   </>
  )
}
