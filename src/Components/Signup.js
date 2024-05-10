import React, { useState } from 'react'
import "../style.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Validation from './Validation'
export default function Signup() {
   const[values,setValues]=useState({
    name:'',
    email:'',
    password:''


   })
   const [errors,setErrors]=useState({})
const handleSubmit=(e)=>{
  e.preventDefault();
 setErrors(Validation(values));
}
  return (
    <>
    <div className="containers">
       <div className="signup">
          <h1>Sign Up</h1>
          <div className="form1" onSubmit={handleSubmit}>
           <div className="input">
           <i class="fa-solid fa-user"></i>
           <input type='text' placeholder='Name' name='name' value={values.name} onChange={(e)=>{setValues(e.target.value)}}/>
           {errors.email && <p>{errors.email}</p>}
           </div>
           
           <div className="input">
           <i class="fa-solid fa-envelope"></i>
           <input type='email' placeholder='Email id' name='email' value={values.email}  onChange={(e)=>{setValues(e.target.value)}}/>
           {errors.email && <p>{errors.email}</p>}
           </div>
           
           <div className="input">
           <i class="fa-solid fa-lock"></i>
           <input type='password' placeholder='Password' name='password' value={values.password} onChange={(e)=>{setValues(e.target.value)}}/>
           {errors.email && <p>{errors.email}</p>}
           </div>
           
           <div className="button">
            <button className='btn1' type='submit' >Sign Up</button>
           <Link to="/" ><button className='btn2'>Login</button></Link>
           </div>
          </div>
       </div>
    </div>
    </>
  )
}

