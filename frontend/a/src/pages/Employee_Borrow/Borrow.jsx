import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BorrowProductTablee from "../../components/TableData/borrowProductTable"
const apiUrl = import.meta.env.VITE_API_URL;

const Borrow = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get(`${apiUrl}/all-borrow-products`);
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
        <BorrowProductTablee products = {data} />
      )}
    </div>
  );
};

export default Borrow;
