import React, { useContext, useState } from "react";
import "../style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "./UserContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, setErrors] = useState({});
  const { setUserData } = useContext(UserContext);

  const history = useHistory();
  const login = () => {
    history.push("/");
  };
  const signup = (e) => {
    let errors = '';
    if (name === "") errors += "Name is required\n";
    if (email === "") errors+= "Email is required\n";
    if (password === "") errors += "Password is required";
    if (Object.keys(errors).length ===0) {
      setUserData({name,email,password});
      alert("Signin sucessfull")}
     else {
     setErrors(errors);
     alert(errors);
   }
  
      
  };

  return (
    <>
      <div className="containers">
        <div className="signup">
          <h1>Sign Up</h1>
          <div className="form1">
            <div className="input">
              <i class="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>

            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email id"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="input">
              <i class="fa-solid fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>

            <div className="button">
              <button className="btn1" onClick={signup}>
                Sign Up
              </button>
              <button className="btn2" onClick={login}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
