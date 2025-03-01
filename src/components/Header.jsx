import React, { useState } from 'react';
import logoCMS from "../assets/images/logoCMS.jpg"; 

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showDonateForm, setShowDonateForm] = useState(false); // State for showing donation form

  // Function to toggle the dropdown visibility
  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null); // Close if the same dropdown is clicked
    } else {
      setActiveDropdown(dropdownName); // Open the clicked dropdown
    }
  };

  // Function to toggle the donation modal
  const toggleDonateForm = (event) => {
    event.preventDefault(); // Prevent any link or navigation behavior
    setShowDonateForm(!showDonateForm); // Toggle visibility of the donation form
  };

  return (
    <header className="bg-black bg-opacity-80 fixed w-full top-0 z-50">
      <div className="container flex justify-between items-center py-4 px-8">
        <div className="flex items-center">
          <img src={logoCMS} alt="FOI Logo" className="w-22 h-16" />
        </div>

        <nav className="flex">
          <ul className="flex space-x-4">
            {/* Existing dropdown items */}
            <li className="relative">
              <button onClick={() => toggleDropdown('who')} className="text-white py-2 px-4">
                Who We Are |
              </button>
              {activeDropdown === 'who' && (
                <div className="absolute top-full left-0 bg-blue-600 min-w-[200px] rounded-md shadow-md z-10">
                  <a href="/About" className="block text-white py-3 px-4 hover:bg-blue-700">About YMP</a>
                  <a href="#Partner" className="block text-white py-3 px-4 hover:bg-blue-700">Partner</a>
                  <a href="/Contact" className="block text-white py-3 px-4 hover:bg-blue-700">Contact</a>
                </div>
              )}
            </li>

            {/* Another dropdown items */}
            <li className="relative">
              <button onClick={() => toggleDropdown('what')} className="text-white py-2 px-4">
                What We Do |
              </button>
              {activeDropdown === 'what' && (
                <div className="absolute top-full left-0 bg-blue-600 min-w-[200px] rounded-md shadow-md z-10">
                  <a href="#progra" className="block text-white py-3 px-4 hover:bg-blue-700">Program</a>
                  <a href="#campaign" className="block text-white py-3 px-4 hover:bg-blue-700">Campaign</a>
                  <a href="#study" className="block text-white py-3 px-4 hover:bg-blue-700">Study</a>
                </div>
              )}
            </li>

            {/* Moving Together Dropdown */}
            <li className="relative">
              <button onClick={() => toggleDropdown('moving')} className="text-white py-2 px-4">
                Moving Together |
              </button>
              {activeDropdown === 'moving' && (
                <div className="absolute top-full left-0 bg-blue-600 min-w-[200px] rounded-md shadow-md z-10">
                  <a href="#volunteers" className="block text-white py-3 px-4 hover:bg-blue-700">Volunteers</a>
                  <a href="#donation-in-nature" className="block text-white py-3 px-4 hover:bg-blue-700">Donation in Nature</a>
                  <a href="#donate-to-help" className="block text-white py-3 px-4 hover:bg-blue-700">Donate to Help</a>
                </div>
              )}
            </li>

            {/* Donation Button */}
            <li>
              <button onClick={toggleDonateForm} className="text-white py-2 px-4">
                Donation
              </button>
            </li>
          </ul>
        </nav>

        {/* Search Section */}
        <div className="flex flex-col items-end">
          <div className="flex items-center mb-1">
            <input type="text" placeholder="Search" className="p-2 rounded-full border-none w-[200px]" />
            <button className="bg-none border-none ml-[-30px] cursor-pointer">
              <span className="text-black"><i className="fas fa-search"></i></span>
            </button>
          </div>
          <div className="text-white text-sm">Hotline: 0821 - 1923 - 1293</div>
        </div>
      </div>

      {/* Donation Modal (Popup) */}
      {showDonateForm && (
        <div style={{
          display: 'block',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',  // Dark background
          zIndex: 9999,  // Ensure modal is above everything else
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '30px',
            borderRadius: '8px',
            width: '400px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}>
            <button
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#004f9f', // Color of the close button
              }}
              onClick={toggleDonateForm}
            >
              ×
            </button>
            <h3>Donate Now</h3>
            <form>
              <input
                type="text"
                placeholder="Full Name"
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                required
              />
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                required
              />
              <input
                type="number"
                placeholder="Donation Amount"
                style={{
                  width: '100%',
                  padding: '10px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '1px solid #ddd',
                }}
                required
              />
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '5px',
                  backgroundColor: '#0066cc', // Primary blue color
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
