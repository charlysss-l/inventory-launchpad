import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '../../components/TableData/Table';
const apiUrl = import.meta.env.VITE_API_URL;

const Inventory = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${apiUrl}/allproducts`);
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {!loading && (
        <Table products={data} />
      )}
    </div>
  );
};

export default Inventory;
