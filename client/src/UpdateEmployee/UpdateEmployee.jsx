import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style1 from '../AddEmployee/AddEmployee.module.css'
import { useNavigate } from 'react-router-dom'

const UpdateEmployee = () => {
  let navigate = useNavigate()

  const [empdata, setEmpData] = useState({fn:"", ln:"", age:"", number:"", email:"", address:""})

  let updateEmpData = ({target:{name,value}}) => {
    setEmpData({...empdata, [name]:value})
  }
  let getEmpData = async () => {
    let {data:{data}} = await axios.get(`http://localhost:4500/api/student/getSingleStudent/${localStorage.getItem("eid")}`)
    setEmpData(data)
    console.log(data)
  }
  let updateEmployeeData = async (e) => {
    e.preventDefault()
    let {data} = await axios.put(`http://localhost:4500/api/student/updateStudent/${localStorage.getItem("eid")}`, empdata)
    console.log(data)
    navigate("/emplist")
  }
  

  useEffect(()=>{
    getEmpData()
  }, [])


  return (
    <div className={Style1.formContainer}>
      <form action="" onSubmit={updateEmployeeData}>
        <h2>Update Employee Form</h2>
        <div>
          <input
          type="text"
          name='fn'
          value={empdata.fn}
          placeholder='Enter your first name'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <input
          type="text"
          name='ln'
          value={empdata.ln}
          placeholder='Enter your last name'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <input
          type="number"
          name='age'
          value={empdata.age}
          placeholder='Enter your age'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <input
          type="tel"
          name='number'
          value={empdata.number}
          placeholder='Enter your number'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <input
          type="email"
          name='email'
          value={empdata.email}
          placeholder='Enter your email'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <input
          type="text"
          name='address'
          value={empdata.address}
          placeholder='Enter your address'
          onChange={updateEmpData}
          />
        </div>
        <div>
          <section>
            <button className={Style1.submitBtn} type='submit'>Update</button>
          </section>
        </div>
      </form>
    </div>
  )
}

export default UpdateEmployee
