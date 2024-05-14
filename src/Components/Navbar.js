import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar({cartCount}) {
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
       <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i></Link>
      <sup><span className='quantity' style={{color:"red",fontSize:"17px"}}>{cartCount}</span></sup> 
        <Link to="/"><button >Logout</button></Link>
    </div>
   </div>
   </>
  )
}
