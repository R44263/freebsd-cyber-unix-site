import React from 'react';
import { Shield, Lock, Activity, Users, Monitor, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const CyberUnixOS = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              Portable Hardened Unix Security Toolkit
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Advanced security and penetration testing toolkit for Red, Blue, and Purple teams.
              Built on Unix for maximum security and reliability.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/download" 
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition"
              >
                Download Toolkit
              </Link>
              <Link 
                to="/documentation" 
                className="border border-green-600 hover:bg-green-600/10 px-6 py-3 rounded-lg font-semibold transition"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </section>


        {/* Features Grid */}
        <section id="features" className="py-16 px-4 bg-gray-800/50">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Shield className="w-6 h-6 text-green-500" />}
                title="System Hardening"
                description="Advanced Unix-based security features and kernel-level protection"
              />
              <FeatureCard 
                icon={<Lock className="w-6 h-6 text-green-500" />}
                title="Penetration Testing"
                description="Comprehensive suite of ethical hacking and security assessment tools"
              />
              <FeatureCard 
                icon={<Activity className="w-6 h-6 text-green-500" />}
                title="Real-time Monitoring"
                description="Advanced threat detection and security incident monitoring"
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6 text-green-500" />}
                title="Team Collaboration"
                description="Integrated tools for Red, Blue, and Purple team operations"
              />
              <FeatureCard 
                icon={<Monitor className="w-6 h-6 text-green-500" />}
                title="Security Dashboard"
                description="Centralized monitoring and management interface"
              />
              <FeatureCard 
                icon={<Code className="w-6 h-6 text-green-500" />}
                title="Automation Tools"
                description="Automated security assessment and response capabilities"
              />
            </div>

          </div>
        </section>

        {/* Team Sections */}
        <section id="teams" className="py-16 px-4">
          <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-center">Security Teams</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TeamCard 
                title="Red Team"
                color="red"
                description="Offensive security operations and penetration testing capabilities"
              />
              <TeamCard 
                title="Blue Team"
                color="blue"
                description="Defensive security monitoring and incident response"
              />
              <TeamCard 
                title="Purple Team"
                color="purple"
                description="Collaborative security assessment and optimization"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
      <div className="mb-4">{icon}</div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

const TeamCard = ({ title, color, description }) => {
  const colorClasses = {
    red: 'bg-red-500/10 border-red-500',
    blue: 'bg-blue-500/10 border-blue-500',
    purple: 'bg-purple-500/10 border-purple-500'
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]} hover:scale-105 transition`}>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CyberUnixOS;