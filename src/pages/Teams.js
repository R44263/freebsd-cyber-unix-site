import React from 'react';
import { Users, Shield, Target, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Teams = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold mb-12 text-center">Security Teams</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamCard
              icon={<Target className="w-12 h-12 text-red-500" />}
              title="Red Team"
              color="red"
              description="Offensive security operations and penetration testing."
              responsibilities={[
                "Penetration Testing",
                "Vulnerability Assessment",
                "Social Engineering",
                "Exploit Development"
              ]}
              tools={[
                "Metasploit",
                "Burp Suite",
                "Nmap",
                "Custom Exploits"
              ]}
            />
            <TeamCard
              icon={<Shield className="w-12 h-12 text-blue-500" />}
              title="Blue Team"
              color="blue"
              description="Defensive security monitoring and incident response."
              responsibilities={[
                "Security Monitoring",
                "Incident Response",
                "Threat Hunting",
                "System Hardening"
              ]}
              tools={[
                "SIEM",
                "IDS/IPS",
                "Firewall Management",
                "Log Analysis"
              ]}
            />
            <TeamCard
              icon={<Zap className="w-12 h-12 text-purple-500" />}
              title="Purple Team"
              color="purple"
              description="Collaborative security assessment and optimization."
              responsibilities={[
                "Attack Simulation",
                "Defense Validation",
                "Process Improvement",
                "Team Coordination"
              ]}
              tools={[
                "Automation Tools",
                "Testing Frameworks",
                "Collaboration Platforms",
                "Documentation Tools"
              ]}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const TeamCard = ({ icon, title, color, description, responsibilities, tools }) => {
  const colorClasses = {
    red: 'border-red-500 bg-red-500/10',
    blue: 'border-blue-500 bg-blue-500/10',
    purple: 'border-purple-500 bg-purple-500/10'
  };

  return (
    <div className={`p-6 rounded-lg border ${colorClasses[color]}`}>
      <div className="flex flex-col items-center mb-6">
        {icon}
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside text-gray-400">
          {responsibilities.map((item, index) => (
            <li key={index} className="mb-1">{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Key Tools:</h3>
        <ul className="list-disc list-inside text-gray-400">
          {tools.map((tool, index) => (
            <li key={index} className="mb-1">{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Teams;
