import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-30 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-blue-400 rounded-full opacity-25 animate-float"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-blue-100 rounded-full opacity-20 animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-blue-500 rounded-full opacity-40 animate-float"></div>
      </div>

      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 animate-fade-in">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-slide-up animate-typewriter">Welcome to Kailash Enterprises</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto animate-slide-up animate-delay-200">
              Empowering businesses with innovative solutions and unparalleled expertise. 
              Your trusted partner for growth and success.
            </p>
            <div className="space-x-4 animate-slide-up animate-delay-300">
              <Link to="/services" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
                Our Services
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white animate-fade-in animate-delay-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">About Kailash Enterprises</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                With over a decade of experience, Kailash Enterprises has been at the forefront of delivering 
                high-quality business solutions. We combine innovation, integrity, and excellence to help our 
                clients achieve their goals.
              </p>
            </div>

            {/* Animated Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center animate-fade-in animate-delay-100">
                <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse-glow">10+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-200">
                <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse-glow">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-300">
                <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse-glow">100+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center animate-fade-in animate-delay-500">
                <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse-glow">24/7</div>
                <p className="text-gray-600">Support Available</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center animate-slide-in-left">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-float">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Cutting-edge solutions tailored to your needs.</p>
              </div>
              <div className="text-center animate-slide-up animate-delay-200">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-delay-100 animate-float-delayed">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-gray-600">Uncompromising standards in everything we do.</p>
              </div>
              <div className="text-center animate-slide-in-right">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-in animate-delay-200 animate-float">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-gray-600">Building lasting relationships with our clients.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-16 bg-gray-100 animate-fade-in animate-delay-200">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-slide-up">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We offer a comprehensive range of services designed to drive your business forward.
              </p>
            </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-left relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse-glow"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Consulting</h3>
                <p className="text-gray-600 mb-4">Strategic guidance to optimize your operations and achieve sustainable growth.</p>
                <Link to="/services" className="text-blue-600 hover:underline transition-colors duration-300">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-up animate-delay-100 relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse-glow"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Development</h3>
                <p className="text-gray-600 mb-4">Custom software solutions built with modern technologies and best practices.</p>
                <Link to="/services" className="text-blue-600 hover:underline transition-colors duration-300">Learn More →</Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-slide-in-right relative overflow-hidden hover:scale-105 hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse-glow"></div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600">Support</h3>
                <p className="text-gray-600 mb-4">24/7 technical support and maintenance to keep your systems running smoothly.</p>
                <Link to="/services" className="text-blue-600 hover:underline transition-colors duration-300">Learn More →</Link>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white animate-fade-in animate-delay-300 relative overflow-hidden">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-white rounded-full animate-float"></div>
          </div>

          <div className="container mx-auto px-4 text-center animate-slide-up relative z-10">
            <h2 className="text-3xl font-bold mb-4 animate-pulse-glow">Ready to Get Started?</h2>
            <p className="text-xl mb-8">Contact us today to discuss how we can help your business succeed.</p>
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 animate-bounce-in animate-delay-200 hover:scale-110 hover:shadow-2xl inline-block">
              Get in Touch
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;