import React, { useState }  from "react";

export default function Reviews() {


    const [currentIndex, setCurrentIndex] = useState(0);
    const reviews = [
      "This is a fantastic platform. It helped me improve my skills.",
      "Amazing experience! I gained so much knowledge in a short time.",
      "The tutorials are clear and easy to follow. Highly recommend it!",
      "I was able to upskill quickly. Great value for my time.",
      "I loved how interactive the lessons were, and the feedback was helpful.",
      "This helped me land my first job. Forever grateful!",
      "A great learning platform that really helps you grow.",
      "Highly effective and motivating. I felt supported every step of the way.",
    ];
  
    const cardsPerRow = 4;
    const totalCards = reviews.length;
    const maxIndex = Math.max(0, totalCards - cardsPerRow);
  
    const scrollReviews = (direction) => {
      if (direction === "right" && currentIndex < maxIndex) {
        setCurrentIndex(currentIndex + 1); // Move right
      } else if (direction === "left" && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1); // Move left
      }
    };
    


  return (
    <div> <div
                  id="section11"
                  style={{
                    padding: "50px 20px",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "2rem",
                      marginBottom: "40px",
                      animation: "fadeInUp 1s ease-out",
                    }}
                  >
                    Student Reviews
                  </h2>
    
                  {/* Review Cards Section */}
                  <div
                    style={{
                      display: "flex",
                      overflow: "hidden",
                      position: "relative",
                      justifyContent: "center",
                    }}
                  >
                    {/* Left Arrow */}
                    {currentIndex > 0 && (
                      <button
                        style={{
                          position: "absolute",
                          left: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          fontSize: "2rem",
                          cursor: "pointer",
                          zIndex: 10,
                        }}
                        onClick={() => scrollReviews("left")}
                      >
                        &#8592;
                      </button>
                    )}
    
                    {/* Review Cards */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        gap: "20px",
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateX(-${currentIndex * 280}px)`,
                      }}
                    >
                      {/* Each Card */}
                      {reviews
                        .slice(currentIndex, currentIndex + cardsPerRow)
                        .map((review, index) => (
                          <div
                            key={index}
                            style={{
                              backgroundColor: "white",
                              padding: "20px",
                              borderRadius: "15px",
                              width: "250px",
                              textAlign: "center",
                              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                              color: "black",
                              border: "2px solid transparent",
                              cursor: "pointer",
                            }}
                            className="review-card"
                          >
                            <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                              "{review}"
                            </p>
                            <strong>Student {index + 1}</strong>
                          </div>
                        ))}
                    </div>
    
                    {/* Right Arrow */}
                    {currentIndex < maxIndex && (
                      <button
                        style={{
                          position: "absolute",
                          right: "10px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          backgroundColor: "transparent",
                          border: "none",
                          color: "white",
                          fontSize: "2rem",
                          cursor: "pointer",
                          zIndex: 10,
                        }}
                        onClick={() => scrollReviews("right")}
                      >
                        &#8594;
                      </button>
                    )}
                  </div>
    
                  {/* Add CSS animations */}
                  <style>
                    {`
          @keyframes fadeInCard {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
    
          @keyframes borderShine {
            0% {
              background-position: 200%;
            }
            100% {
              background-position: -200%;
            }
          }
    
          .review-card {
            position: relative;
            overflow: hidden;
          }
    
          .review-card:hover {
            transform: scale(1.1);
            box-shadow: 0 8px 20px rgba(255, 215, 0, 0.5); /* Gold shadow */
            border: 2px solid gold;
            animation: fadeInCard 0.3s ease;
          }
    
          .review-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 200%;
            height: 100%;
            background: linear-gradient(90deg, rgba(255, 215, 0, 0.5), transparent, rgba(255, 215, 0, 0.5));
            animation: borderShine 1.5s linear infinite;
            z-index: 1;
          }
        `}
                  </style>
                </div></div>
  )
}
