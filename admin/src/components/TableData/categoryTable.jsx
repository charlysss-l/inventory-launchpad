import React, { useState, useEffect } from 'react';
import './categoryCss.css'
import { NavLink, useParams } from 'react-router-dom';
import { Pagination } from '@mui/material'; // Import MUI Pagination
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const apiUrl = import.meta.env.VITE_API_URL;

const removeProduct = async (product_id) => {
    const userResponse = prompt('Type "yes" to confirm product removal and "no" to cancel').toLowerCase();
    
    if (userResponse === 'yes') {
        try {
            const response = await fetch(`${apiUrl}/removeproduct`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id: product_id }),
            });

            if (response.ok) {
                toast.success('🦄 Product Removed Successfully!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce
                });
            } else {
                toast.warn('⚠️ Failed to remove the product!', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce
                });
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('❌ An error occurred while trying to remove the product!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce
            });
        }
    } else {
        toast.error('❌ Invalid response. Product removal canceled.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce
        });
    }
};

const formatDate = (dateString) => {
    if (!dateString) return 'Ongoing';
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
};

const CategoryTable = () => {
    const { category } = useParams(); // Get category from the URL
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [productsPerPage] = useState(5); // Products per page
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching category:', category); // Debugging output
        // Fetch products by category
        setLoading(true); // Start loading
        fetch(`${apiUrl}/prodCat/${category}`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); // Debugging output
                // Sort products by purchase date (newest first)
                const sortedProducts = data.sort((a, b) => new Date(b.product_datePurchased) - new Date(a.product_datePurchased));
                setFilteredProducts(sortedProducts); // Update state with sorted products
                setLoading(false); // End loading
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false); // End loading on error
            });
    }, [category]); // Dependency on category

    // Get current products for pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="conn">
            <div className="inventory-container">
                <div className="inventory-heading">
                    <h3>Products</h3>
                    <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
                </div>
                {loading ? (
                    <div>Loading...</div> // Display loading message
                ) : (
                    <>
                        <table className="inventory-table">
                            <thead>
                                <tr>
                                    <th className="title">Product_ID</th>
                                    <th className="title">Name</th>
                                    <th className="title">Brand</th>
                                    <th className="title">Quantity</th>
                                    <th className="title">Category</th>
                                    <th className="title">Date Purchased</th>
                                    <th className="title">Price</th>
                                    <th className="title">Total Price</th>
                                    <th className="title">Supplier</th>
                                    <th className="title">Update</th>
                                    <th className="title">Delete</th>
                                    <th className="title">Borrow</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentProducts.map((item, index) => (
                                    <tr key={index}>
                                        <td className="data">{item.product_id}</td>
                                        <td className="data">{item.product_name}</td>
                                        <td className="data">{item.product_brand}</td>
                                        <td className="data number-hover">{item.product_quantity}</td>
                                        <td className="data">{item.product_category}</td>
                                        <td className="data">{formatDate(item.product_datePurchased)}</td>
                                        <td className="data">{(item.product_price)}</td>
                                        <td className="data">{(item.product_totalPrice)}</td>
                                        <td className="data">{(item.product_supplier)}</td>
                                        <td className="data">
                                            <NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink>
                                        </td>
                                        <td className="data">
                                            <button type="button" onClick={() => { removeProduct(item.product_id) }} className="delete">Delete</button>
                                        </td>
                                        <td className="data">
                                            <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Pagination
                            count={Math.ceil(filteredProducts.length / productsPerPage)}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                            variant="outlined"
                            shape="rounded"
                            style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
                        />
                    </>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default CategoryTable;


// import React, { useState, useEffect } from 'react';
// import './productTable.css';
// import { NavLink, useParams } from 'react-router-dom';

// const removeProduct = async (product_id) => {
//     await fetch('http://localhost:3000/removeproduct', {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ product_id: product_id })
//     }).then((resp) => {
//         resp.ok ? alert('Product removed successfully.') : alert("Failed to remove the product");
//     });
// };

// const formatDate = (dateString) => {
//     if (!dateString) return 'Ongoing';
//     const date = new Date(dateString);
//     const month = date.getMonth() + 1;
//     const day = date.getDate();
//     const year = date.getFullYear().toString().slice(-2);
//     return `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`;
// };

// const CategoryTable = () => {
//     const { category } = useParams(); // Get category from the URL
//     const [filteredProducts, setFilteredProducts] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         console.log('Fetching category:', category); // Debugging output
//         // Fetch products by category
//         setLoading(true); // Start loading
//         fetch(`http://localhost:3000/prodCat/${category}`)
//             .then((resp) => {
//                 if (!resp.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return resp.json();
//             })
//             .then((data) => {
//                 console.log('Fetched data:', data); // Debugging output
//                 setFilteredProducts(data); // Update state with fetched products
//                 setLoading(false); // End loading
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//                 setLoading(false); // End loading on error
//             });
//     }, [category]); // Dependency on category
    

//     return (
//         <div className="conn">
//             <div className="inventory-container">
//                 <div className="inventory-heading">
//                     <h3>Products</h3>
//                     <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
//                 </div>
//                 {loading ? (
//                     <div>Loading...</div> // Display loading message
//                 ) : (
//                     <table className="inventory-table">
//                         <thead>
//                             <tr>
//                                 <th className="title">Product_ID</th>
//                                 <th className="title">Name</th>
//                                 <th className="title">Brand</th>
//                                 <th className="title">Quantity</th>
//                                 <th className="title">Category</th>
//                                 <th className="title">Date Purchased</th>
//                                 <th className="title">Update</th>
//                                 <th className="title">Delete</th>
//                                 <th className="title">Borrow</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {filteredProducts.map((item, index) => (
//                                 <tr key={index}>
//                                     <td className="data">{item.product_id}</td>
//                                     <td className="data">{item.product_name}</td>
//                                     <td className="data">{item.product_brand}</td>
//                                     <td className="data">{item.product_quantity}</td>
//                                     <td className="data">{item.product_category}</td>
//                                     <td className="data">{formatDate(item.product_datePurchased)}</td>
//                                     <td className="data">
//                                         <NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink>
//                                     </td>
//                                     <td className="data">
//                                         <button type="button" onClick={() => { removeProduct(item.product_id) }} className="delete">Delete</button>
//                                     </td>
//                                     <td>
//                                     <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>   
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default CategoryTable;
