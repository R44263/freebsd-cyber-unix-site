import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-green-500" />
              <span className="text-xl font-bold">CyberUnix OS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Advanced security and penetration testing toolkit built on Unix for maximum security and reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-500 transition">Home</Link></li>
              <li><Link to="/documentation" className="text-gray-400 hover:text-green-500 transition">Documentation</Link></li>
              <li><Link to="/tools" className="text-gray-400 hover:text-green-500 transition">Tools</Link></li>
              <li><a href="#features" className="text-gray-400 hover:text-green-500 transition">Features</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-500 transition">Security</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CyberUnix OS. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-green-500 transition text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition text-sm">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
