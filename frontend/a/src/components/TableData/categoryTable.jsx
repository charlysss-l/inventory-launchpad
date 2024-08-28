import React, { useState, useEffect } from 'react';
import './Table.css';
import { NavLink, useParams } from 'react-router-dom';
import { Pagination } from '@mui/material'; // Import MUI Pagination

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
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1); // State for current page
    const [productsPerPage] = useState(5); // Products per page

    useEffect(() => {
        console.log('Fetching category:', category); // Debugging output
        // Fetch products by category
        setLoading(true); // Start loading
        fetch(`http://localhost:3000/prodCat/${category}`)
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error('Network response was not ok');
                }
                return resp.json();
            })
            .then((data) => {
                console.log('Fetched data:', data); // Debugging output
                // Sort the fetched products by date purchased (newest first)
                const sortedData = data.sort((a, b) => new Date(b.product_datePurchased) - new Date(a.product_datePurchased));
                setFilteredProducts(sortedData); // Update state with sorted products
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
                                        <td className="data">
                                            <NavLink to={`/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
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
        </div>
    );
};

export default CategoryTable;


// import React, { useState, useEffect } from 'react';
// import './Table.css';
// import { NavLink, useParams } from 'react-router-dom';

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
//                                     <NavLink to={`/addBorrowProduct/${item.product_id}`} className="borrow-button">Borrow</NavLink>
//                                 </td>
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
