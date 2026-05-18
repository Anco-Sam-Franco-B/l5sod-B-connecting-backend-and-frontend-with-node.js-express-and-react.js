import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function ViewUsers() {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>{
            setUsers(res.data.result)
        })
        .catch(err=>{
            console.log(err.response)
            alert("Failed to fetch users")
        })
    }, [users])

    const handleDelete=(id)=>{
            axios.delete(`http://localhost:5000/delete/${id}`)
            .then(res=>{
                alert(res.data.message)
                setUsers(users.filter(user=> user.id !== id))
            })
            .catch(err=>{
                console.log(err)
                alert(err.response.data.errorMessage || err.response.data.message)
            })
    }

  return (
    <div>
        <div className="">
            <h1>Users List</h1>
        </div>
        <div className="">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Address</th>
                        <th>Phone Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((data, index)=>(
                           <tr key={index}>
                                <td>{index +1}</td>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td><button onClick={()=>handleDelete(data.id)}>Delete</button></td>
                           </tr> 
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewUsers