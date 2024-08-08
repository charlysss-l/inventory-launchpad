import React from 'react'
import './AddProduct.css'
const AddProduct = () => {
  return (
    <div className = "container">
        <form action="/admin/add-product" method="POST">
            <h2> Add Product </h2>
            <div className = "content">
                <div className = "input-box">
                    <label htmlFor = "product"> Name: </label>
                    <input type="text" placeholder="Enter Product Name" name="product" />
                </div>
                <div className = "input-box">
                    <label htmlFor = "brand"> Brand: </label>
                    <input type="text" placeholder="Enter Brand" name="brand" />
                </div>
                <div className = "input-box">
                    <label htmlFor = "quantity"> Quantity: </label>
                    <input type="number" placeholder="Enter Quantity" name="quantity"/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "category"> Category: </label>
                    <input type="text" placeholder="Enter Category" name="category"/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Date purchased: </label>
                    <input type="date" placeholder="Enter Date Purchased" name="date"/>
                </div>
                <div className="button-container"> 
                    <button type="submit"> ADD PRODUCT </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddProduct