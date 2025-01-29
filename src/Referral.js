import React from 'react'

export default function Referral() {
  return (
    <div><div>
              <div
              id='section10'
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "50px 20px",
        backgroundColor: "black",
        color: "white",
        textAlign: "left",
      }}
    >
      {/* Left side - Text Content */}
      <div
        style={{
          flex: 1,
          textAlign: "left",
          marginRight: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "20px",
            animation: "fadeInUp 1s ease-out",
          }}
        >
          Grow Together with Referrals
        </h2>
    
        <p
          style={{
            fontSize: "1rem",
            marginBottom: "40px",
            animation: "fadeInUp 1s ease-out",
            animationDelay: "0.3s",
          }}
        >
          Share opportunities with your network and get rewarded for every successful referral!
        </p>
    
        {/* Button Section */}
        <div
          style={{
            marginBottom: "20px",
          
          }}
        >
          <button
           style={{
            padding: "10px 20px",
            backgroundColor: "white",
          color: "black",
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
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
          }}
        >
            Expand Your Network
          </button>
          <button
           style={{
            padding: "10px 20px",
            backgroundColor: "white",
          color: "black",
            border: "2px solid white",
            borderRadius: "25px",
            fontSize: "1rem",
            marginLeft:"10px",
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
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
          }}
        >
            Earn Rewards
          </button>
          <button
          style={{
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "2px solid white",
            borderRadius: "25px",
            fontSize: "1rem",
            marginLeft:"10px",
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
            e.target.style.backgroundColor = "white";
            e.target.style.color = "black";
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
          }}
        >
          
            Help Others
          </button>
        </div>
    
        {/* Refer Now button below the 3 others */}
        <button
         style={{
          padding: "10px 20px",
          backgroundColor: "white",
          color: "black",
          border: "2px solid white",
         
          fontSize: "1rem",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onClick={() => alert("Refer Now Clicked!")}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "green";
          e.target.style.color = "white";
          e.target.style.transform = "scale(1.1)";
          e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.7)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
          e.target.style.transform = "scale(1)";
          e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
        }}
      >
          Refer Now
        </button>
      </div>
    
      {/* Right side - Image */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="./referral.avif" // Replace with your image URL
          alt="Referral program illustration"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    </div>
    
              </div></div>
  )
}
