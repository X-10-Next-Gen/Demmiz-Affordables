import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = ({ companyName }: { companyName: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-purple-900 shadow-md shadow-gray-700 text-white p-5 border-b-2 border-b-yellow-400">
      <div className="flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <Link to="/">{companyName}</Link>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 rounded-2xl">
          {/* <Link to="/" className="hover:text-yellow-400 transition">Home</Link> */}
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/shop" className="hover:text-yellow-400 transition">Shop</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <nav className="md:hidden bg-purple-700 py-4 rounded-2xl">
          <ul className="flex flex-col items-center space-y-4">
            <li><Link to="/" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/shop" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Shop</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
