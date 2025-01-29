import React from 'react'

export default function Placements() {
  return (
    <div
                id="section5"
                style={{
                  padding: "50px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "black",
                  color: "#fff",
                }}
              >
                {/* Left Text Content */}
                <div style={{ flex: 1, paddingRight: "20px" }}>
                  <h2
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Build Your Career with Expert Guidance
                  </h2>
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    Connect with mentors to shape your future and take your career
                    to the next level!
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "10px", // Adds spacing between buttons
                      marginTop: "30px",
                    }}
                  >
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
                      onClick={() => alert("Start Chat Clicked!")}
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
                      Paid Internships
                    </button>
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
                      onClick={() => alert("Start Chat Clicked!")}
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
                        fontSize: "1rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        transition: "background-color 0.3s ease",
                      }}
                      onClick={() => alert("Start Chat Clicked!")}
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
                  </div>
                </div>
    
                {/* Right Image */}
                <div style={{ flex: 1, textAlign: "center" }}>
                  <img
                    src="./career_guidance.avif" // Replace with your image URL
                    alt="Career Guidance"
                    style={{
                      maxWidth: "70%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  />
               </div></div>
  )
}
