import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
    const { product_id } = useParams();
    const [editProduct, setEditProduct] = useState({
      product_name: "",
      product_brand: "",
      product_quantity: "",
      product_category: "",
      product_datePurchased: "",
      product_price: "",
      product_totalPrice: "",
      product_supplier: "",
    });
  
    const changeHandler = (e) => {
      setEditProduct({ ...editProduct, [e.target.name]: e.target.value });
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      axios.put(`http://localhost:3000/editProduct`, { ...editProduct, product_id }).then((res) => {
        console.log(res);
        alert('Product updated');
        setEditProduct({
          product_name: "",
          product_brand: "",
          product_quantity: "",
          product_category: "",
          product_datePurchased: "",
          product_price: "",
          product_totalPrice: "",
          product_supplier: "",
        });
      }).catch((err) => {
        console.log(err);
        alert('Error updating product');
      });
    };
  
    const getProduct = async () => {
        axios.get(`http://localhost:3000/fetchProduct/${product_id}`)
          .then((res) => {
            // Extract the product data from the response
            const productData = res.data;
      
            // Format the date if it's in ISO format
            if (productData.product_datePurchased) {
              productData.product_datePurchased = new Date(productData.product_datePurchased).toISOString().split('T')[0];
            }
      
            // Update the state with the modified product data
            setEditProduct(productData);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      
  
    useEffect(() => {
      getProduct();
    }, []);

  return (
    <div className="container">
      <form>
        <h2>Edit Product</h2>
        <div className="content">
          <div className="input-box">
            <label htmlFor="product">Name:</label>
            <input type="text" placeholder="Enter Product Name" name="product_name" onChange={changeHandler} value={editProduct.product_name} />
          </div>
          <div className="input-box">
            <label htmlFor="brand">Brand:</label>
            <input type="text" placeholder="Enter Brand" name="product_brand" onChange={changeHandler} value={editProduct.product_brand} />
          </div>
          <div className="input-box">
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" placeholder="Enter Quantity" name="product_quantity" onChange={changeHandler} value={editProduct.product_quantity} />
          </div>
          <div className="input-box">
            <label htmlFor="category">Category:</label>
            <input type="text" placeholder="Enter Category" name="product_category" onChange={changeHandler} value={editProduct.product_category} />
          </div>
          <div className="input-box">
            <label htmlFor="date">Date Purchased:</label>
            <input type="date" placeholder="Enter Date Purchased" name="product_datePurchased" onChange={changeHandler} value={editProduct.product_datePurchased} />
          </div>
          <div className="input-box">
            <label htmlFor="price">Price:</label>
            <input type="number" placeholder="Enter Price" name="product_price" onChange={changeHandler} value={editProduct.product_price} />
          </div>
          <div className="input-box">
            <label htmlFor="totalPrice">Total Price:</label>
            <input type="number" placeholder="Enter Total Price" name="product_totalPrice" onChange={changeHandler} value={editProduct.product_totalPrice} />
          </div>
          <div className="input-box">
            <label htmlFor="supplier">Supplier:</label>
            <input type="text" placeholder="Enter Supplier" name="product_supplier" onChange={changeHandler} value={editProduct.product_supplier} />
          </div>
          <div className="button-container">
            <button type="submit" onClick={(e) => submitHandler(e)}>UPDATE PRODUCT</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;