import axios from 'axios'
import React, { useState } from 'react'
import Style1 from './AddEmployee.module.css'

const AddEmployee = () => {
  const [empdata, setEmpData] = useState({fn:"", ln:"", age:"", number:"", email:"", address:""})

  let updateEmpData = ({target:{name,value}}) => {
    setEmpData({...empdata, [name]:value})
  }

  let addEmpdata = async(e) => {
    e.preventDefault();
    let sendData = await axios.post("http://localhost:4500/api/student/addStudent", empdata)
    console.log(sendData)
    setEmpData({fn:"", ln:"", age:"", number:"", email:"", address:""})
  }
  let resetData = () => {
    setEmpData({fn:"", ln:"", age:"", number:"", email:"", address:""})
  }

  return (
    <div className={Style1.formContainer}>
      <form action="" onSubmit={addEmpdata}>
        <h2>SignUp Form</h2>
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
            <button className={Style1.submitBtn} type='submit'>Signup</button>
            <button className={Style1.resetBtn} type='reset' onClick={resetData}>Cancel</button>
          </section>
        </div>
      </form>
    </div>
  )
}

export default AddEmployee
