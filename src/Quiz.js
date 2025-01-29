import React from 'react'

export default function Quiz() {
  return (
    <div>  <div
                id='section8'
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
                    Test Your Knowledge
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
                    Take quizzes, challenge yourself, and track your progress!
                  </p>
    
                  {/* Container for quiz categories */}
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
                    {[
                      {
                        title: "Science & Technology",
                        description:
                          "Explore quizzes on science, tech, and discoveries.",
                        icon: "fa-flask", // Font Awesome Icon for Science
                        iconColor: "#4CAF50", // Green for Science & Technology
                      },
                      {
                        title: "General Knowledge",
                        description:
                          "Test your knowledge of history, culture, and more.",
                        icon: "fa-globe", // Font Awesome Icon for General Knowledge
                        iconColor: "#FF9800", // Orange for General Knowledge
                      },
                      {
                        title: "Programming",
                        description: "Challenge yourself with programming quizzes.",
                        icon: "fa-code", // Font Awesome Icon for Programming
                        iconColor: "#2196F3", // Blue for Programming
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
                        <i
                          className={`fa ${box.icon}`}
                          style={{
                            fontSize: "2.5rem",
                            color: box.iconColor, // Dynamic color for the icon
                            marginTop: "30px",
                            marginBottom: "20px",
                          }}
                        ></i>
    
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
                          onClick={() => alert(`Start ${box.title} Quiz!`)}
                        >
                          Start Quiz
                        </button>
                      </div>
                    ))}
                  </div>
                </div></div>
  )
}
