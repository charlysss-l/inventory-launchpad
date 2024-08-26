import './productTable.css';
import { NavLink } from 'react-router-dom';

const removeProduct = async (product_id) => {
    if (window.confirm('Are you sure you want to remove the product?')) {
        try {
            const response = await fetch('http://localhost:3000/removeproduct', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ product_id }),
            });

            if (response.ok) {
                alert('Product removed successfully');
                // Optional: Refresh the product list here
            } else {
                alert('Failed to remove the product');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while removing the product');
        }
    }
};

const ProductTable = ({ products }) => {
    return (
        <div className="conn">
            <div className="inventory-container">
                <div className="inventory-heading">
                    <h3>Products</h3>
                    <NavLink to={'/admin/addProduct'} className="pages">Add Product</NavLink>
                </div>

                <table className="inventory-table">
                    <thead>
                        <tr>
                            <th className="title">Product_ID</th>
                            <th className="title">Name</th>
                            <th className="title">Brand</th>
                            <th className="title">Quantity</th>
                            <th className="title">Category</th>
                            <th className="title">Date Purchased</th>
                            <th className="title">Update</th>
                            <th className="title">Delete</th>
                            <th className="title">Borrow</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                            <tr key={item.product_id}>
                                <td className="data">{item.product_id}</td>
                                <td className="data">{item.product_name}</td>
                                <td className="data">{item.product_brand}</td>
                                <td className="data">{item.product_quantity}</td>
                                <td className="data">{item.product_category}</td>
                                <td className="data">{item.product_datePurchased}</td>
                                <td className="data">
                                    <NavLink to={`/admin/editProduct/${item.product_id}`} className="editprod">Edit</NavLink>
                                </td>
                                <td className="data">
                                    <button type="button" onClick={() => removeProduct(item.product_id)} className="delete">
                                        Delete
                                    </button>
                                </td>
                                <td className="data">
                                    <NavLink to={`/admin/addBorrowProduct/${item.product_id}`} className="borrow">Borrow</NavLink>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductTable;
