import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const createRipple = (event) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition">
          Kailash Enterprises
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition">About</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-600 font-medium transition">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition">Contact</Link>
        </div>
        <div className="md:hidden">
          <button 
            className="text-gray-700 hover:text-blue-600 relative overflow-hidden" 
            onClick={(e) => {
              createRipple(e);
              setIsOpen(!isOpen);
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-blue-600 font-medium transition" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-blue-600 font-medium transition" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/services" className="block text-gray-700 hover:text-blue-600 font-medium transition" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-blue-600 font-medium transition" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;