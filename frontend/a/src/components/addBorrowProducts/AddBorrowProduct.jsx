import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddBorrowProduct.css';
import axios from 'axios';

const AddBorrowProduct = () => {
    const { product_id } = useParams(); // Get the product ID from the URL
console.log('Product ID:', product_id); // Log the product_id
    const [addBorrowProducts, setAddBorrowProducts] = useState({
        borrowName: "",
        borrowBrand: "",
        borrowCategory: "",
        borrowQuantity: "",
        borrowDate: "",
        purpose: "",
    });

    useEffect(() => {
        if (product_id) {
            axios.get(`http://localhost:3000/allproducts/${product_id}`)
                .then((response) => {
                    const product = response.data;
                    setAddBorrowProducts({
                        borrowName: product.product_name,
                        borrowBrand: product.product_brand,
                        borrowCategory: product.product_category,
                        borrowQuantity: "", // Quantity will be filled by the user
                        borrowDate: "", // Date will be filled by the user
                        purpose: "", // Purpose will be filled by the user
                    });
                })
                .catch((error) => {
                    console.error("Error fetching product data:", error);
                });
        }
    }, [product_id]);

    const changeHanlder = (e) => {
        setAddBorrowProducts({ ...addBorrowProducts, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/add-borrow-products', addBorrowProducts)
            .then(res => {
                console.log(res);
                alert('Borrow product added');
                setAddBorrowProducts({
                    borrowName: "",
                    borrowQuantity: "",
                    borrowDate: "",
                    purpose: "",
                });
            })
            .catch(err => {
                console.log(err);
                alert('Error borrowing product');
            });
    };

    return (
        <div className="conTainer">
            <form>
                <h2> Borrow Product </h2>
                <div className="content">
                    <div className="input-box">
                        <label htmlFor="product"> Name: </label>
                        <input type="text" placeholder="Enter Product Name" name="borrowName" onChange={changeHanlder} value={addBorrowProducts.borrowName} readOnly />
                    </div>
                    <div className="input-box">
                        <label htmlFor="brand"> Brand: </label>
                        <input type="text" placeholder="Enter Brand" name="borrowBrand" onChange={changeHanlder} value={addBorrowProducts.borrowBrand} readOnly />
                    </div>
                    <div className="input-box">
                        <label htmlFor="quantity"> Quantity: </label>
                        <input type="number" placeholder="Enter Quantity" name="borrowQuantity" onChange={changeHanlder} value={addBorrowProducts.borrowQuantity} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="category"> Category: </label>
                        <input type="text" placeholder="Enter Category" name="borrowCategory" onChange={changeHanlder} value={addBorrowProducts.borrowCategory} readOnly />
                    </div>
                    <div className="input-box">
                        <label htmlFor="date"> Date: </label>
                        <input type="date" placeholder="Enter Date" name="borrowDate" onChange={changeHanlder} value={addBorrowProducts.borrowDate} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="purpose"> Purpose: </label>
                        <input type="text" placeholder="Enter Purpose" name="purpose" onChange={changeHanlder} value={addBorrowProducts.purpose} />
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={(e) => submitHandler(e)}> BORROW PRODUCT </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddBorrowProduct;



// import  {useState} from 'react'
// import './AddBorrowProduct.css'
// import axios from 'axios'
// const AddBorrowProduct = () => {
//     const [addBorrowProducts, setAddBorrowProducts] = useState({
//         borrowName: "",
//         borrowQuantity: "",
//         borrowDate: "",
//         purpose: "",
//     })

//     const changeHanlder = (e)=>{
//         setAddBorrowProducts({...addBorrowProducts, [e.target.name]:e.target.value})
//     }

//     const submitHandler = async(e) => {
//         e.preventDefault()
//         axios.post('http://localhost:3000/add-borrow-products', addBorrowProducts).then(res =>{
//             console.log(res)
//             alert('borrow product added')
//             setAddBorrowProducts({
//                 borrowName: "",
//                 borrowQuantity: "",
//                 borrowDate: "",
//                 purpose: "",
//             })
//         }).catch(errr => {
//             console.log(errr)
//             alert('error borrowing product')
//         })
//     }

// return (
//     <div className = "conTainer">
//         <form>
//             <h2> Borrow Product </h2>
//             <div className = "content">
//                 <div className = "input-box">
//                     <label htmlFor = "product"> Name: </label>
//                     <input type="text" placeholder="Enter Product Name" name="borrowName" onChange={changeHanlder} value={addBorrowProducts.borrowName}/>
//                 </div>
//                 <div className = "input-box">
//                     <label htmlFor = "brand"> Quantity: </label>
//                     <input type="number" placeholder="Enter Brand" name="borrowQuantity" onChange={changeHanlder} value={addBorrowProducts.borrowQuantity}/>
//                 </div>
//                 <div className = "input-box">
//                     <label htmlFor = "quantity"> Date: </label>
//                     <input type="date" placeholder="Enter Quantity" name="borrowDate" onChange={changeHanlder} value={addBorrowProducts.borrowDate}/>
//                 </div>
//                 <div className = "input-box">
//                     <label htmlFor = "category"> Purpose: </label>
//                     <input type="text" placeholder="Enter Category" name="purpose" onChange={changeHanlder} value={addBorrowProducts.purpose}/>
//                 </div>
//                 <div className="button-container"> 
//                     {/* dapat babalik sa invenroty admin after massubmit product. Figure out ko pa */}
//                     <button type="submit" onClick={(e) => submitHandler(e)}> BORROW PRODUCT </button>
//                 </div>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default AddBorrowProduct