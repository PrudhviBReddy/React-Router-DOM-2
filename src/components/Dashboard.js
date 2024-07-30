import React from 'react'
import TopNavigation from './TopNavigation'
import { useLocation } from 'react-router-dom'

function Dashboard() {
    let loc = useLocation();
    console.log(loc);
  return (
    <div className='App'>
        <TopNavigation/>
        <h2>Dashboard</h2>
        <h2>{loc && loc.state && loc.state.msg ? loc.state.msg : "ERROR"}</h2>
    </div>
  )
}

export default Dashboard 