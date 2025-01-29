import React from 'react';
import { Link } from 'react-router-dom';

export default function Support() {
  return (
    <div> <div
    id='section4'
      style={{
        textAlign: "center",
        padding: "50px 20px",
        backgroundColor: "black",
      }}
    >
      {/* Mentor Support Center Heading */}
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#fff",
          marginBottom: "20px",
          animation: "fadeInUp 1s ease-out",
        }}
      >
        Meeting with Mentor
      </h2>

      {/* Description Text */}
      <p
        style={{
          fontSize: "1.2rem",
          color: "#fff",
          marginBottom: "40px",
          animation: "fadeInUp 1s ease-out",
          animationDelay: "0.3s",
        }}
      >
        Connect with expert mentors for guidance and support.
      </p>

      {/* Chat and Meeting Sections Side by Side */}
      <div
        style={{ display: "flex", justifyContent: "center", gap: "40px" }}
      >
        {/* Chat with Mentor */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "450px",
          }}
        >
          <i
            className="fas fa-comments"
            style={{
              fontSize: "3rem",
              color: "#FFD700",
              marginBottom: "20px",
            }}
          ></i>
          <h2>Chat with a Mentor</h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Have quick conversations with mentors to resolve your doubts and
            gain insights.
          </p>
          <Link to="/chatwithmentor">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
            }}
          >
            Start Chat
          </button>
          </Link>
        </div>
        
        {/* One-to-One Meeting */}
        <div
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            width: "450px",
          }}
        >
          <i
            class="fas fa-calendar"
            style={{
              fontSize: "3rem",
              color: "#FFD700",
              marginBottom: "20px",
            }}
          ></i>
          <h2>One-to-One Meeting</h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Schedule a dedicated session with a mentor for personalized
            guidance.
          </p>
          <Link to="/One2one">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
           
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "white";
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
            }}
          >
            Schedule Meeting
          </button>
          </Link>
        </div>
      </div>
    </div></div>
  )
}
