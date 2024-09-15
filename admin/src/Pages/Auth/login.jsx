// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './login.css';
// import axios from 'axios';
// const apiUrl = import.meta.env.VITE_API_URL;

// const Login = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false); // Loading state

//   const changeHandler = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmitButton = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     try {
//       const response = await axios.post(`${apiUrl}/auth/login`, formData);

//       localStorage.setItem("token", response.data.token);
//       console.log(response.data);

//       navigate('/admin/dashboard');
//     } catch (error) {
//       console.error("Error: ", error);
//     } finally {
//       setLoading(false); // Stop loading after request is complete
//     }
//   };

//   return (
//     <>
//       <section className='containerr'>
//         <div>Login</div>

//         <div className="contentt">
//           <form>

//             <div className="input-boxx">
//               <label htmlFor="">Email</label>
//               <input type="email" name='email' placeholder='Email' onChange={changeHandler} value={formData.email} />
//             </div>

//             <div className="input-boxx">
//               <label htmlFor="">Password</label>
//               <input type="password" name='password' placeholder='Password' onChange={changeHandler} value={formData.password} />
//             </div>

//             <button type='submit' onClick={(e) => handleSubmitButton(e)} disabled={loading}>
//   {loading && <span className="spinner"></span>}
//   {loading ? 'Logging in...' : 'LOGIN'}
// </button>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;












  import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false); // Loading state

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(`${apiUrl}/auth/login`, formData);

      localStorage.setItem("token", response.data.token);
      console.log(response.data);

      navigate('/admin/dashboard');
    } catch (error) {
      console.error("Error: ", error);
      alert('Invalid Credentials')
    } finally {
      setLoading(false); // Stop loading after request is complete
    }
  };



  return (
    <>
      <section className='containerr'>
        
        <div>Login</div>

        

        <div className="contentt">
          
        <form>

          <div className="input-boxx">
            <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='Email' onChange={changeHandler} value={formData.email}/>
          </div>

          <div className="input-boxx">
            <label htmlFor="">Password</label>
          <input type="password" name='password' placeholder='Password' onChange={changeHandler} value={formData.password}/>
          </div>
          {/* or navlink? IDK :< */}
          {/* {onClick={(e) => {handleSubmitButton(e)}} pwede sa button or sa form since submit type naman yung button basta nasa loob ng form} */}
          <button type='submit' onClick={(e) => handleSubmitButton(e)} disabled={loading}>
  {loading && <span className="spinner"></span>}
  {loading ? 'logging in' : 'LOGIN'}
</button>

        </form>
        </div>
      </section>
    </>
  )
}

export default Login



// const handleSubmitButton = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await fetch(`${apiUrl}/auth/login`, {
//   //       method: "POST",
//   //       headers:{
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify(formData)
//   //     });
//   //     if (!response.ok) {
//   //       throw new Error('Network response was not ok');
//   //     }
//   //     const result = await response.json();
//   //     localStorage.setItem("token", result.token)
//   //     console.log(result);
//   //     navigate('/admin/dashboard');
  
//   //   } catch (error) {
//   //     console.error("Error: ", error);
//   //   }
//   // };
