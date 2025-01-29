import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Import the UserContext provider
import Nav from './Nav';
import Home from './Home';
import Login from './Login';
import Chatwithmentor from './Chatwithmentor';
import One2one from './One2one';
import Register from './Register';
import Feedback from './Feedback';
import Courses from './Courses';
import Internship from './Internship';
import Support from './Support';
import Placements from './Placements';
import Assessments from './Assessments';
// import ChatBot from './ChatBot';

import Logout from './Logout';
import ChangePassword from './ChangePassword';
import Admin from './Admin';


function App() {
  return (
    <UserProvider> {/* Wrap the app with UserProvider */}
      <Router>
        <div>
          <Nav /> {/* Nav will have access to the user state */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chatwithmentor" element={<Chatwithmentor />} />
            <Route path="/One2one" element={<One2one />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Feedback" element={<Feedback />} />
            {/* <Route path="/Chatbot" element={<ChatBot />} /> */}
            <Route path="/Logout" element={<Logout />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/support" element={<Support />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/assessments" element={<Assessments />} />
            <Route path="/ChangePassword" element={<ChangePassword />} />
            <Route path="/adminpage" element={<Admin />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
