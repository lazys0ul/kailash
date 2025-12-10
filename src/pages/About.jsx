import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const revealOnScroll = () => {
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden page-transition">
      {/* Cursor Glow Effect */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />
      <Navbar />
      <main className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About Kailash Enterprises</h1>
            <p className="text-xl text-gray-600">
              Building the future of business solutions with innovation and integrity.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 mb-12 animate-slide-up animate-delay-300 hover-lift reveal card-shimmer">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2014, Kailash Enterprises began as a small consulting firm with a big vision: 
              to revolutionize how businesses approach technology and growth. Over the years, we've grown 
              into a comprehensive solutions provider, serving clients across various industries.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey has been marked by continuous learning, adaptation, and a commitment to excellence. 
              We've embraced emerging technologies, built lasting partnerships, and consistently delivered 
              results that exceed expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md p-8 animate-slide-in-left hover-tilt hover-lift reveal-left card-shimmer">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative, reliable, and scalable solutions that drive growth, 
                efficiency, and competitive advantage in an ever-evolving marketplace.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 animate-slide-in-right hover-tilt hover-lift reveal-right card-shimmer">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of business solutions, recognized for our expertise, integrity, 
                and commitment to client success across the globe.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 animate-slide-up animate-delay-200 hover-lift reveal card-shimmer">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center animate-slide-in-left reveal-scale">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Expertise</h4>
                <p className="text-gray-600 text-sm">Decades of combined experience in business solutions.</p>
              </div>
              <div className="text-center animate-slide-up animate-delay-100 reveal-scale">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-delay-100">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Client-Focused</h4>
                <p className="text-gray-600 text-sm">Your success is our top priority.</p>
              </div>
              <div className="text-center animate-slide-in-right reveal-scale">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-delay-200">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600 text-sm">Always staying ahead with cutting-edge solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;