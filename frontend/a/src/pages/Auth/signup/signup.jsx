import React,{useState} from 'react'
import './signup.css'
import { useNavigate } from 'react-router-dom'

const signup = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    password: '',
  })

  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]:e.target.value})
}

const handleSubmitButton = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3000/user/register', {
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
    console.log(result);
    navigate('/login');
  } catch (error) {
    console.error("Error: ", error);
  }
};




  return (
    <>
      <section className='containerr'>
        <div>Signup</div>
        <div className="contentt">
        <form>
          <div className="input-box">
            <label htmlFor="">Name</label>
            <input type="text" name='name' placeholder='username' onChange={changeHandler} value={formData.name}/>
          </div>
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
          <button type='submit' onClick={(e) => {handleSubmitButton(e)}}>Signup</button>
        </form>
        </div>
      </section>
    </>
  )
}

export default signup