import  {useState} from 'react'
import './borrowProduct.css'
import axios from 'axios'
const borrowProduct = () => {
    const [addBorrowProducts, setAddBorrowProducts] = useState({
        borrowName: "",
        borrowQuantity: "",
        borrowDate: "",
        purpose: "",
    })

    const changeHandler = (e)=>{
        setAddBorrowProducts({...addBorrowProducts, [e.target.name]:e.target.value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/add-borrow-product', addBorrowProducts).then(res =>{
            console.log(res)
            alert('borrow product added')
            setAddBorrowProducts({
                borrowName: "",
                borrowQuantity: "",
                borrowDate: "",
                purpose: "",
            })
        }).catch(errr => {
            console.log(errr)
            alert('error borrowing adding product')
        })
    }

return (
    <div className = "container">
        <form action="/add-borrow-product" method="POST">
            <h2> Add Borrow </h2>
            <div className = "content">
                <div className = "input-box">
                    <label htmlFor = "product"> Name: </label>
                    <input type="text" placeholder="Enter Product Name" name="borrowName" onChange={changeHandler} value={addBorrowProducts.borrowName}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "quantity"> Quantity: </label>
                    <input type="number" placeholder="Enter Quantity" name="borrowQuantity" onChange={changeHandler} value={addBorrowProducts.borrowQuantity}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Date purchased: </label>
                    <input type="date" placeholder="Enter Date Purchased" name="borrowDate" onChange={changeHandler} value={addBorrowProducts.borrowDate}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "date"> Purpose: </label>
                    <input type="text" placeholder="Purpose" name="purpose" onChange={changeHandler} value={addBorrowProducts.purpose}/>
                </div>
                <div className="button-container"> 
                    <button type="submit" onClick={(e) => submitHandler(e)}> ADD PRODUCT </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default borrowProduct