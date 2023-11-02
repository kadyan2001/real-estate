
import React, { useState } from 'react'
import axios from 'axios';

import "./login.css"
import { Link, useNavigate } from 'react-router-dom';
const AuthLAnding = () => {
    
    const [sidebar,setsidebar] = useState(false)
    const [email,setEmail] =useState('')
    const [password,setPassword] =useState('')
    const navigate = useNavigate()

    const handleSubmit = async()=>{
      e.preventDefault()
       const user = await fetch('http://localhost:8000/api/signin',{method:'POST',
       headers:{
        "Content-Type":'application/json'
       },
       body:JSON.stringify({
        email,password
       })})
       console.log(user)
       if(user) navigate('/login')
    }


  return (
    <div className="container">
      <div className="loginmain">
        <Link to={"/"}  className="logomain">
        <img src="./logo.png" alt="logo" width={100} />
        </Link>
        <div className="logocontainer">
          <h1 className="">
            Board.
          </h1>
        </div>

        {/* <div className="socialicons">
          {socialIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt="icon"
              className="w-[42px] h-[41px] hover:scale-[1.1] ease-in cursor-pointer"
            />
          ))}
        </div> */}
        <div className="leftside">
          {/* <Image
            src={Images.leftSide}
            alt="leftSide"
            className="w-full h-full object-fill"
          /> */}
        </div>
      </div>

      <Link to={"/"} className="sidebarcontainer">
        <h1 className="">
          LOGO
        </h1>

        <div className="sidebarlogo">
          <h1 className="">
            Board.
          </h1>
        </div>

        <div className='closeicon' onClick={() => setsidebar(!sidebar)}>
          {
            sidebar? <img src={"close.svg"} alt="close"/>:
          <h1 className="">
            Links
          </h1>
          } 
        </div>
        {sidebar && (
          <div className={`${sidebar?'translate-y-0':'translate-y-[100%]'} absolute right-0 left-0 bottom-0 h-20 bg-[#4285F4] w-full z-[100] m-auto flex items-center justify-center ease-out duration-[20000ms]`}>
            {/* <div className="grid grid-cols-4 md:grid-cols-4 z-10 w-full mx-auto place-items-center">
              {socialIcons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="icon"
                  className="w-[42px] h-[41px] hover:scale-[1.1] ease-in cursor-pointer"
                />
              ))} */}
            {/* </div> */}
          </div>
        )}
      </Link>
      <div className="rightcontainer">
        <div className="rightcontainermain">
          <h1 className="">
            Sign In
          </h1>
          <h3 className="">
            Sign in to your account
          </h3>

          <div className="signinoptions">
            <button
              className="signinbutton"
              
            >
              {/* <Image src={Images.google} alt="google" /> */}
              <p className="">
                Sign in with Google
              </p>
            </button>
            <button className="signinbutton">
              {/* <Image src={Images.apple} alt="apple" /> */}
              <p className="">
                Sign in with Apple
              </p>
            </button>
          </div>
          <div className="formcontainer">
            <form
              action=""
              method="post"
              className="loginform"
            >
              <div className="inputdiv">
                <label htmlFor="email" className="">
                  Email address
                </label>
                <input
                  type={"email"}
                  required
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  className=""
                />
              </div>
              <div className="inputdiv">
                <label
                  htmlFor="password"
                  className=""
                >
                  Password
                </label>
                <input
                  type={"password"}
                  required
                  className=""
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <p className="forgotdiv">
                Forgot password?
              </p>
              <button
                type="submit"
                className="submitdiv"
                onClick={()=>handleSubmit()}
              >
                Sign In
              </button>
            </form>

            <h3 className="registerdiv">
              Don’t have an account?{" "}
              <span className="text-link cursor-pointer">Register here</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLAnding