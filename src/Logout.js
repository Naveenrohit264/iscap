import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook

const Logout = () => {
    const navigate = useNavigate();
    const { setUser } = useUser(); // Access setUser to update the user context

    const handleLogout = () => {
        // Remove the token and username from localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        // Remove user data from context (this ensures the state is updated globally)
        setUser(null); 

        // Redirect the user to the login page
        navigate('/login');
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
                Logout
            </h2>
            <p style={{ fontSize: '18px' }}>Are you sure you want to log out?</p>
            <button
                onClick={handleLogout}
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
                Logout
            </button>
        </div>
    );
};

export default Logout;
