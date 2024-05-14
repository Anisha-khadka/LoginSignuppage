import React, { useContext} from 'react'
import Category from './Category'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import UserContext from './UserContext';



export default function Main() {
 const history =useHistory("");
 const {addtocart}=useContext(UserContext);

  const cartsuccess=(item)=>{
    addtocart(item);
    history.push("/cart");
  
    
  }
  return (
    <>
    <Navbar cartCount={addtocart.length}/>
    <h1>BOOKSTORE</h1>
    <div className='cover'>
      {Category.map((d,index)=>(
        <div className="shape" key={index}>
       <img src={d.img} alt=''/>
       <button onClick={() => cartsuccess(d)} >Add to cart</button>
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
