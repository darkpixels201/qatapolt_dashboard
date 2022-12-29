import React from 'react'
import { Link } from 'react-router-dom'
import productListArray from '../../../Components/ProductListArray'

const Products = () => {
  return (
    <div>
      {productListArray.map((item, index) => (
          <div key={index} >
            <Link to={`${item.id}`} >
            {item.name}
            </Link>
          </div>
        ))}
    </div>
  )
}

export default Products