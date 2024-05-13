import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UserContext from "./UserContext";

export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState("");
  const { userData } = useContext(UserContext);
  const history = useHistory();
  const signup = () => {
    history.push("/signup");
  };
  const login = () => {
    let errors = "";
    if (email === "") errors += "Email is required\n";
    if (password === "") errors += "Password is required\n";
    if (Object.keys(errors).length === 0) {
      if (
        userData &&
        userData.email === email &&
        userData.password === password
      ) {
        history.push("/main");
      } else {
        alert("Invalid email or password");
      }
    } else {
      seterrors(errors);
    }
  };

  return (
    <>
      <div className="containers">
        <div className="signup">
          <h1>Login</h1>
          <div className="form1">
            <div className="input">
              <i class="fa-solid fa-envelope"></i>
              <input
                type="email"
                placeholder="Email id"
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
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              {errors.password && (
                <span className="error">{errors.password}</span>
              )}
            </div>
            <div className="lost">
              <p>Lost password? Click here!</p>
            </div>
            <div className="button">
              <button className="btn1" onClick={login}>
                Login
              </button>
              <button className="btn2" onClick={signup}>
                Signup
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}