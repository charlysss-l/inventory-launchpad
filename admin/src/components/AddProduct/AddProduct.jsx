import  {useState} from 'react'
import './AddProduct.css'
import axios from 'axios'
const AddProduct = () => {
    const [addProducts, setAddProducts] = useState({
        product_name: "",
        product_brand: "",
        product_quantity: "",
        product_category: "",
        product_datePurchased: "",
        product_price: "",
        product_totalPrice: "",
    })

    const changeHanlder = (e)=>{
        setAddProducts({...addProducts, [e.target.name]:e.target.value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/add-product', addProducts).then(res =>{
            console.log(res)
            alert('product added')
            setAddProducts({
                product_name: "",
                product_brand: "",
                product_quantity: "",
                product_category: "",
                product_datePurchased: "",
                product_price: "",
                product_totalPrice: "",
                product_supplier: "",
            })
        }).catch(errr => {
            console.log(errr)
            alert('error adding product')
        })
    }

return (
    <div className = "container">
        <form action="/admin/add-product" method="POST">
            <h2> Add Product </h2>
            <div className = "content">
                <div className = "input-box">
                    <label htmlFor = "product"> Name: </label>
                    <input type="text" placeholder="Enter Product Name" name="product_name" onChange={changeHanlder} value={addProducts.product_name}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "brand"> Brand: </label>
                    <input type="text" placeholder="Enter Brand" name="product_brand" onChange={changeHanlder} value={addProducts.product_brand}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "quantity"> Quantity: </label>
                    <input type="number" placeholder="Enter Quantity" name="product_quantity" onChange={changeHanlder} value={addProducts.product_quantity}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "category"> Category: </label>
                    <select name="product_category" id="product_category" onChange={changeHanlder} value={addProducts.product_category}>
                        <option >Please Select Category</option>
                        <option value="hardwares">Hardwares</option>
                        <option value="furnitures">Sample</option>
                    </select>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Date purchased: </label>
                    <input type="date" placeholder="Enter Date Purchased" name="product_datePurchased" onChange={changeHanlder} value={addProducts.product_datePurchased}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Total: </label>
                    <input type="number" placeholder="Enter Date Purchased" name="product_price" onChange={changeHanlder} value={addProducts.product_price}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Total Price: </label>
                    <input type="number" placeholder="Enter Date Purchased" name="product_totalPrice" onChange={changeHanlder} value={addProducts.product_totalPrice}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Supplier: </label>
                    <input type="text" placeholder="Enter Date Purchased" name="product_supplier" onChange={changeHanlder} value={addProducts.product_supplier}/>
                </div>
                <div className="button-container"> 
                    {/* dapat babalik sa invenroty admin after massubmit product. Figure out ko pa */}
                    <button type="submit" onClick={(e) => submitHandler(e)}> ADD PRODUCT </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddProduct