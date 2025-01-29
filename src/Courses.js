import React from 'react'

export default function Courses() {
  return (
    <div><div
    id='section2'
      style={{
        padding: "50px 20px",
    
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black", // Light background color
        color: "#333", // Dark text color
      }}
    >
      {/* Left Text Content */}
      <div style={{ flex: 1, paddingRight: "20px", marginTop: "-5%" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "white",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Learn & Level Up Your Skills
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "white",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-out",
            animationDelay: "0.3s",
          }}
        >
          Select from a wide range of courses to upskill and advance your
          career!
        </p>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            lineHeight: "1.8",
            fontSize: "1rem",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              marginLeft: "1%",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => alert("Get Started Clicked!")} // Sample onClick event
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700"; // Gold background color on hover
              e.target.style.color = "white"; // Change text to white on hover
              e.target.style.transform = "scale(1.1)"; // Slightly enlarge the button
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)"; // Increase shadow on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "black"; // Reset to original black
              e.target.style.color = "white"; // Reset text to white
              e.target.style.transform = "scale(1)"; // Reset button size
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; // Reset shadow
            }}
          >
            50+ Courses
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
    
              marginLeft: "1%",
              borderRadius: "25px",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => alert("Get Started Clicked!")} // Sample onClick event
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700"; // Gold background color on hover
              e.target.style.color = "white"; // Change text to white on hover
              e.target.style.transform = "scale(1.1)"; // Slightly enlarge the button
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)"; // Increase shadow on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "black"; // Reset to original black
              e.target.style.color = "white"; // Reset text to white
              e.target.style.transform = "scale(1)"; // Reset button size
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; // Reset shadow
            }}
          >
            Certificate
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              borderRadius: "25px",
              marginLeft: "1%",
              fontSize: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onClick={() => alert("Get Started Clicked!")} // Sample onClick event
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#FFD700"; // Gold background color on hover
              e.target.style.color = "white"; // Change text to white on hover
              e.target.style.transform = "scale(1.1)"; // Slightly enlarge the button
              e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)"; // Increase shadow on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "black"; // Reset to original black
              e.target.style.color = "white"; // Reset text to white
              e.target.style.transform = "scale(1)"; // Reset button size
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)"; // Reset shadow
            }}
          >
            Projects & Assignments
          </button>
        </ul>
      </div>
    
      {/* Right Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src="./Levelup.avif" // Replace with your image URL
          alt="Upskill Illustration"
          style={{
            maxWidth: "60%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            animation: "fadeIn 1s ease-out",
          }}
        />
      </div>
      </div></div>
  )
}



