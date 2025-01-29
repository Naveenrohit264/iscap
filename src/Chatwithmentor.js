import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaFileUpload, FaUserAlt } from "react-icons/fa";

const App = () => {
  const mentors = [
    { id: 1, name: "John Doe", profilePic: "https://via.placeholder.com/30" },
    { id: 2, name: "Jane Smith", profilePic: "https://via.placeholder.com/30" },
    { id: 3, name: "Alice Johnson", profilePic: "https://via.placeholder.com/30" },
    { id: 4, name: "Michael Brown", profilePic: "https://via.placeholder.com/30" },
    { id: 5, name: "Emily Davis", profilePic: "https://via.placeholder.com/30" },
  ];

  const [selectedMentor, setSelectedMentor] = useState(null);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setMessages([]); // Reset messages when changing mentor
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const time = new Date().toLocaleTimeString(); // Get current time
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: currentMessage, time },
      ]);
      setCurrentMessage("");
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: `Uploaded file: ${file.name}`, time: new Date().toLocaleTimeString() },
      ]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && currentMessage.trim() !== "") {
      handleSendMessage();
    }
  };

  // Auto reply feature
  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === "You") {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "Mentor", text: "Hi How can i help you .?", time: new Date().toLocaleTimeString() },
        ]);
      }, 1000); // Delay to simulate an auto-reply
    }
  }, [messages]);

  return (
    <div style={{ display: "flex", minHeight: "88vh", backgroundColor: "#fff", fontFamily: "Arial, sans-serif", marginTop: "0.8in" }}>
      {/* Sidebar */}
      <div style={{
        width: "20%", backgroundColor: "#111", color: "#fff", padding: "20px", boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto",
        borderRight: "3px solid #fff", animation: "shine 2s infinite ease-in-out"
      }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Mentors</h2>
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {mentors.map((mentor) => (
            <li key={mentor.id} onClick={() => handleMentorClick(mentor)} style={{
              padding: "10px", marginBottom: "10px", backgroundColor: selectedMentor?.id === mentor.id ? "#333" : "#444", borderRadius: "8px", textAlign: "center", cursor: "pointer", display: "flex", alignItems: "center",
              transition: "background-color 0.3s ease", border: "1px solid #fff", color: "#fff"
            }}>
              <FaUserAlt style={{ marginRight: "10px", fontSize: "18px" }} />
              {mentor.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div style={{
        flex: 1, display: "flex", flexDirection: "column", backgroundColor: "#fff", borderLeft: "3px solid #fff", animation: "shine 2s infinite ease-in-out"
      }}>
        {selectedMentor ? (
          <>
            <div style={{
              backgroundColor: "#111", color: "#fff", padding: "15px", textAlign: "center", fontSize: "1.25rem", borderBottom: "3px solid #fff", animation: "shine 2s infinite ease-in-out"
            }}>
              <h2>Chat with {selectedMentor.name}</h2>
            </div>

            {/* Chat Messages Section */}
            <div style={{
              flex: 1, backgroundColor: "#f5f5f5", padding: "15px", overflowY: "auto", display: "flex", flexDirection: "column", borderBottom: "2px solid #ddd", height: "calc(100vh - 2.8in)",
              border: "2px solid #fff", animation: "shine 2s infinite ease-in-out"
            }}>
              {messages.length > 0 ? (
                messages.map((msg, index) => (
                  <div key={index} style={{ marginBottom: "10px", textAlign: msg.sender === "You" ? "right" : "left" }}>
                    <div style={{
                      display: "inline-block", padding: "8px 12px", backgroundColor: msg.sender === "You" ? "#333" : "#111", color: "#fff", borderRadius: "12px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)"
                    }}>
                      {msg.text}
                    </div>
                    {/* Display the time below the message */}
                    <div style={{ fontSize: "0.75rem", color: "#7f8c8d", marginTop: "5px" }}>{msg.time}</div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: "center", color: "#7f8c8d", marginTop: "20%", fontWeight: "bold" }}>
                  Start chatting with {selectedMentor.name}.
                </div>
              )}
            </div>

            {/* Message Input Section */}
            <div style={{
              backgroundColor: "#fff", padding: "10px 15px", display: "flex", alignItems: "center", borderTop: "2px solid #ddd", animation: "shine 2s infinite ease-in-out"
            }}>
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                style={{
                  flex: 1, padding: "8px 12px", border: "1px solid #ddd", borderRadius: "8px", marginRight: "10px", fontSize: "0.875rem", backgroundColor: "#f5f5f5"
                }}
              />
              <input type="file" id="fileUpload" onChange={handleFileUpload} style={{ display: "none" }} />
              <label htmlFor="fileUpload" style={{ cursor: "pointer" }}>
                <FaFileUpload style={{ color: "#333", fontSize: "1.25rem" }} />
              </label>
              <button onClick={handleSendMessage} style={{
                backgroundColor: "#333", color: "#fff", padding: "8px 15px", border: "none", borderRadius: "8px", fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center"
              }}>
                <FaPaperPlane style={{ marginRight: "10px" }} />
                Send
              </button>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: "#7f8c8d" }}>
            <h3>Select a mentor to start chatting.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
