import React from 'react'
import "../style.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Signup() {
  return (
    <>
    <div className="containers">
       <div className="signup">
          <h1>Sign Up</h1>
          <div className="form1">
           <div className="input">
           <i class="fa-solid fa-user"></i>
           <input type='text' placeholder='Name'/>
           </div>
           <div className="input">
           <i class="fa-solid fa-envelope"></i>
           <input type='email' placeholder='Email id'/>
           </div>
           <div className="input">
           <i class="fa-solid fa-lock"></i>
           <input type='password' placeholder='Password'/>
           </div>
           <div className="button">
           <Link to="/signup"> <button className='btn1'>Sign Up</button></Link>
           <Link to="/login"><button className='btn2'>Login</button></Link>
           </div>
          </div>
       </div>
    </div>
    </>
  )
}

