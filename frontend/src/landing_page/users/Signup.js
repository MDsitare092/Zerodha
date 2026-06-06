import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await axios.post('https://zerodha-backend-dtda.onrender.com/signup', { username, email, password }, { withCredentials: true });
      navigate('/login');
    } catch {
      alert('Signup failed, please try again.');
    }
  };

  return (
   
     <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 shadow rounded bg-light">
          <h2 className="text-center mb-4">Signup now</h2>

          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <label htmlFor="username">Username</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
              onChange={e => setEmail(e.target.value)}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>

          <button className="btn btn-success w-100" onClick={handleSignup}>
            Create Account
          </button>
        </div>
      </div>
    </div>

  );
}

export default Signup;
