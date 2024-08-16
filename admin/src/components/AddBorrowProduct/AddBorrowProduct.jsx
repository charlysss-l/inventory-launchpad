import  {useState} from 'react'
import './AddBorrowProduct.css'
import axios from 'axios'
const AddBorrowProduct = () => {
    const [addBorrowProducts, setAddBorrowProducts] = useState({
        borrowName: "",
        borrowQuantity: "",
        borrowDate: "",
        purpose: "",
    })

    const changeHanlder = (e)=>{
        setAddBorrowProducts({...addBorrowProducts, [e.target.name]:e.target.value})
    }

    const submitHandler = async(e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/add-borrow-products', addBorrowProducts).then(res =>{
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
            alert('error borrowing product')
        })
    }

return (
    <div className = "container">
        <form>
            <h2> Borrow Product </h2>
            <div className = "content">
                <div className = "input-box">
                    <label htmlFor = "product"> Name: </label>
                    <input type="text" placeholder="Enter Product Name" name="borrowName" onChange={changeHanlder} value={addBorrowProducts.borrowName}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "brand"> Brand: </label>
                    <input type="number" placeholder="Enter Brand" name="borrowQuantity" onChange={changeHanlder} value={addBorrowProducts.borrowQuantity}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "quantity"> Quantity: </label>
                    <input type="date" placeholder="Enter Quantity" name="borrowDate" onChange={changeHanlder} value={addBorrowProducts.borrowDate}/>
                </div>
                <div className = "input-box">
                    <label htmlFor = "category"> Category: </label>
                    <input type="text" placeholder="Enter Category" name="purpose" onChange={changeHanlder} value={addBorrowProducts.purpose}/>
                </div>
                <div className="button-container"> 
                    {/* dapat babalik sa invenroty admin after massubmit product. Figure out ko pa */}
                    <button type="submit" onClick={(e) => submitHandler(e)}> BORROW PRODUCT </button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default AddBorrowProduct