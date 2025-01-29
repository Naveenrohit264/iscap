import React  from "react";
import { Link } from 'react-router-dom';
import Courses from './Courses';
import Internship from "./Internship";
import Support from "./Support";
import Rewards from "./Rewards";
import Referral from "./Referral";
import Results from "./Results";
import Quiz from "./Quiz";
import Achievements from "./Achievements";
import Assessments from "./Assessments";
import Placements from "./Placements";
import Reviews from "./Reviews";
import Footer from "./Footer";

function Home() {
  const animationStyle = {
    animation: "fadeInUp 1s ease-out", // Apply fade-in-up animation
  };

  return (
    <>
      {/* Home Section */}
      <div
        id="section1"
        style={{
          backgroundImage: "url('/Learning_Pic.jpg')", // Path to the image in the public folder
          backgroundSize: "cover", // Make the background image cover the entire area
          backgroundPosition: "center", // Center the background image
          minHeight: "70vh", // Ensure the background takes the full height of the screen
          display: "flex", // Use flexbox for centering
          flexDirection: "column", // Stack the items vertically
          justifyContent: "center", // Center the items vertically
          alignItems: "center", // Center the items horizontally
          color: "white", // Make text readable on dark backgrounds
          textAlign: "center", // Center the text
          paddingTop: "80px", // Add space below the navbar
        }}
      >
        <h1
          style={{
            ...animationStyle,
            fontSize: "3rem", // Larger text for the heading
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.7)", // Shadow to make text pop
          }}
        >
          Welcome to Our Platform
        </h1>
        <p
          style={{
            ...animationStyle,
            fontSize: "1.5rem", // Slightly larger text for the paragraph
            textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)", // Subtle shadow for readability
            margin: "10px 0", // Add margin to separate the paragraph from the button
            animationDelay: "0.3s", // Add delay to stagger the animation
          }}
        >
          Educational website for students who have enthusiasm to learn.
        </p>
        <Link to="/login">
          <button
            style={{
              ...animationStyle,
              padding: "15px 30px", // Larger button size
              backgroundColor: "black", // Initial background color
              color: "white", // White text color
              border: "none",
              borderRadius: "25px", // Rounded corners
              fontSize: "18px", // Larger font size
              fontWeight: "bold", // Bold text
              cursor: "pointer", // Change cursor to pointer on hover
              transition:
                "background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease", // Smooth transitions for hover effects
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)", // Initial shadow effect
              animationDelay: "0.6s", // Add delay to stagger the animation
            }}
            
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
            Get Started
          </button>
        </Link>
      </div>

      {/* Courses Section */}
      <div>
        <Courses />
      </div>
      <hr
        style={{
          border: "0",
          height: "1px",
          backgroundColor: "yellow",
          width: "100%",
          marginTop: "0",
          marginBottom: "0",
          borderRadius: "10px",
        }}
      />
      <div>
        <Internship />
      </div>
      <div>
        <hr
          style={{
            border: "0",
            height: "1px",
            backgroundColor: "yellow",
            width: "100%",
            marginTop: "0",
            marginBottom: "0",
            borderRadius: "10px",
          }}
        />
        <div>
          <Support />
        </div>
        <hr
          style={{
            border: "0",
            height: "1px",
            backgroundColor: "yellow",
            width: "100%",
            marginTop: "0",
            marginBottom: "0",
            borderRadius: "10px",
          }}
        />
        <div>
         <Placements />
          </div>

          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "yellow",
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "10px",
            }}
          />
          <Assessments />
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "yellow",
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "10px",
            }}
          />
          <div>
            <Achievements />
          </div>

          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "yellow",
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "10px",
            }}
          />
          <div>
            <div>
              <Quiz />
            </div>

            <hr
              style={{
                border: "0",
                height: "1px",
                backgroundColor: "yellow",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <div>
              <Results />
            </div>
            <hr
              style={{
                border: "0",
                height: "1px",
                backgroundColor: "yellow",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <Referral />
          </div>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "yellow",
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "10px",
            }}
          />
          <div>
           
          <div>
            <Reviews />
          </div>
            <hr
              style={{
                border: "0",
                height: "1px",
                backgroundColor: "yellow",
                width: "100%",
                marginTop: "0",
                marginBottom: "0",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            <Rewards />
          </div>
          <hr
            style={{
              border: "0",
              height: "1px",
              backgroundColor: "yellow",
              width: "100%",
              marginTop: "0",
              marginBottom: "0",
              borderRadius: "10px",
            }}
          />
      
          <div>
           <Footer />
          </div>
        </div>
  
    </>
  );
}

export default Home;
