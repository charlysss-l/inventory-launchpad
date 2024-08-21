
import './Table.css'

    const borrowProductTable = ({ products }) => {
        return (
            <div className="conn">
  <div className="inventory-container">

 <table className="inventory-table">
        <thead>
            <tr>
                <th className="title">Borrow ID</th>
                <th className="title">Name</th>
                <th className="title">Quantity</th>
                <th className="title">Date bnrrow?</th>
                <th className="title">Purpose</th>
                <th className="title">Status</th>
            </tr>
        </thead>
        <tbody>
            {products.map((item, index) => (
                <tr key={index}>
                    <td className="data">{item.borrowId}</td>
                    <td className="data">{item.borrowName}</td>
                    <td className="data">{item.borrowQuantity}</td>
                    <td className="data">{item.borrowDate}</td>
                    <td className="data">{item.purpose}</td>
                    <td className="data">{item.isAccepted ? "Accepted" : "Pending"}</td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
            </div>
          
        );
    };
    
    export default borrowProductTable;