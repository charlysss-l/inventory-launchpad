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
      try {
          const res = await axios.put(`http://localhost:3000/editProduct`, { ...editProduct, product_id });
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
      } catch (err) {
          console.error('Error updating product:', err);
          alert('Error updating product');
      }
  };
  
  
    const getProduct = async () => {
      try {
          const res = await axios.get(`http://localhost:3000/fetchProduct/${product_id}`);
          const productData = res.data;
          setEditProduct({
            product_name: product_name,
            product_brand: "",
            product_quantity: "",
            product_category: "",
            product_datePurchased: "",
            product_price: "",
            product_totalPrice: "",
            product_supplier: "",
        });
          // Format the date if it's in ISO format
          if (productData.product_datePurchased) {
              productData.product_datePurchased = new Date(productData.product_datePurchased).toISOString().split('T')[0];
          }
  
          // Update the state with the fetched product data
          setEditProduct(productData);
      } catch (err) {
          console.error('Error fetching product:', err);
      }
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
                      <label htmlFor="product_name">Name:</label>
                      <input 
                          type="text" 
                          placeholder="Enter Product Name" 
                          name="product_name" 
                          onChange={changeHandler} 
                          value={editProduct.product_name} 
                      />
                  </div>
                  <div className="input-box">
                      <label htmlFor="product_brand">Brand:</label>
                      <input 
                          type="text" 
                          placeholder="Enter Brand" 
                          name="product_brand" 
                          onChange={changeHandler} 
                          value={editProduct.product_brand} 
                      />
                  </div>
                  <div className="input-box">
                      <label htmlFor="product_quantity">Quantity:</label>
                      <input 
                          type="number" 
                          placeholder="Enter Quantity" 
                          name="product_quantity" 
                          onChange={changeHandler} 
                          value={editProduct.product_quantity} 
                      />
                  </div>
                  {/* <div className="input-box">
                      <label htmlFor="product_category">Category:</label>
                      <input 
                          type="text" 
                          placeholder="Enter Category" 
                          name="product_category" 
                          onChange={changeHandler} 
                          value={editProduct.product_category} 
                      />
                  </div> */}
                  <div className = "input-box">
                    <label htmlFor = "category"> Category: </label>
                    <select name="product_category" id="product_category" onChange={changeHandler} value={editProduct.product_category}>
                        <option >Please Select Category</option>
                        <option value="hardwares">Hardwares</option>
                        <option value="furnitures">Furnitures</option>
                        <option value="appliances">Appliances</option>
                        <option value="lightings">Lightings</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                  <div className="input-box">
                      <label htmlFor="product_datePurchased">Date Purchased:</label>
                      <input 
                          type="date" 
                          placeholder="Enter Date Purchased" 
                          name="product_datePurchased" 
                          onChange={changeHandler} 
                          value={editProduct.product_datePurchased} 
                      />
                  </div>
                  <div className="input-box">
                      <label htmlFor="product_price">Price:</label>
                      <input 
                          type="number" 
                          placeholder="Enter Price" 
                          name="product_price" 
                          onChange={changeHandler} 
                          value={editProduct.product_price} 
                      />
                  </div>
                  <div className="input-box">
                      <label htmlFor="product_totalPrice">Total Price:</label>
                      <input 
                          type="number" 
                          placeholder="Enter Total Price" 
                          name="product_totalPrice" 
                          onChange={changeHandler} 
                          value={editProduct.product_totalPrice} 
                      />
                  </div>
                  <div className="input-box">
                      <label htmlFor="product_supplier">Supplier:</label>
                      <input 
                          type="text" 
                          placeholder="Enter Supplier" 
                          name="product_supplier" 
                          onChange={changeHandler} 
                          value={editProduct.product_supplier} 
                      />
                  </div>
                  <div className="button-container">
                      <button type="submit" onClick={submitHandler}>UPDATE PRODUCT</button>
                  </div>
              </div>
          </form>
      </div>
  );
  
};

export default EditProduct;