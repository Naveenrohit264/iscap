import React from 'react'

export default function Results() {
  return (
    <div>    <div
              id='section9'
      style={{
        display: "flex",
        justifyContent: "center", // Centered the entire container
        alignItems: "center", // Aligns vertically in the center
        padding: "50px 20px",
        backgroundColor: "black",
        textAlign: "center",
        flexWrap: "wrap", // Allows wrapping for responsiveness
      }}
    >
      {/* Left side - Text Data */}
      <div
        style={{
          flex: 1,
          color: "#fff",
          textAlign: "left",
          marginRight: "20px",
          maxWidth: "600px", // Limiting max width for better structure
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "20px",
            textAlign: "center",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Your Results
        </h2>
    
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "40px",
            animation: "fadeInUp 1s ease-out",
            animationDelay: "0.3s",
            textAlign: "center",
          }}
        >
          Check out your current statistics, progress, and more!
        </p>
    
        {/* Table for results */}
        <table
      style={{
        width: "100%",
        marginBottom: "20px",
        borderCollapse: "collapse",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 0 10px rgba(0, 255, 255, 0.6)", // Shining effect
        border: "2px solid transparent", // Transparent border for smoother effect
      }}
    >
      <thead>
        <tr
          style={{
            backgroundColor: "#333",
            color: "white",
            textAlign: "center",
            borderBottom: "2px solid transparent", // Transparent border for the top row
            boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)", // Shining effect for the header row
          }}
        >
          <th
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              fontWeight: "bold", // Bold heading
              borderRight: "2px solid transparent", // Transparent border
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)", // Shining effect for column headers
            }}
          >
            Category
          </th>
          <th
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              fontWeight: "bold", // Bold heading
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.8)", // Shining effect for column headers
            }}
          >
            Score
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          style={{
            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for rows
          }}
        >
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>Assessment Score</p> {/* Paragraph text */}
          </td>
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>85%</p> {/* Paragraph text */}
          </td>
        </tr>
        <tr
          style={{
            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for rows
          }}
        >
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>Quiz Score</p> {/* Paragraph text */}
          </td>
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>90%</p> {/* Paragraph text */}
          </td>
        </tr>
        <tr
          style={{
            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for rows
          }}
        >
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>Courses Completed</p> {/* Paragraph text */}
          </td>
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>75%</p> {/* Paragraph text */}
          </td>
        </tr>
        <tr
          style={{
            boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for rows
          }}
        >
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              backgroundColor: "black",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>Reward Points</p> {/* Paragraph text */}
          </td>
          <td
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              textAlign: "center",
              color: "white", // White text
              borderBottom: "2px solid transparent", // Transparent border for row
              boxShadow: "0 0 8px rgba(0, 255, 255, 0.5)", // Shining effect for cell
            }}
          >
            <p style={{ margin: 0 }}>500 Points</p> {/* Paragraph text */}
          </td>
        </tr>
      </tbody>
    </table>
    
      </div>
    
      {/* Right side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%", // Adds spacing from top for better positioning
        }}
      >
        <img
          src="./resul.avif" // Replace with your image URL
          alt="Results statistics visualization"
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div></div>
  )
}
