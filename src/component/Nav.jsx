import React from 'react'
import './Nav.css'
import { IoIosContact } from "react-icons/io";
const Nav = () => {
   
  return (
    <>
    <div>
   <div className="nav">
    <h2>logo</h2>
    <div className="nav2">
        <ul>
            <li> Home</li>
            <li> About Us</li>
            <li> Contact</li>
        </ul>
        

    </div>
    <div className="nav3">
    <IoIosContact fontSize={'2rem'}/>
    </div>
   </div>


    </div>
    
    
    </>
  )
}

export default Nav