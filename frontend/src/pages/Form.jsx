import React, { useState } from 'react'

function Form() {
    const [formData, setFormData]=useState({
        name: '',
        age: ''
    })
    const [userData, setUserData]=useState([]) //Database In []
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUserData([...userData, formData])
        setFormData({
            name: '',
            age: ''
        })
    }
  return (
    <div className='p-2 flex gap-3 w-full h-screen'>
        <div className='border-2 h-[270px] border-black flex flex-col gap-2 p-7 w-[350px]'>
            <h1 className='font-bold text-3xl'>Form Input</h1>
            <form className='w-full flex flex-col gap-2 mt-2'>
                <input className='border-2 border-black p-2' type="text" value={formData.name} onChange={e=>setFormData({...formData, name: e.target.value})} placeholder='Enter Name' />
                <input className='border-2 border-black p-2' type="number" value={formData.age} onChange={e=>setFormData({...formData, age: e.target.value})} placeholder='Enter Age' />
                <button className='bg-black text-white p-2' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
        <div className='w-full'>
            <table className='w-full'>
                <thead>
                    <tr className='bg-black text-white'>
                        <th className='p-2'>ID</th>
                        <th className='p-2'>Name</th>
                        <th className='p-2'>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      userData.map((data, index)=>(
                        <tr className='even:bg-gray-100'>
                            <td className='p-2'>{index + 1}</td>
                            <td className='p-2'>{data.name}</td>
                            <td className='p-2'>{data.age}</td>
                        </tr>
                      ))  
                    }
                </tbody>
            </table>
        </div>
    </div>
  )

}

export default Form