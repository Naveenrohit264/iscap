import React from 'react'

export default function Footer() {
  return (
    <div> <div>
    <footer
      style={{
        backgroundColor: "black",
        color: "#fff",
        padding: "20px 10px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            marginBottom: "20px",
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Stay Connected
        </div>

        {/* Social Icons */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("Facebook clicked")}
          >
            <i className="fab fa-facebook-f"></i>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("Twitter clicked")}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("LinkedIn clicked")}
          >
            <i className="fab fa-linkedin-in"></i>
          </button>
          <button
            style={{
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => console.log("Instagram clicked")}
          >
            <i className="fab fa-instagram"></i>
          </button>
        </div>

        <div
          style={{
            fontSize: "1rem",
            marginBottom: "10px",
          }}
        >
          © 2025 Iscap Services Private ltd. All Rights Reserved.
        </div>
      </div>

      <div
        style={{
          fontSize: "0.9rem",
          color: "#bbb",
        }}
      >
        <button
          style={{
            background: "none",
            border: "none",
            color: "#bbb",
            textDecoration: "none",
            marginRight: "20px",
            cursor: "pointer",
          }}
          onClick={() => console.log("Privacy Policy clicked")}
        >
          Privacy Policy
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            color: "#bbb",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => console.log("Terms of Service clicked")}
        >
          Terms of Service
        </button>
      </div>
    </footer>
  </div></div>
  )
}
