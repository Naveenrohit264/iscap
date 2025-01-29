import React from 'react'

export default function Rewards() {
  return (
    <div><div>
    <div
    id='section12'
style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px 20px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "10px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
}}
>
{/* Left Side - Text */}
<div
  style={{
    flex: 1,
    paddingRight: "30px",
    marginLeft:"5%",
    textAlign: "left",
    animation: "fadeInLeft 1s ease-out",
  }}
>
  <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
    Reward Points Redeem
  </h2>
  <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
    Redeem your points and get exciting vouchers, discounts, and more!
  </p>
  <button
    style={{
      padding: "10px 20px",
      fontSize: "1rem",
      borderRadius: "25px",
      backgroundColor: "white",
      color: "black",
   fontWeight:'bold',
      border: "2px solid white",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
    onMouseOver={(e) => (e.target.style.backgroundColor = "yellow")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
  >
    Redeem Now
  </button>
</div>

{/* Right Side - Image */}
<div
  style={{
    flex: 1,
    textAlign: "right",
    animation: "fadeInRight 1s ease-out",
  }}
>
  <img
    src="./voucher.avif"
    alt="Reward Points"
    style={{
      width: "100%",
      maxWidth: "400px",
      marginLeft:"-10%",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    }}
  />
</div>

{/* Add CSS Animations */}
<style>
  {`
    @keyframes fadeInLeft {
      0% {
        opacity: 0;
        transform: translateX(-20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `}
</style>
</div>
    </div></div>
  )
}
