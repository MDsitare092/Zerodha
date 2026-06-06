import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await axios.post('https://zerodha-backend-dtda.onrender.com/login', {
        username,
        password
      }, { withCredentials: true });

      window.location.href = 'http://localhost:3001';
    } catch {
      alert('Login failed, please try again.');
    }
  };

  return (
       
       <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 p-4 shadow rounded bg-light">
          <h2 className="text-center mb-4">Login</h2>

       <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingUsername"
              placeholder="Username"
              onChange={e => setUsername(e.target.value)}
              required
            />
            <label htmlFor="floatingUsername">Username</label>
          </div>

          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;