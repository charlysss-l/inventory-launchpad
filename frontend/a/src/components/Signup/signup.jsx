import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    role: '',
    company: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', form);
    // Add your form submission logic here
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <hr class="custom-line"></hr>
      <h6>Hello, create your account with us.</h6>
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            name="role"
            id="role"
            value={form.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Employee Role</option>
            <option value="Manager">Manager</option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            {/* Add more roles as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="company">Company</label>
          <select
            name="company"
            id="company"
            value={form.company}
            onChange={handleChange}
            required
          >
            <option value="">Select Company</option>
            <option value="Company A">Company A</option>
            <option value="Company B">Company B</option>
            <option value="Company C">Company C</option>
            {/* Add more companies as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
            minLength="8"
          />
        </div>

        <button type="submit">Get started</button>
        <Link to="/login">Already have an account? Log in</Link>
      </form>
    </div>
  );
};

export default Signup;
