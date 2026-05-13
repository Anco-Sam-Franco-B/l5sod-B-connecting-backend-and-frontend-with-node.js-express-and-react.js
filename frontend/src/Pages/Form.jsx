import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Form() {

  const navigate=useNavigate()
  const [formData, setFormData]=useState({
    fname: '',
    lname: '',
    email: '',
    phone: ''
  })

  const handleSave=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/create-user', formData)
    .then(res=>{
      alert(res.data.message)
      setFormData({
        fname: '',
        lname: '',
        email: '',
        phone: ''
      })
      navigate('/')
    })
    .catch(err=>{
      alert(err.response.data.errorMessage || err.response.data.message)
      console.log(err)
    })
  }

  return (
    <div>
      <div>
        <h1>Create new user</h1>
        <form>
            <input type="text" value={formData.fname} onChange={(e)=>setFormData({...formData, fname: e.target.value})} name='fname' placeholder='Firstname' />
            <input type="text" value={formData.lname} onChange={(e)=>setFormData({...formData, lname: e.target.value})} name='lname' placeholder='lastname' />
            <input type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} name='email' placeholder='Email' />
            <input type="text" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} name='phone' placeholder='Phone number' />
            <button onClick={handleSave}>Save</button>
        </form>
      </div>
    </div>
  )
}

export default Form