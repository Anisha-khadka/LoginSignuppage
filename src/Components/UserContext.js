import React, { createContext, useState } from 'react'


const UserContext= createContext();
export const UserProvider=({children})=> {
    const [userData, setUserData] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const addtocart =(item)=>{
      setCartItems([...cartItems,item]);
    }
  return (
   
       <UserContext.Provider value={{ userData, setUserData, cartItems, addtocart }}>
      {children}
    </UserContext.Provider>
   
  );
};

export default UserContext;