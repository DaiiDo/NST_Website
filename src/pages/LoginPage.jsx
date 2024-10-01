import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login', {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
        toast.error('La connexion a échoué! Veuillez réessayer.', {
          position: "top-center",
          autoClose: 3000,
        });
      } else {
        localStorage.setItem('token', response.data.token);
        toast.success('Connexion réussie !', {
          position: "top-center",
          autoClose: 3000, 
        });
        setLoginStatus("Login Successful!");
        setTimeout(() => {
          navigate('/');
          window.location.reload(); 
        }, 2000); 
  
        
        setEmail('');
        setPassword('');
        
      }
    });
  };

  return (
    <div className="login-container">
      <h2>Se connecter</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
      <ToastContainer />
      <h4>{loginStatus}</h4>
    </div>
  );
}

export default LoginPage;
