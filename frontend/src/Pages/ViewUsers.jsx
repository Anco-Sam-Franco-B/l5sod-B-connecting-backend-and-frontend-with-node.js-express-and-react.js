import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ViewUsers() {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/users')
        .then(res=>{
            setUsers(res.data.result)
        })
        .catch(err=>{
            console.log(err.response.data.errorMessage)
        })
    }, [])

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
                    </tr>
                </thead>
                
            </table>
        </div>
    </div>
  )
}

export default ViewUsers