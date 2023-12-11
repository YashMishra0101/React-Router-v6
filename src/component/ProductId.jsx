import React from 'react'
import { useParams } from 'react-router-dom'

function ProductId() {
    const params=useParams()
    console.log(params);
  return (
    <div>
        <p className='mt-3 font-semibold text-lg uppercase text-green-600'>Id is={params.id}</p>
    </div>
  )
}

export default ProductId