import React from 'react'
import { Link } from 'react-router-dom'
import '../../src/Global.css'
import Style from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={Style.navbar}>
      <div>
        <h1>
            <Link to='/add'>AddEmployee</Link>
        </h1>
      </div>
      <div>
        <h1>
            <Link to='/emplist'>EmployeeList</Link>
        </h1>
      </div>
    </nav>
  )
}

export default Navbar
