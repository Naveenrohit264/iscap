import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Assessments() {
  return (
    <div><div>
                <div
                id='section6'
                  style={{
                    padding: "50px 20px",
                    backgroundColor: "black",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      color: "#fff",
                      marginBottom: "20px",
                      animation: "fadeInUp 1s ease-out",
                    }}
                  >
                    Assess Your Skills
                  </h2>
    
                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#fff",
                      marginBottom: "40px",
                      animation: "fadeInUp 1s ease-out",
                      animationDelay: "0.3s",
                    }}
                  >
                    Take assessments to evaluate your knowledge and track your
                    growth.
                  </p>
    
                  {/* Container for boxes */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "20px",
                      justifyContent: "center",
                      maxWidth: "1200px",
                      margin: "0 auto",
                    }}
                  >
                    {/* Data for the boxes */}
                    {[
                      {
                        title: "Technical Skills",
                        description:
                          "Assess your technical knowledge in various domains.",
                        icon: (
                          <CodeIcon
                            style={{ fontSize: "3rem", color: "#007BFF" }}
                          />
                        ),
                      },
                      {
                        title: "Soft Skills",
                        description:
                          "Evaluate your communication, teamwork, and leadership skills.",
                        icon: (
                          <PsychologyIcon
                            style={{ fontSize: "3rem", color: "#FFC107" }}
                          />
                        ),
                      },
                      {
                        title: "Aptitude Tests",
                        description:
                          "Challenge yourself with logical reasoning and problem-solving.",
                        icon: (
                          <CalculateIcon
                            style={{ fontSize: "3rem", color: "#28A745" }}
                          />
                        ),
                      },
                      {
                        title: "Mock Interviews",
                        description:
                          "Prepare for real interviews with mock assessments.",
                        icon: (
                          <BusinessCenterIcon
                            style={{ fontSize: "3rem", color: "#DC3545" }}
                          />
                        ),
                      },
                      {
                        title: "Domain Expertise",
                        description: "Showcase your expertise in specific domains.",
                        icon: (
                          <SupervisorAccountIcon
                            style={{ fontSize: "3rem", color: "#6C757D" }}
                          />
                        ),
                      },
                      {
                        title: "Coding",
                        description:
                          "Showcase your problem-solving skills and logical ability.",
                        icon: (
                          <SchoolIcon
                            style={{ fontSize: "3rem", color: "#17A2B8" }}
                          />
                        ),
                      },
                    ].map((box, index) => (
                      <div
                        key={index}
                        style={{
                          flex: "0 1 calc(33.33% - 20px)", // Three boxes per row with a gap
                          backgroundColor: "white",
                          borderRadius: "10px",
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                          textAlign: "center",
                          position: "relative",
                          overflow: "hidden",
                          transition: "transform 0.3s ease",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.transform = "scale(1.05)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.transform = "scale(1)")
                        }
                      >
                        {/* Icon */}
                        <div
                          style={{
                            marginTop: "20px",
                          }}
                        >
                          {box.icon}
                        </div>
    
                        {/* Title */}
                        <h4
                          style={{
                            fontSize: "1.5rem",
                            color: "#333",
                            margin: "15px 0",
                          }}
                        >
                          {box.title}
                        </h4>
    
                        {/* Description */}
                        <p
                          style={{
                            fontSize: "1rem",
                            color: "#555",
                            padding: "0 10px",
                          }}
                        >
                          {box.description}
                        </p>
    
                        {/* Button */}
                        <button
                          style={{
                            padding: "10px 20px",
                            backgroundColor: "#333",
                            color: "white",
                            border: "none",
                            borderRadius: "25px",
                            fontSize: "1rem",
                            fontWeight: "bold",
                            cursor: "pointer",
                            marginBottom: "20px",
                            transition: "background-color 0.3s ease",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#555")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#333")
                          }
                          onClick={() => alert(`${box.title} Assessment Clicked!`)}
                        >
                          Take Assessment
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        
  )
}
