import React from 'react'
import Category from './Category'
import Navbar from './Navbar'

export default function Main() {
  return (
    <>
    <Navbar/>
    <h1>BOOKSTORE</h1>
    <div className='cover'>
      {Category.map((d)=>(
        <div className="shape">
       <img src={d.img} alt=''/>
       <div className="shape1">
        <h2>{d.title}</h2>
        <p>{d.des}</p>
        <p>{d.price}</p>
       </div>
       </div>
      ))}
    </div>
    </>
  )
}
