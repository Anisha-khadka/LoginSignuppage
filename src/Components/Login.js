import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Login() {
  return (
    <>
    <div className="containers">
       <div className="signup">
          <h1>Login</h1>
          <div className="form1">      
           <div className="input">
           <i class="fa-solid fa-envelope"></i>
           <input type='email' placeholder='Email id'/>
           </div>
           <div className="input">
           <i class="fa-solid fa-lock"></i>
           <input type='password' placeholder='Password'/>
           </div>
           <div className="lost">
            <p>Lost password? Click here!</p>
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
