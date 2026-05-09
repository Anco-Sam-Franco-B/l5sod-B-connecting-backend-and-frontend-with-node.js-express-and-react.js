import React from 'react'

function ProductList(props) {
  return (
    <div className='p-10'>
      <h1 className='text-2xl mb-3'>Product List</h1>
      <div>
        <ul className='flex gap-5'>
            {
                props.list.map((data, index)=>(
                    <li key={index}>
                        <div className='border-2 p-3'>
                            <h1>Product name: {data.name}</h1>
                            <h2>Product Price: {data.price} RF</h2>
                        </div>
                    </li>
                ))
            }
        </ul>
      </div>
    </div>
  )
}

export default ProductList
