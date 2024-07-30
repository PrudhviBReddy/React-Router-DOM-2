import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='App'>
    <form>
        <h2>SIGNUP</h2>
        <div>
            <label>First Name</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Last Name</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Email</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Number</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Mobile No.</label>
            <input type="text"></input>
        </div>
        <div>
            <label>Profile Pic</label>
            <input type="text"></input>
        </div>
        <button type="button">Login</button>
    </form>
    <br></br>
    <Link to="/">Login</Link>
</div>
  )
}

export default Signup