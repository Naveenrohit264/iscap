import React, { useEffect, useState } from "react";
import Register from "./Register";
import "./Admin.css";
import { FiUsers, FiSettings, FiHome, FiMenu, FiX, FiBell, FiSearch, FiMoreVertical } from 'react-icons/fi';

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/auth/users");
        if (!response.ok) {
          console.error("Error fetching data:", response.status, response.statusText);
          return;
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="admin-container" style={{marginTop:"8%"}}>
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-brand">
          <h2>AdminHub</h2>
          <button className="close-sidebar" onClick={toggleSidebar}>
            <FiX />
          </button>
        </div>
        
        <div className="sidebar-menu">
          <div className="menu-category">Main</div>
          <a href="#" className="menu-item active">
            <FiHome />
            <span>Dashboard</span>
          </a>
          <div className="menu-category">Management</div>
          <a href="#" className="menu-item">
            <FiUsers />
            <span>Users</span>
          </a>
          <a href="#" className="menu-item">
            <FiSettings />
            <span>Settings</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Navigation */}
        <nav className="top-nav">
          <div className="nav-left">
            <button className="menu-toggle" onClick={toggleSidebar}>
              <FiMenu />
            </button>
            <div className="search-bar">
              <FiSearch />
              <input 
                type="text" 
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="nav-right">
            <button className="nav-button">
              <FiBell />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-menu">
              <img 
                src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff" 
                alt="Admin" 
                className="user-avatar"
              />
              <span className="user-name">Admin User</span>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <div className="dashboard">
          <div className="dashboard-header">
            <h1>Dashboard Overview</h1>
            <div className="date-filter">
              <select defaultValue="today">
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
              </select>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="stats-grid">
            <div className="stat-card total-users">
              <div className="stat-icon">
                <FiUsers />
              </div>
              <div className="stat-details">
                <h3>Total Users</h3>
                <p className="stat-value">{users.length}</p>
                
              </div>
            </div>
            <div className="stat-card active-users">
              <div className="stat-icon">
                <FiUsers />
              </div>
              <div className="stat-details">
                <h3>Active Users</h3>
                <p className="stat-value">{users.filter(user => user.role === 'user').length}</p>
               
              </div>
              
            </div>
            
            <div className="stat-card admin-users">
              <div className="stat-icon">
                <FiUsers />
              </div>
              <div className="stat-details">
                <h3>Admin Users</h3>
                <p className="stat-value">{users.filter(user => user.role === 'admin').length}</p>
              
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="content-grid">
            {/* User Registration */}
            <div className="panel">
              <div className="panel-header">
                <h2>Register New User</h2>
                <button className="panel-menu">
                  <FiMoreVertical />
                </button>
              </div>
              <div className="panel-body" style={{marginTop:"-30%",height:"100px"}}>
                <Register />
              </div>
            </div>

            {/* User List */}
            <div className="panel">
              <div className="panel-header">
                <h2>Recent Users</h2>
                <button className="panel-menu">
                  <FiMoreVertical />
                </button>
              </div>
              <div className="panel-body">
                {loading ? (
                  <div className="loading">
                    <div className="spinner"></div>
                    <p>Loading users...</p>
                  </div>
                ) : (
                  <div className="table-container">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>Role</th>
                          <th>Status</th>
                         
                        </tr>
                      </thead>
                      <tbody>
                        {filteredUsers.map((user) => (
                          <tr key={user.id}>
                            <td className="user-cell">
                              <img 
                                src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
                                alt={user.name}
                                className="user-avatar-small"
                              />
                              <div className="user-info">
                                <div className="user-name">{user.name}</div>
                                <div className="user-email">{user.email}</div>
                              </div>
                            </td>
                            <td>
                              <span className={`role-badge ${user.role}`}>
                                {user.role}
                              </span>
                            </td>
                            <td>
                              <span className="status-badge active">Active</span>
                            </td>
                           
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}