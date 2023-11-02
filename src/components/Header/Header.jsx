import React, { useState } from 'react'
import './Header.css';
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler';
import { Link } from 'react-router-dom';

// for menu icon functioning in responsive

const Header = () => {
  const [menuOpened, setMenuOpened]=useState(false)

  const getMenuStyles=(menuOpened) =>{
    if(document.documentElement.clientWidth<=800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
   <section className="h-wrapper">
    <Link to={"/"} className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <OutsideClickHandler
        onOutsideClick={()=> {
          setMenuOpened(false)
        }}>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
            <a href="#residencies">Residencies</a>
            <a href="#value">Our Value</a>
            <Link to="/contact">Contact Us</Link>
            <a href="#getstarted">Get Started</a>
            <button className="button">
            {/* <a href="mailto:mankashkadian@gmail.com">Contact</a> */}
            <Link className='button' to={'/login'}>Login</Link>
            </button>
        </div>
      </OutsideClickHandler>
           
        <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
      <BiMenuAltRight size={30}/>
    </div>
    </Link>
   </section>
  )
}

export default Header
