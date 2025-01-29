import React, { useState } from 'react';
import axios from 'axios';
import { useUser } from './UserContext'; // Import the useUser hook
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const { setUser } = useUser(); // Use setUser to update user state
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', formData);
        
        setMessage(response.data.message);
        const { token, username, id, role } = response.data;

        // Log the role to verify its value
        console.log('Role from server:', role);

        // Store the token, username, and role in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('username', username);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);

        // Update the user state
        setUser(username, id);

        // Navigate based on role
        if (role === 'admin') {
            navigate('/adminpage');
        } else {
            navigate('/');
        }
    } catch (error) {
        setMessage(error.response?.data?.message || 'Error occurred');
    }
};


  return (
    <div
      style={{
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2
        style={{
          fontSize: '36px',
          color: 'yellow',
          marginBottom: '20px',
        }}
      >
        Login
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#333',
          padding: '30px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '400px',
          gap: '15px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          style={{
            padding: '10px',
            border: '1px solid #555',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: 'white',
            fontSize: '16px',
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          style={{
            padding: '10px',
            border: '1px solid #555',
            borderRadius: '5px',
            backgroundColor: '#222',
            color: 'white',
            fontSize: '16px',
          }}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: 'yellow',
            border: 'none',
            borderRadius: '5px',
            fontSize: '18px',
            color: 'black',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Login
        </button>
      </form>
      {message && (
        <p
          style={{
            marginTop: '20px',
            color: 'yellow',
            fontSize: '18px',
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Login;
