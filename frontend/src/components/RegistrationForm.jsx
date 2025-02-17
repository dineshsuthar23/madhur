import React, { useState } from 'react'
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [user, setUser] = useState({
    name: "",
    pass: "",
    email: "",
    contact: ""
  })
  const userReg = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
    //       [    1,2,3,4,5]
  }
  const formHandling = (e) => {
    e.preventDefault()
    console.log(user)

    setUser({
      name: "",
      pass: "",
      email: "",
      contact: ""
    })
  }
  const style = {
    colora:{
      color:'red'
    },
    colorb:{
      color:'green'
    }
  }
  return (
    <>
      <form onSubmit={formHandling}>
        <input type="text" value={user.name} name='name' onChange={userReg} placeholder="name" required />   <br />
        <input type="text" value={user.pass} name='pass' onChange={userReg} placeholder="password" required /> <br />
        <input type="text" value={user.email} name='email' onChange={userReg} placeholder="email" required /> <br />
        <input type="text" value={user.contact} name='contact' onChange={userReg} placeholder="contact" required /> <br />

        {
          user.name&&user.pass&&user.email&&user.contact
            ? <div style={style.colorb}>click submit</div>
            : <div style={style.colora}>fill all fields</div>
        }
        
        <button>Submit</button>
      </form>
    </>
  )
}

export default RegistrationForm
