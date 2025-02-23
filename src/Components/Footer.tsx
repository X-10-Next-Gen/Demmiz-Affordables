// import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = ({ companyName }: { companyName: string }) => {
  return (
    <footer className="bg-purple-900 text-yellow-400 py-6  border-t-2 border-t-yellow-400">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold">{companyName}</h2>
        
        {/* Navigation Links */}
        <div className="mt-3 flex flex-wrap justify-center space-x-6 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Shop</a>
          <a href="#" className="hover:text-white transition">Contact</a>
        </div>

        {/* Social Media Icons */}
        <div className="mt-4 flex justify-center space-x-4 text-xl">
          <a href="#" className="hover:text-white transition"><FaFacebook /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-gray-300">
          © {new Date().getFullYear()} Perfume Haven. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
