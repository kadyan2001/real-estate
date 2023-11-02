import React, { useContext, useEffect,useState } from "react";
import "./login.css";
import {  redirect, useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Loader } from "./Loader";

export const Loginform = () => {
  const navigate = useNavigate()
    // const[redirect , setRedirect] = useState(fale);
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')

  const Login = (e) => {
    e.preventDefault();
    // console.log(message);
    fetch("http://localhost:8000/api/signin",{
      method:"POST",
      body: JSON.stringify({email:email,password:password})
    }).then((res)=>{
      console.log(res)
    })
  }

  const homeCome = () => {
    navigate("/");
  };
  const sign1 = () => {
    navigate("/signup");
  };

  // console.log('loader login page ', loading)

  return (
    <>
      {/* <Navbar/> */}

      <div className="form-container">
      <div className="loader-2">

         {/* <Loader2/> */}
       {/* { loading && <Loader/>} */}
       {/* { loading && 'loading....'} */}
        </div>
        <div className="close-btn-container">
          <AiOutlineCloseCircle className="close-btn" onClick={homeCome} />
        </div>
        <div className="login-form-container">
          <form className="login-form" action="">
            {/* <input className="name-form"type="text"placeholder='Enter your name' /> */}
            <h2>Login</h2>
            <div className="input_container">
              <input
                className="form-input"
                type="email"
                placeholder="Enter your email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="Email">Email</label>
            </div>
            <div className="input_container">
              <input
                className="form-input"
                type="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="logform-btn-container">
              <button
                onClick={(e) => Login(e)}
                className="loginform-btn"
                type="submit"
              >
                Login
              </button>
            </div>
            <div className="home-btn-container">
              <button className="home-btn" onClick={sign1}>
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Loginform