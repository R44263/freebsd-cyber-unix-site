import React from 'react';
import { Shield, Lock, Activity, Users, Monitor, Code } from 'lucide-react';
import Header from '../components/Header';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Features</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-green-500" />}
            title="System Hardening"
            description="Advanced Unix-based security features and kernel-level protection mechanisms to secure your infrastructure."
            details={[
              "Kernel hardening configurations",
              "Security policy enforcement",
              "Access control management",
              "System integrity protection"
            ]}
          />
          {/* Add more feature cards with expanded details */}
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-green-500" />}
            title="Penetration Testing"
            description="Comprehensive suite of ethical hacking and security assessment tools."
            details={[
              "Network vulnerability scanning",
              "Exploit development tools",
              "Wireless security testing",
              "Web application security"
            ]}
          />
          <FeatureCard
            icon={<Activity className="w-12 h-12 text-green-500" />}
            title="Real-time Monitoring"
            description="Advanced threat detection and security incident monitoring capabilities."
            details={[
              "Live system monitoring",
              "Threat detection algorithms",
              "Incident response automation",
              "Performance analytics"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, details }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition">
      <div className="mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <ul className="list-disc list-inside text-gray-400">
        {details.map((detail, index) => (
          <li key={index} className="mb-2">{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
