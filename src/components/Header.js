import React, { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const isActive = (path) => {
    return location.pathname === path ? "text-green-500" : "text-white";
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsSidebarOpen(false);
    } else if (location.pathname !== '/') {
      window.location.href = '/#' + sectionId;
    }
  };

  return (
    <>
      <header className="bg-gray-800 p-4 border-b border-gray-700">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-green-500" />
            <h1 className="text-2xl font-bold text-white">CyberUnix OS</h1>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden text-white hover:text-green-500"
          >
            <Menu className="w-6 h-6" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className={`${isActive('/')} hover:text-green-500 transition`}
            >
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-white hover:text-green-500 transition"
            >
              Features
            </button>
           
            <button 
              onClick={() => scrollToSection('teams')}
              className="text-white hover:text-green-500 transition"
            >
              Teams
            </button>
            <Link 
              to="/tools" 
              className={`${isActive('/tools')} hover:text-green-500 transition`}
            >
              Tools
            </Link>
            <Link 
              to="/download" 
              className={`${isActive('/download')} hover:text-green-500 transition`}
            >
              Download
            </Link>
            <Link 
              to="/documentation" 
              className={`${isActive('/documentation')} hover:text-green-500 transition`}
            >
              Documentation
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${
        isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`fixed inset-y-0 right-0 w-64 bg-gray-800 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4">
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-green-500 float-right"
            >
              <X className="w-6 h-6" />
            </button>
            
            <nav className="mt-12 flex flex-col space-y-4">
              <Link 
                to="/" 
                onClick={() => setIsSidebarOpen(false)}
                className={`${isActive('/')} hover:text-green-500 transition`}
              >
                Home
              </Link>
              <button 
                onClick={() => scrollToSection('features')}
                className="text-white hover:text-green-500 transition text-left"
              >
                Features
              </button>
              <Link 
                to="/tools" 
                onClick={() => setIsSidebarOpen(false)}
                className={`${isActive('/tools')} hover:text-green-500 transition`}
              >
                Tools
              </Link>
              <button 
                onClick={() => scrollToSection('teams')}
                className="text-white hover:text-green-500 transition text-left"
              >
                Teams
              </button>
              <Link 
                to="/download" 
                onClick={() => setIsSidebarOpen(false)}
                className={`${isActive('/download')} hover:text-green-500 transition`}
              >
                Download
              </Link>
              <Link 
                to="/documentation" 
                onClick={() => setIsSidebarOpen(false)}
                className={`${isActive('/documentation')} hover:text-green-500 transition`}
              >
                Documentation
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
