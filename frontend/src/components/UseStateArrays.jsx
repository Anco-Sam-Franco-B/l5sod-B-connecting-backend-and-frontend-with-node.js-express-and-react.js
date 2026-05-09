import React, { useState } from 'react'

function UseStateArrays() {
    const [names, setNames]=useState(['Kamali', 'Kagabo', 'Fred'])
  return (
    <div>
      {names}
    </div>
  )
}

export default UseStateArrays
