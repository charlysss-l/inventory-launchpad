import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryTable from '../../components/TableData/categoryTable';
import Sidebar from '../../components/Sidebar/Sidebar'; // Import Sidebar

const Admin_Category = () => {
  return (
    <div className="admin-category-page">
      <Sidebar /> {/* Include Sidebar here */}
      
        <CategoryTable /> {/* No need to pass products here */}
      
    </div>
  );
};

export default Admin_Category;