import React from 'react'
import { NavLink } from 'react-router-dom'

function TopNavigation() {
  return (
    <nav>
       
        <NavLink style={(obj)=>{
            console.log(obj)
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"};
            }
        }} to="/dashboard">Dashboard</NavLink>
        <NavLink style={(obj)=>{
            console.log(obj)
            if(obj.isActive == true){
                return{backgroundColor:"green",color:"white"};
            }
        }} to="/contact">Contact</NavLink>
        <NavLink style={(obj)=>{
           console.log(obj)
           if(obj.isActive){
                return{backgroundColor:"green",color:"white"};
           }
        }} to="/details">Details</NavLink>
        <NavLink to="/">Signout</NavLink>
    </nav>
  )
}

export default TopNavigation