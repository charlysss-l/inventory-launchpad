import React,{useState} from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
}

const handleSubmitButton = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/auth/login', {
      method: "POST",
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    localStorage.setItem("token", result.token)
    console.log(result);
    navigate('/');
  } catch (error) {
    console.error("Error: ", error);
  }
};


  return (
    <>
      <section className='containerr'>
        <div>Login</div>
        <div className="contentt">
        <form>
          <div className="input-box">
            <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='email' onChange={changeHandler} value={formData.email}/>
          </div>
          <div className="input-box">
            <label htmlFor="">Password</label>
          <input type="password" name='password' placeholder='password' onChange={changeHandler} value={formData.password}/>
          </div>
          {/* or navlink? IDK :< */}
          {/* {onClick={(e) => {handleSubmitButton(e)}} pwede sa button or sa form since submit type naman yung button basta nasa loob ng form} */}
          <button type='submit' onClick={(e) => {handleSubmitButton(e)}}>Login</button>
        </form>
        </div>
      </section>
    </>
  )
}

export default login