import React from 'react';
// import AdminNotifications from '../../components/AdminNotifications/AdminNotifications';
import AdminDashboard from '../../components/AdminDashboard/AdminDashboard';
import './Dashboard.css'

const Admin_Dashboard = () => {
  return (
    <div className='dashCont'>
      <AdminDashboard />
      {/* <AdminNotifications /> */}
    </div>
  );
};

export default Admin_Dashboard;
