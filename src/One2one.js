import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaUserAlt } from "react-icons/fa";

const App = () => {
  const mentors = [
    { id: 1, name: "John Doe", profilePic: "https://via.placeholder.com/30" },
    { id: 2, name: "Jane Smith", profilePic: "https://via.placeholder.com/30" },
    { id: 3, name: "Alice Johnson", profilePic: "https://via.placeholder.com/30" },
    { id: 4, name: "Michael Brown", profilePic: "https://via.placeholder.com/30" },
    { id: 5, name: "Emily Davis", profilePic: "https://via.placeholder.com/30" },
  ];

  const [bookedSlots, setBookedSlots] = useState({});
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");

  const handleMentorClick = (mentor) => {
    setSelectedMentor(mentor);
    setSelectedDate(null);
    setSelectedTime(null);
    setPopupMessage("");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when a new date is selected
  };

  const handleTimeSelect = (time) => {
    const slotKey = `${selectedMentor.id}-${selectedDate.toLocaleDateString()}-${time}`;
  
    if (bookedSlots[slotKey]) {
      setPopupMessage("Slot already booked.");
      setTimeout(() => {
        setPopupMessage("");
      }, 5000);
    } else {
      setBookedSlots((prevBookedSlots) => ({
        ...prevBookedSlots,
        [slotKey]: true,
      }));
      setPopupMessage(`Your meeting with ${selectedMentor.name} is scheduled for ${selectedDate.toLocaleDateString()} at ${time}. Meeting link sent to your registered mail.`);
  
      // Remove the time and calendar after meeting is scheduled
      setSelectedDate(null);
      setSelectedTime(null);
      
  
      setTimeout(() => {
        setPopupMessage("");
      }, 5000);
    }
  };
  

  const today = new Date();

  return (
    <div style={{ display: "flex", minHeight: "88vh", backgroundColor: "#f4f7fa", fontFamily: "Arial, sans-serif", marginTop: "0.8in" }}>
      <div style={{ width: "20%", backgroundColor: "#2c3e50", color: "#fff", padding: "20px", boxShadow: "2px 0 10px rgba(0, 0, 0, 0.1)", display: "flex", flexDirection: "column", alignItems: "center", overflowY: "auto" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "20px" }}>Mentors</h2>
        <ul style={{ listStyle: "none", padding: 0, width: "100%" }}>
          {mentors.map((mentor) => (
            <li key={mentor.id} onClick={() => handleMentorClick(mentor)} style={{ padding: "10px", marginBottom: "10px", backgroundColor: selectedMentor?.id === mentor.id ? "#3498db" : "#34495e", borderRadius: "8px", textAlign: "center", cursor: "pointer", display: "flex", alignItems: "center", transition: "background-color 0.3s ease" }}>
              <FaUserAlt style={{ marginRight: "10px", fontSize: "18px" }} />
              {mentor.name}
            </li>
          ))}
        </ul>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {selectedMentor ? (
          <>
            <div style={{ backgroundColor: "#34495e", color: "#fff", padding: "15px", textAlign: "center", fontSize: "1.25rem" }}>
              <h2>Schedule Meeting with {selectedMentor.name}</h2>
            </div>

            <div style={{ flex: 1, backgroundColor: "#ecf0f1", padding: "15px", display: "flex", flexDirection: "column", alignItems: "center", borderBottom: "2px solid #ddd" }}>
              <Calendar
                onChange={handleDateChange}
                value={selectedDate}
                minDate={today}
                style={{ border: "2px solid #3498db", borderRadius: "8px", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}
              />
              {selectedDate && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <h3>Select a Time:</h3>
                  <button onClick={() => handleTimeSelect("10:00 AM")} style={buttonStyle}>10:00 AM</button>
                  <button onClick={() => handleTimeSelect("12:00 PM")} style={buttonStyle}>12:00 PM</button>
                  <button onClick={() => handleTimeSelect("2:00 PM")} style={buttonStyle}>2:00 PM</button>
                  <button onClick={() => handleTimeSelect("4:00 PM")} style={buttonStyle}>4:00 PM</button>
                </div>
              )}
            </div>

            {popupMessage && (
              <>
                <div style={backdropStyle}></div>
                <div style={popupStyle}>
                  {popupMessage}
                </div>
              </>
            )}
          </>
        ) : (
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", color: "#7f8c8d" }}>
            <h3>Select a mentor to schedule a meeting.</h3>
          </div>
        )}
      </div>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: "#3498db",
  color: "#fff",
  padding: "10px 20px",
  margin: "5px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "1rem",
};

const backdropStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backdropFilter: "blur(5px)",
  zIndex: 1,
};

const popupStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "green",
  color: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
  fontSize: "1.2rem",
  zIndex: 2,
};

export default App;
