import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryTable from '../../components/TableData/categoryTable';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar

const Admin_Category = () => {
  return (
    <div className="admin-category-page">
      <Sidebar /> {/* Include Sidebar here */}
      <div className="content">
        <CategoryTable /> {/* No need to pass products here */}
      </div>
    </div>
  );
};

export default Admin_Category;



// import { useEffect, useState } from 'react';
    // import axios from 'axios';
    // import CategoryTable from '../../components/TableData/categoryTable';
    // import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar

    // const Admin_Category = () => {
    // const [loading, setLoading] = useState(true);
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //     setLoading(true);
    //     try {
    //         const { data: response } = await axios.get('http://localhost:3000/allproducts');
    //         setData(response);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    //     setLoading(false);
    //     };

    //     fetchData();
    // }, []);

    // return (
    //     <div className="admin-category-page">
    //     <Sidebar /> {/* Include Sidebar here */}
    //     <div className="content">
    //         {loading && <div>Loading...</div>}
    //         {!loading && (
    //         <CategoryTable products={data} />
    //         )}
    //     </div>
    //     </div>
    // );
    // };

    // export default Admin_Category;
        