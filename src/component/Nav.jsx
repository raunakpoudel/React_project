import React from 'react'
import './Nav.css'
import Button from './Button'
const Nav = () => {
   
  return (
    <>
   <div id="navbar">
  <a href="#default" id="logo">CompanyLogo</a>
  <div id="navbar-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
    <Button
    name='sign in'
    color='blue'
    />
  </div>
</div>
    
    </>)
    
}

export default Nav