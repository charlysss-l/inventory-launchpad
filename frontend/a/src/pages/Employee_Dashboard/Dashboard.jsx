import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const token = localStorage.getItem("token");
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/users', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();
                console.log("Fetched users:", result); // Log the fetched users
                setUsers(result);
            } catch (error) {
                console.log("Error fetching users:", error);
                navigate('/login'); // Optionally navigate to login on error
            }
        };

        token ? fetchUser() : navigate('/login');
    }, [token, navigate]);

    console.log(users); // Check the users state

    return (
        <div className='containerDash'>
            <table className='center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th> {/* Consider removing this for security */}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td> {/* Consider masking or removing this */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;

// import React,{useEffect, useState} from 'react'
// import {useNavigate} from 'react-router-dom'

// const Dashboard = () => {
//   const token = localStorage.getItem("token")
//   const [users, setUsers] = useState([])
//   const navigate = useNavigate()

//   useEffect(()=>{
//     const fetchUser = async ()=> {
//       try {
//         const response = await fetch('http://localhost:3000/api/users', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         })
//         const result = await response.json()
//         setUsers(result)
//       } catch (error) {
//         console.log("error",error)
//       }
//     }
//     if(token){
//       fetchUser()
//     }else{
//       navigate('/login')
//     }
//   }, [token, navigate])

//   return (
//     <div className='containerDash'>
//     <div className='center'>
//       <thead>
//         <tr>Name</tr>
//         <tr>Email</tr>
//         <tr>Password</tr>
//       </thead>
//       <tbody>
//         {users.map((user) => {
//           <tr key={user._id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>{user.password}</td>
//           </tr>
//         })}
//       </tbody>
//     </div>
//   </div>
//   )
// }

// export default Dashboard