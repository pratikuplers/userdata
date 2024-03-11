import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav style={{textAlign: 'center', padding:'20px'}}>
        <Link to="/ " style={{textAlign: 'center', padding:'20px'}}>Home</Link>
        <Link to="userlist" style={{textAlign: 'center', padding:'20px'}}>Employees</Link>
    </nav>
  )
}

export default Navigation;