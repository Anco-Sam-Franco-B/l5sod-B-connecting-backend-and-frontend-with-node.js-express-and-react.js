import React, { useState } from 'react'

function Hooks() {

    const [count, setCount]=useState(0)

    const increment=()=>{
        setCount(count+1)
    }

    const decrement=()=>{
        if(count > 0){
            setCount(count - 1)
        }
        else{
            alert("Count must be greater than 0")
        }
    }

  return (
    <div className='p-10'>
      <h1>Count: {count}</h1>
      <div className='flex gap-3'>
        <button onClick={increment} className='bg-green-500 text-white p-2 rounded-md'>Increment</button>
        <button onClick={decrement} className='bg-red-500 text-white p-2 rounded-md'>Decrement</button>
      </div>
    </div>
  )
}

export default Hooks
