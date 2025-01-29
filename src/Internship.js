import React from 'react'

export default function Internship() {
  return (
    <div
    id='section3'
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "50px 20px",
        backgroundColor: "black",
        color: "#333",
      }}
    >
      {/* Left Side: Internship Text Content */}

      <div style={{ flex: 1, paddingRight: "20px", marginTop: "-0.6%" }}>
        <h2
          style={{
            fontSize: "2.5rem",
            color: "white", // Dark color for better readability
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Internship Opportunities
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#fff",
            marginBottom: "20px",

            animation: "fadeInUp 1s ease-out",
            animationDelay: "0.3s",
          }}
        >
          Gain hands-on experience in the field of your choice with leading
          companies.
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
            onClick={() => alert("Learn More Clicked!")} // Sample onClick event
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
            Paid Internships
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
            onClick={() => alert("Explore Opportunities Clicked!")}
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
            Flexible Hours
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
            onClick={() => alert("View Internships Clicked!")}
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
            Real Projects
          </button>
        </ul>
      </div>
      {/* Right Side: Internship Image */}
      <div style={{ flex: 1, textAlign: "center" }}>
        <img
          src="./internship.jpg" // Replace with your image URL
          alt="Internship Opportunities"
          style={{
            maxWidth: "60%",
            height: "auto",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            animation: "fadeIn 1s ease-out",
          }}
        />
      </div>
      <div></div>
      </div>
   
  )
}
