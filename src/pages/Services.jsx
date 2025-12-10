import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions designed to accelerate your growth and optimize your operations.
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition animate-slide-in-left">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce-in">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Strategic Consulting</h3>
            <p className="text-gray-600 mb-6">
              Expert guidance to navigate complex business challenges. We provide data-driven insights 
              and actionable strategies to help you make informed decisions and achieve your objectives.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Business process optimization</li>
              <li>• Market analysis and research</li>
              <li>• Risk assessment and management</li>
              <li>• Growth strategy development</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition animate-pulse">
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition animate-slide-up animate-delay-100">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce-in animate-delay-100">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Custom Development</h3>
            <p className="text-gray-600 mb-6">
              Tailored software solutions built with modern technologies. From web applications to 
              mobile apps, we create scalable, secure, and user-friendly products that drive results.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• Web application development</li>
              <li>• Mobile app development</li>
              <li>• API integration and development</li>
              <li>• Database design and optimization</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition animate-pulse animate-delay-100">
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition animate-slide-in-right">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce-in animate-delay-200">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Technical Support</h3>
            <p className="text-gray-600 mb-6">
              Reliable 24/7 support to keep your systems running smoothly. Our expert team is always 
              ready to assist with troubleshooting, maintenance, and optimization of your technology stack.
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li>• 24/7 technical support</li>
              <li>• System monitoring and maintenance</li>
              <li>• Performance optimization</li>
              <li>• Security updates and patches</li>
            </ul>
            <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition animate-pulse animate-delay-200">
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center animate-fade-in animate-delay-300">
          <h2 className="text-3xl font-bold mb-4 animate-slide-up">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-6 animate-slide-up animate-delay-100">
            Let's discuss how our services can help you achieve your goals.
          </p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition animate-bounce-in animate-delay-200">
            Get Started Today
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;