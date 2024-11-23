import React from 'react'

function ProductList(props) {
  return (
    <div>
        <h2>{props.product}</h2>
        <p>Price : ${props.price}</p>
        <p>Description : {props.description}</p>
    </div>
  )
}

export default ProductList