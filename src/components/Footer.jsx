import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-gray-700 text-white">
      {/* Subscription Bar */}
      <div className="bg-gray-600 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Subscribe Form */}
          <div className="flex w-full max-w-md">
            <input 
              type="email" 
              placeholder="sample@mail.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 p-3 rounded-l-full bg-gray-200 text-black placeholder-gray-500"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-full hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <i className="fab fa-facebook-f"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center text-white">
              <i className="fab fa-twitter"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white">
              <i className="fab fa-instagram"></i>
            </button>
            <button className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white">
              <i className="fab fa-youtube"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* About Us */}
          <div>
            <h3 className="text-blue-600 font-bold text-xl mb-4">About Us</h3>
            <p className="text-gray-300 mb-4">
              FundUnity CMS is dedicated to helping individuals and organizations come together to fund and support important causes.
            </p>
            <div className="text-gray-400">
              <p><i className="fas fa-phone mr-2"></i> 0852 - 1310 - 3997</p>
              <p><i className="fas fa-envelope mr-2"></i> yukmariproject@gmail.com</p>
              <p><i className="fas fa-map-marker-alt mr-2"></i>PT. Yuk Mari Project Indonesia, Komplek Bandung Indah Raya, Blok C13/No.17, Kelurahan Mekarjaya, Kecamatan Rancasari, Kota Bandung, Jawa Barat 40286</p>
            </div>

            {/* Google Map Embed */}
            <div className="mt-6">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.4104645402554!2d107.67505759999999!3d-6.9608114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c300070c60c1%3A0xddd74453cb6ef1a!2sPT.%20YUKMARI%20PROJECT%20INDONESIA!5e0!3m2!1sid!2sid!4v1740843636608!5m2!1sid!2sid"
                width="100%" 
                height="300" 
                style={{ border: '0', borderRadius: '8px' }} 
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="text-center mt-4">
                <a 
                  href="https://maps.app.goo.gl/7pdXU75EiCQLyc746" 
                  target="_blank" 
                  className="text-blue-400 hover:underline"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>

          {/* Who We Are Section */}
          <div>
            <h3 className="text-blue-600 font-bold text-xl mb-4">Who We Are</h3>
            <ul className="text-gray-300">
              <li><span className="hover:text-blue-400 cursor-pointer">About YMP</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Climate Change</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Partners</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Annual Report</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Award</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Career</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Contact</span></li>
            </ul>
          </div>

          {/* Moving Together Section */}
          <div>
            <h3 className="text-blue-600 font-bold text-xl mb-4">Moving Together</h3>
            <ul className="text-gray-300">
              <li><span className="hover:text-blue-400 cursor-pointer">Volunteers</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Donation in Nature</span></li>
              <li><span className="hover:text-blue-400 cursor-pointer">Donate to Help Children and the Elderly</span></li>
            </ul>
          </div>
        </div>

        {/* What We Do Section */}
        <div className="mt-12">
          <h3 className="text-blue-600 font-bold text-xl mb-4">What We Do</h3>
          <ul className="text-gray-300">
            <li><span className="hover:text-blue-400 cursor-pointer">Program</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Campaign</span></li>
            <li><span className="hover:text-blue-400 cursor-pointer">Study</span></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
