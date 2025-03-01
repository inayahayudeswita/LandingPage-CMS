import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hero6 from '../assets/images/hero6.jpg';

const Hero = () => {
  const brandBlue = "#0066cc";  // Primary Blue
  const darkBlue = "#004f9f";   // Darker Blue for accents
  const lightBlue = "#e6f0ff";  // Light Blue for background accents

  const [showDonateForm, setShowDonateForm] = useState(false); // State to show/hide donate form
  const navigate = useNavigate();

  const navigateToDonate = () => {
    navigate("#donate");  // Scroll to the donate section or navigate to a different page
  };

  const toggleDonateForm = () => {
    setShowDonateForm(!showDonateForm); // Toggle the donation form visibility
  };

  const heroSectionStyle = {
    backgroundImage: `url(${hero6})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "100px 0",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  };

  const heroContentStyle = {
    textAlign: "left",
    padding: "40px 30px",
    maxWidth: "50%",
  };

  const heroTitleStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    color: brandBlue,
  };

  const heroSubtitleStyle = {
    color: darkBlue,
    fontSize: "1.25rem",
    marginBottom: "20px",
  };

  const heroButtonStyle = {
    backgroundColor: brandBlue,
    color: "white",
    padding: "15px 30px",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s ease",
  };

  const actionButtonsSectionStyle = {
    textAlign: "center",
    marginTop: "40px",
    paddingBottom: "40px",
  };

  const donateButtonStyle = {
    backgroundColor: brandBlue,
    color: "white",
    padding: "15px 30px",
    borderRadius: "5px",
    fontSize: "1.2rem",
    cursor: "pointer",
    border: "none",
    transition: "background-color 0.3s ease",
    width: "100%",
  };

  // Modal Styles
  const modalOverlayStyle = {
    display: showDonateForm ? 'block' : 'none',  // Show or hide modal based on state
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Semi-transparent background
    zIndex: 9999,  // Ensure modal appears above other content
  };

  const modalContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    width: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: darkBlue,
  };

  const formInputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" style={heroSectionStyle}>
        <div className="hero-content" style={heroContentStyle}>
          <h1 className="hero-title" style={heroTitleStyle}>
            Together, Creating Change with YukMariProject
          </h1>
          <h2 className="hero-subtitle" style={heroSubtitleStyle}>
            Join us in making a meaningful impact for those in need and building <br />a better future.
          </h2>
          <button className="hero-button" style={heroButtonStyle}>
            Let's Moving
          </button>
        </div>
      </section>

      {/* Action Buttons Section */}
      <section className="action-buttons" style={actionButtonsSectionStyle}>
        <div className="container">
          <button
            className="action-button donate-button"
            style={donateButtonStyle}
            onClick={toggleDonateForm} // Trigger toggleDonateForm on click
          >
            Donate Now
          </button>
        </div>
      </section>

      {/* Modal (Popup) for Donation Form */}
      {showDonateForm && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <button style={closeButtonStyle} onClick={toggleDonateForm}>×</button>
            <h3>Donate Now</h3>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                style={formInputStyle}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                style={formInputStyle}
                required
              />
              <input
                type="number"
                placeholder="Donation Amount"
                style={formInputStyle}
                required
              />
              <button
                type="submit"
                style={{
                  ...formInputStyle,
                  backgroundColor: brandBlue,
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
