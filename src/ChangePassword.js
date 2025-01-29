import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const userId = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmNewPassword) {
      showMessage('All fields are required.');
      return;
    }

    if (newPassword !== confirmNewPassword) {
      showMessage('New password and confirm password do not match.');
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/change-password',
        {
          userId,
          oldPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Handle success
      showMessage(response.data.message);
      if (response.status === 200) {
        // Clear localStorage and redirect to login page
        localStorage.removeItem('id');
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        navigate('/login');
      }
    } catch (error) {
      showMessage(error.response?.data?.message || 'Error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: 'black',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#222',
        padding: '30px',
        borderRadius: '10px',
        width: '100%',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: 'yellow',
          marginBottom: '20px',
          fontSize: '24px',
        }}>Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Old Password:</label>
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
              style={{
                width: '95%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#333',
                color: 'white',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>New Password:</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              style={{
                width: '95%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#333',
                color: 'white',
              }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Confirm New Password:</label>
            <input
              type="password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
              style={{
                width: '95%',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                backgroundColor: '#333',
                color: 'white',
              }}
            />
          </div>
          {message && <p style={{ color: 'white', marginBottom: '15px' }}>{message}</p>}
          <button
            type="submit"
            disabled={loading}
            style={{
              backgroundColor: 'yellow',
              color: 'black',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              width: '100%',
              fontSize: '16px',
              transition: 'background-color 0.3s',
            }}
          >
            {loading ? 'Updating...' : 'Change Password'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
