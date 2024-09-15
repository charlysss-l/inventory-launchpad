import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './AddBorrowProduct.css';
import axios from 'axios';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const apiUrl = import.meta.env.VITE_API_URL;

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
        destination: "",
        clientStaff: "",
        borrowerName: "",
        borrowerGmail: "",
        borrowerNumber: "",
    });

    useEffect(() => {
        if (product_id) {
            axios.get(`${apiUrl}/allproducts/${product_id}`)
                .then((response) => {
                    const product = response.data;
                    setAddBorrowProducts({
                        borrowName: product.product_name,
                        borrowBrand: product.product_brand,
                        borrowCategory: product.product_category,
                        borrowQuantity: "", // Quantity will be filled by the user
                        borrowDate: "", // Date will be filled by the user
                        purpose: "", // Purpose will be filled by the user
                        destination: "",
                        clientStaff: "",
                        borrowerName: "",
                        borrowerGmail: "",
                        borrowerNumber: "",
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
        axios.post(`${apiUrl}/add-borrow-products`, addBorrowProducts)
            .then(res => {
                console.log(res);
                setAddBorrowProducts({
                    borrowName: "",
                    borrowQuantity: "",
                    borrowDate: "",
                    purpose: "",
                    destination: "",
                    clientStaff: "",
                    borrowerName: "",
                    borrowerGmail: "",
                    borrowerNumber: "",
                });
                toast.success('🦄 Borrow Product Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
            })
            .catch(err => {
                console.log(err);
                toast.error('🦄 Borrow Product Failed!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                    });
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
                    <div className="input-box">
                        <label htmlFor="borrowerName"> Name of Borrowe: </label>
                        <input type="text" placeholder="Enter Your Full Name" name="borrowerName" onChange={changeHanlder} value={addBorrowProducts.borrowerName} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="borrowerGmail"> Gmail: </label>
                        <input type="email" placeholder="Enter Gmail Account" name="borrowerGmail" onChange={changeHanlder} value={addBorrowProducts.borrowerGmail} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="borrowerNumber"> Contact No.: </label>
                        <input type="number" placeholder="Enter Contact Number" name="borrowerNumber" onChange={changeHanlder} value={addBorrowProducts.borrowerNumber} />
                    </div>
                    <div className="input-box">
                        <label htmlFor="purpose"> Destination: </label>
                        <select name="destination" id='destination' onChange={changeHanlder} value={addBorrowProducts.destination}>
                        <option >Please Select Product Destination</option>
                            <option value="Griffin Stone">Griffin Stone</option>
                            <option value="Launchpad Stone">Launchpad Stone</option>
                            <option value="Launchpad Plus">Launchpad Plus</option>
                        </select>
                    </div>
                    <div className="input-box">
                        <label htmlFor="purpose"> Role: </label>
                        <select name="clientStaff" id='clientStaff' onChange={changeHanlder} value={addBorrowProducts.clientStaff}>
                        <option >Please Select Role</option>
                            <option value="Client">Client</option>
                            <option value="Staff">Staff</option>
                        </select>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={(e) => submitHandler(e)}> BORROW PRODUCT </button>
                    </div>
                </div>
            </form>
            <ToastContainer />
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
//     <div className = "container">
//         <form>
//             <h2> Borrow Product </h2>
//             <div className = "content">
//                 <div className = "input-box">
//                     <label htmlFor = "product"> Name: </label>
//                     <input type="text" placeholder="Enter Product Name" name="borrowName" onChange={changeHanlder} value={addBorrowProducts.borrowName}/>
//                 </div>
//                 <div className = "input-box">
//                     <label htmlFor = "brand"> Quantitiy: </label>
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