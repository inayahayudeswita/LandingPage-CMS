import React from 'react';
import partner1 from '../assets/images/partner1.png';
import partner2 from '../assets/images/partner2.png';
import partner3 from '../assets/images/partner3.png';
import partner4 from '../assets/images/partner4.png';
import partner5 from '../assets/images/partner5.png';
import partner6 from '../assets/images/partner6.png';
import logoCMS from "../assets/images/logoCMS.jpg"; 

const Partners = () => {
  // Warna dari Hero Section
  const brandBlue = "#0066cc";  // Primary Blue
  const darkBlue = "#004f9f";   // Darker Blue for accents
  const lightBlue = "#e6f0ff";  // Light Blue for background accents
  const whiteBackground = "#ffffff"; // White background for separation

  const sectionStyle = {
    position: "relative",
    padding: "40px 0",
    backgroundColor: lightBlue, // Light Blue for background
    paddingTop: "80px", // Added padding-top to separate from the previous section
  };

  const wrapperStyle = {
    backgroundColor: whiteBackground, // White background above the section
    paddingBottom: "20px", // Adds space below the white background
  };

  const whiteSectionStyle = {
    backgroundColor: whiteBackground,  // White background for the new section
    padding: "40px 0",
    textAlign: "center",
  };

  const buttonStyle = {
    backgroundColor: brandBlue, // Primary Blue
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "25px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const sectionTitleStyle = {
    textAlign: "center",
    position: "relative",
    marginBottom: "40px",
  };

  const titleUnderlineStyle = {
    width: "80px",
    height: "4px",
    backgroundColor: brandBlue, // Primary Blue
    margin: "0 auto 15px",
  };

  const titleTextStyle = {
    fontSize: "36px",
    color: darkBlue, // Darker Blue for title
  };

  const logosContainerStyle = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px",
    marginBottom: "30px",
  };

  const logoItemStyle = {
    width: "120px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const partnerLogoStyle = {
    maxWidth: "100%",
    maxHeight: "100%",
  };

  const paginationDotsStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "20px",
  };

  const dotStyle = {
    width: "10px",
    height: "10px",
    backgroundColor: "#ccc",
    borderRadius: "50%",
    display: "inline-block",
  };

  const activeDotStyle = {
    backgroundColor: darkBlue, // Darker Blue for active dot
  };

  const viewAllLinkStyle = {
    color: brandBlue, // Primary Blue for the link
  };

  return (
    <div>
      {/* New White Background Section Above the Partner Section */}
      <section className="new-section" style={whiteSectionStyle}>
      </section>

      {/* Partners Section */}
      <section className="partners-section" style={sectionStyle}>
        {/* Add a smaller photo above Partners section */}
        <div className="partner-image" style={{ marginBottom: "40px" }}>
          <img
            src={logoCMS} // Replace this with your image path
            alt="Partner Banner"
            style={{
              width: "28%",  // Reduced width for the banner
              height: "auto",
              borderRadius: "10px",
              objectFit: "cover",
              margin: "0 auto", // Centering the image
            }}
          />
        </div>

        <div className="container">
          <div className="cta-button"></div>

          <div className="section-title" style={sectionTitleStyle}>
            <div className="title-underline" style={titleUnderlineStyle}></div>
            <h2 style={titleTextStyle}>Partners</h2>
          </div>

          <div className="partners-logos" style={logosContainerStyle}>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner1} alt="UPI" className="partner-logo" style={partnerLogoStyle} />
            </div>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner2} alt="UIN" className="partner-logo" style={partnerLogoStyle} />
            </div>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner3} alt="BAJAX" className="partner-logo" style={partnerLogoStyle} />
            </div>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner4} alt="Kraft Heinz" className="partner-logo" style={partnerLogoStyle} />
            </div>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner5} alt="Unilever" className="partner-logo" style={partnerLogoStyle} />
            </div>
            <div className="logo-item" style={logoItemStyle}>
              <img src={partner6} alt="Nestle" className="partner-logo" style={partnerLogoStyle} />
            </div>
          </div>

          <div className="pagination-dots" style={paginationDotsStyle}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((dot) => (
              <span
                key={dot}
                className={`dot ${dot === 5 ? 'active' : ''}`}
                style={dot === 5 ? { ...dotStyle, ...activeDotStyle } : dotStyle}
              ></span>
            ))}
          </div>

          <div className="view-all" style={{ textAlign: "center", marginTop: "20px" }}>
            <a href="#" className="view-all-link" style={viewAllLinkStyle}>
              View All Our Partners &gt;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
