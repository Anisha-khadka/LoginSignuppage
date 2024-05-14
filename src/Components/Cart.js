import React from "react";
import { useContext } from "react";
import UserContext from "./UserContext";

export default function Cart() {
  const { cartItems } = useContext(UserContext);
  return (
    <>
      <h1>Cart Items</h1>
      <div className="coverpage">
        {cartItems.map((item, index) => (
          <div className="shape" key={index}>
            <img src={item.img} alt="" />

            <div className="shape1">
              <h2>{item.title}</h2>
              <p>{item.des}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
