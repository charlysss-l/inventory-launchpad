import React from 'react'

const login = () => {
  return (
    <>
      <section className='container'>
        <div>Signup/Register</div>
        <div className="content">
        <form action="POST">
          <div className="input-box">
            <label htmlFor="">Name</label>
            <input type="text" name='username' placeholder='username'/>
          </div>
          <div className="input-box">
            <label htmlFor="">Email</label>
          <input type="email" name='email' placeholder='email'/>
          </div>
          <div className="input-box">
            <label htmlFor="">Password</label>
          <input type="text" name='password' placeholder='password'/>
          </div>
          {/* or navlink? IDK :< */}
          <button type='submit'>Login</button>
        </form>
        </div>
      </section>
    </>
  )
}

export default login