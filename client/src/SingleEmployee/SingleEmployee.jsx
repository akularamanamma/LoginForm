import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Style3 from './SingleEmployee.module.css'

const SingleEmployee = () => {
  let [empdata, setEmpdata] = useState([])
  let {eid} = useParams()

  let getEmpData = async () => {
    let {data:{data}} = await axios.get(`http://localhost:4500/api/student/getSingleStudent/${eid}`)
    console.log(data)
    setEmpdata(data)
  }
  useEffect(()=>{
    getEmpData()
  },[])

  return (
    <div className={Style3.singleEmp}>
      <h1>Employee Data</h1>
     <div>
      <h3>First Name : {empdata.fn}</h3>
      <h3>Last Name : {empdata.ln}</h3>
      <h3>Age : {empdata.age}</h3>
      <h3>Email id : {empdata.email}</h3>
      <h3>Mobile Number : {empdata.number}</h3>
      <h3>Address : {empdata.address}</h3>
     </div>
    </div>
  )
}

export default SingleEmployee
