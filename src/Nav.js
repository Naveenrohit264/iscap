import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import { useUser } from './UserContext'; // Import the useUser hook

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false); // State to control profile menu
  const { user } = useUser(); // Access user data from context

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <div className="navbar-container">
        <a href="/" className="logo">
          <img src="/ISCAP.png" alt="Logo" className="logo-img" />
        </a>

        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/Chatbot">Chatbot</Link></li> */}
          <li><a href="#section2">Courses</a></li>
          <li><a href="#section3">Internships</a></li>
          <li><a href="#section4">Support</a></li>
          <li><a href="#section1">Placements</a></li>
          <li><a href="#section6">Assessments</a></li>
          <li><a href="#section7">Certificates</a></li>
          <li><a href="#section9">Reports</a></li>

          <li>
            {user ? (
              <p style={{ color: 'yellow' }}>Welcome, {user.username}!</p> 
            ) : (
              <p style={{ color: 'yellow' }}>Please login</p>
            )}
          </li>

          {/* Profile Icon and Dropdown Menu */}
          <li 
            onMouseEnter={toggleProfileMenu} 
            onMouseLeave={toggleProfileMenu} 
            style={{ position: 'relative', marginRight: '20px' }} // Adding margin for spacing
          >
            <Link to="#" style={{ color: 'yellow', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
              <i className="fas fa-user" style={{ fontSize: '24px', marginRight: '8px' }}></i> Profile
            </Link>

            {profileMenuOpen && (
              <div 
                style={{
                  position: 'absolute',
                  backgroundColor: '#333', // Dark background for the dropdown
                  top: '40px', // Giving some space from navbar
                  right: '0',
                  padding: '10px',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: '10',
                  minWidth: '180px', // Increased width for better view
                  boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Link 
                  to="/account" 
                  style={{ 
                    color: 'white', 
                    padding: '8px', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.3s', 
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} // Hover effect
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} // Revert hover effect
                >
                  Account
                </Link>

                <Link 
                  to="/ChangePassword" 
                  style={{ 
                    color: 'white', 
                    padding: '8px', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.3s', 
                    marginTop: '5px', 
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} // Hover effect
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} // Revert hover effect
                >
                  Change Password
                </Link>

                <Link 
                  to="/logout" 
                  style={{ 
                    color: 'white', 
                    padding: '8px', 
                    textDecoration: 'none', 
                    transition: 'background-color 0.3s', 
                    marginTop: '5px', 
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#444'} // Hover effect
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'} // Revert hover effect
                >
                  Logout
                </Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
