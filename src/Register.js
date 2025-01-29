import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('http://localhost:5000/api/auth/register', formData);
          setMessage(response.data.message);
          // Hide success message after 2 seconds
          setTimeout(() => {
              setMessage('');
              setFormData({ name: '', email: '', password: '', role: 'user' });
          }, 2000);
      } catch (error) {
          setErrorMessage(error.response?.data?.error || 'Error occurred');
          // Hide error message after 2 seconds
          setTimeout(() => {
              setErrorMessage('');
          }, 2000);
      }
  };
  

    return (
        <div
            style={{
            //  backgroundColor:"black",
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
                Register
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
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
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
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
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
                    value={formData.password}
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
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    style={{
                        padding: '10px',
                        border: '1px solid #555',
                        borderRadius: '5px',
                        backgroundColor: '#222',
                        color: 'white',
                        fontSize: '16px',
                    }}
                >
                    <option value="user">User</option>
                    <option value="mentor">Mentor</option>
                    <option value="admin">Admin</option>
                </select>
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
                    Register
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
            {errorMessage && (
                <p
                    style={{
                        marginTop: '20px',
                        color: 'red',
                        fontSize: '18px',
                    }}
                >
                    {errorMessage}
                </p>
            )}
        </div>
    );
};

export default Register;
