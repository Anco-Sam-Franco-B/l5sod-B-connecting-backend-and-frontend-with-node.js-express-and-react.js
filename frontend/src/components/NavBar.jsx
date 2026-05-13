import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='w-full p-2 bg-green-500 flex items-center justify-between text-white'>
        <h1>SMS Project</h1>
        <nav className='flex gap-3'>
            <Link to='/'>Users</Link>
            <Link to='/create'>Create</Link>
        </nav>
    </div>
  )
}

export default NavBar