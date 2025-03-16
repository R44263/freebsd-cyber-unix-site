import React from 'react';
import { Shield, Sword, Activity, Terminal, Monitor, Box } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Tools = () => {
  const toolsList = {
    redTeam: [
      {
        name: "Metasploit",
        description: "Advanced penetration testing framework",
        category: "Exploitation",
        command: "msfconsole",
        features: [
          "Exploit development and testing",
          "Vulnerability scanning",
          "Post-exploitation tools",
          "Extensive module library"
        ]
      },
      {
        name: "Nmap",
        description: "Network discovery and security scanning",
        category: "Reconnaissance",
        command: "nmap [options] target",
        features: [
          "Port scanning",
          "Service/OS detection",
          "Network mapping",
          "Script automation"
        ]
      },
      {
        name: "Aircrack-ng",
        description: "Wireless network security assessment",
        category: "Wireless",
        command: "aircrack-ng [options]",
        features: [
          "WEP/WPA cracking",
          "Packet sniffing",
          "Network detection",
          "Attack simulation"
        ]
      },
      {
        name: "Wireshark",
        description: "Network protocol analyzer",
        category: "Network Analysis",
        command: "wireshark -i interface",
        features: [
          "Packet capture",
          "Protocol analysis",
          "Traffic inspection",
          "Network debugging"
        ]
      }
    ],
    blueTeam: [
      {
        name: "Suricata",
        description: "Network IDS/IPS",
        category: "Network Security",
        command: "suricata -c config.yaml -i interface",
        features: [
          "Intrusion detection",
          "Traffic monitoring",
          "Protocol analysis",
          "Alert generation"
        ]
      },
      {
        name: "Zeek",
        description: "Network analysis framework",
        category: "Network Monitoring",
        command: "zeekctl start",
        features: [
          "Traffic analysis",
          "Protocol parsing",
          "Security monitoring",
          "Event logging"
        ]
      },
      {
        name: "Snort",
        description: "Network IPS",
        category: "Network Security",
        command: "snort -c config.conf -i interface",
        features: [
          "Traffic inspection",
          "Threat prevention",
          "Rule-based detection",
          "Packet logging"
        ]
      },
      {
        name: "Fail2ban",
        description: "Intrusion prevention",
        category: "Access Control",
        command: "fail2ban-client start",
        features: [
          "Brute force protection",
          "Log monitoring",
          "IP blocking",
          "Service protection"
        ]
      }
    ],
    virtualization: [
      {
        name: "Oracle VMware",
        description: "Enterprise virtualization platform",
        category: "Virtualization",
        command: "vmware",
        features: [
          "Multiple OS environments",
          "Isolated testing environments",
          "Snapshot capabilities",
          "Network isolation"
        ]
      },
      {
        name: "Docker",
        description: "Container platform",
        category: "Containerization",
        command: "docker run [options]",
        features: [
          "Lightweight containers",
          "Quick deployment",
          "Resource isolation",
          "Microservices architecture"
        ]
      }
    ],
    purpleTeam: [
      {
        name: "Atomic Red Team",
        description: "Security test library",
        category: "Testing",
        command: "invoke-atomicredteam test",
        features: [
          "ATT&CK framework",
          "Test automation",
          "Coverage mapping",
          "Detection validation"
        ]
      },
      {
        name: "Caldera",
        description: "Automated adversary emulation",
        category: "Emulation",
        command: "caldera server",
        features: [
          "Attack simulation",
          "TTPs automation",
          "Custom adversaries",
          "Operation planning"
        ]
      },
      {
        name: "BloodHound",
        description: "AD security assessment",
        category: "Assessment",
        command: "bloodhound --start",
        features: [
          "Path analysis",
          "Privilege mapping",
          "Attack visualization",
          "Domain assessment"
        ]
      },
      {
        name: "HELK",
        description: "Hunting ELK platform",
        category: "Threat Hunting",
        command: "helk start",
        features: [
          "Log analysis",
          "Threat hunting",
          "Data visualization",
          "Analytics platform"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">Security Tools Arsenal</h1>

        {/* Red Team Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Sword className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-bold">Red Team Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {toolsList.redTeam.map((tool) => (
              <ToolCard key={tool.name} tool={tool} variant="red" />
            ))}
          </div>
        </section>

        {/* Blue Team Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield className="w-8 h-8 text-blue-500" />
            <h2 className="text-2xl font-bold">Blue Team Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {toolsList.blueTeam.map((tool) => (
              <ToolCard key={tool.name} tool={tool} variant="blue" />
            ))}
          </div>
        </section>

        {/* Virtualization Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Box className="w-8 h-8 text-green-500" />
            <h2 className="text-2xl font-bold">Virtualization Platforms</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {toolsList.virtualization.map((tool) => (
              <ToolCard key={tool.name} tool={tool} variant="green" />
            ))}
          </div>
        </section>

        {/* Purple Team Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Activity className="w-8 h-8 text-purple-500" />
            <h2 className="text-2xl font-bold">Purple Team Tools</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {toolsList.purpleTeam.map((tool) => (
              <ToolCard key={tool.name} tool={tool} variant="purple" />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const ToolCard = ({ tool, variant }) => {
  const variantStyles = {
    red: 'border-red-500 bg-red-500/10',
    blue: 'border-blue-500 bg-blue-500/10',
    purple: 'border-purple-500 bg-purple-500/10',
    green: 'border-green-500 bg-green-500/10'
  };

  return (
    <div className={`p-6 rounded-lg border ${variantStyles[variant]}`}>
      <div className="flex items-center gap-3 mb-4">
        <Terminal className={`w-6 h-6 text-${variant}-500`} />
        <div>
          <h3 className="text-xl font-bold">{tool.name}</h3>
          <span className={`text-sm text-${variant}-500`}>{tool.category}</span>
        </div>
      </div>
      <p className="text-gray-300 mb-4">{tool.description}</p>
      <div className="bg-gray-800 p-4 rounded mb-4">
        <code className="text-sm text-green-500">{tool.command}</code>
      </div>
      <ul className="space-y-2">
        {tool.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <div className={`w-1.5 h-1.5 rounded-full bg-${variant}-500`} />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tools;
