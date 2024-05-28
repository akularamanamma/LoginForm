import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Style2 from './EmployeeList.module.css'

const EmployeeList = () => {

  let [emplist, setEmplist] = useState([])

  let navigate = useNavigate()

  let empData = async () =>{
    let {data} = await axios.get("http://localhost:4500/api/student/getStudents")
    setEmplist(data)
    // console.log(data)
  }

  let viewEmployee = (eid) => {
    navigate(`/emp/${eid}`)
  }
  let navigateToMainComponent = (eid) => {
    localStorage.setItem("eid", eid)
    navigate("/update")
  }
  let deleteEmp = async (eid)=>{
    await axios.delete(`http://localhost:4500/api/student/deleteStudent/${eid}`)
    empData()
  }

  useEffect(()=>{
    empData()
  },[])

  return (
    <div className={Style2.empcont}>
      <h1>Employee Lists</h1>
      <div className={Style2.cardcont}>
        {emplist.data?.map((m)=>{
          return (
            <React.Fragment key={m._id} >
              <section className={Style2.card}>
                <h4>First Name: {m.fn}</h4>
                <h4>Last Name: {m.ln}</h4>
                <h4>Email: {m.email}</h4>
                <h4>Number: {m.number}</h4>
                <h4>Age: {m.age}</h4>
                <h4>Address: {m.address}</h4>
                <p>
                <button onClick={()=>{viewEmployee(m._id)}}>View</button>
                <button onClick={()=>{navigateToMainComponent(m._id)}}>Update</button>
                <button onClick={()=>{deleteEmp(m._id)}}>Delete</button>
                </p>
              </section>
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default EmployeeList
