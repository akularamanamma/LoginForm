import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './../Navbar/Navbar';
import AddEmployee from './../AddEmployee/AddEmployee';
import EmployeeList from './../EmployeeList/EmployeeList';
import UpdateEmployee from './../UpdateEmployee/UpdateEmployee';
import SingleEmployee from './../SingleEmployee/SingleEmployee';

const EmployeeRouter = () => {
  return (
    <section>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/add' element={<AddEmployee/>}/>
            <Route path='/emplist' element={<EmployeeList/>}/>
            <Route path='/update' element={<UpdateEmployee/>}/>
            <Route path='/emp/:eid' element={<SingleEmployee/>}/>
        </Routes>
      </Router>
    </section>
  )
}

export default EmployeeRouter
