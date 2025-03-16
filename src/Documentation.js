import React, { useState, useRef, useEffect } from 'react';
import { Shield, Sword, Activity, BookOpen, Search, Download, Terminal, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const Documentation = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const sections = {
    download: useRef(null),
    installation: useRef(null), // Changed back to 'installation'
    teams: useRef(null),
    tools: useRef(null)
  };

  // Handle scroll and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section in sections) {
        const element = sections[section].current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    sections[sectionId].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toolDocs = {
    redTeam: [
      {
        name: "Metasploit",
        description: "Industry-standard penetration testing framework providing a complete environment for exploit development, testing, and execution.",
        installation: "apt-get install metasploit-framework",
        usage: [
          "msfconsole",
          "search <exploit_name>",
          "use <exploit_path>",
          "show options"
        ],
        documentation: "https://docs.metasploit.com/",
        category: "Exploitation"
      },
      {
        name: "Nmap",
        description: "Powerful network discovery and security auditing tool used for network exploration and security scanning.",
        installation: "apt-get install nmap",
        usage: [
          "nmap -sV [target]",
          "nmap -sC [target]",
          "nmap -p- [target]",
          "nmap -A [target]"
        ],
        documentation: "https://nmap.org/docs.html",
        category: "Network Scanning"
      },
      {
        name: "Aircrack-ng",
        description: "Complete suite for wireless network security assessment, focusing on WiFi security testing.",
        installation: "apt-get install aircrack-ng",
        usage: [
          "airmon-ng start [interface]",
          "airodump-ng [interface]",
          "aireplay-ng [options] [interface]",
          "aircrack-ng [capture file]"
        ],
        documentation: "https://www.aircrack-ng.org/documentation.html",
        category: "Wireless Security"
      },
      {
        name: "Wireshark",
        description: "Network protocol analyzer that captures and interactively analyzes network traffic in real-time.",
        installation: "apt-get install wireshark",
        usage: [
          "wireshark -i [interface]",
          "wireshark -r [capture file]",
          "tshark -i [interface]"
        ],
        documentation: "https://www.wireshark.org/docs/",
        category: "Network Analysis"
      }
    ],
    blueTeam: [
      {
        name: "Suricata",
        description: "High-performance Network IDS, IPS and Network Security Monitoring engine.",
        installation: "apt-get install suricata",
        usage: [
          "suricata -c /etc/suricata/suricata.yaml -i eth0",
          "tail -f /var/log/suricata/fast.log",
          "suricata-update"
        ],
        documentation: "https://suricata.readthedocs.io/",
        category: "Network Security"
      },
      {
        name: "Zeek",
        description: "Powerful network analysis framework focusing on security monitoring and threat detection.",
        installation: "apt-get install zeek",
        usage: [
          "zeekctl start",
          "zeek -r pcap_file",
          "zeekctl status"
        ],
        documentation: "https://docs.zeek.org/",
        category: "Network Monitoring"
      },
      {
        name: "Snort",
        description: "Network intrusion prevention and detection system with real-time traffic analysis.",
        installation: "apt-get install snort",
        usage: [
          "snort -dev -l log",
          "snort -c /etc/snort/snort.conf",
          "snort -T -c /etc/snort/snort.conf"
        ],
        documentation: "https://www.snort.org/documents",
        category: "Network Security"
      },
      {
        name: "Fail2ban",
        description: "Intrusion prevention system that protects computer servers from brute-force attacks.",
        installation: "apt-get install fail2ban",
        usage: [
          "fail2ban-client start",
          "fail2ban-client status",
          "fail2ban-client set jail banip"
        ],
        documentation: "https://www.fail2ban.org/wiki/",
        category: "Access Control"
      }
    ],
    purpleTeam: [
      {
        name: "Atomic Red Team",
        description: "Library of tests mapped to MITRE ATT&CK framework for security control testing.",
        installation: "Install-Module -Name AtomicRedTeam",
        usage: [
          "Import-Module AtomicRedTeam",
          "Invoke-AtomicTest T1003",
          "Get-AtomicTechnique -Path T1003"
        ],
        documentation: "https://atomicredteam.io/docs",
        category: "Security Testing"
      },
      {
        name: "Caldera",
        description: "Automated adversary emulation system for testing defensive solutions.",
        installation: "git clone https://github.com/mitre/caldera.git",
        usage: [
          "python3 server.py",
          "Access web interface",
          "Create and run operations"
        ],
        documentation: "https://caldera.readthedocs.io/",
        category: "Adversary Emulation"
      },
      {
        name: "BloodHound",
        description: "Active Directory security assessment tool for identifying attack paths.",
        installation: "apt-get install bloodhound",
        usage: [
          "neo4j console",
          "bloodhound --no-sandbox",
          "SharpHound.ps1 collection"
        ],
        documentation: "https://bloodhound.readthedocs.io/",
        category: "AD Security"
      },
      {
        name: "HELK",
        description: "Threat Hunting platform with advanced analytics capabilities using ELK stack.",
        installation: "git clone https://github.com/Cyb3rWard0g/HELK.git",
        usage: [
          "./helk_install.sh",
          "docker-compose up",
          "Access Kibana dashboard"
        ],
        documentation: "https://thehelk.com/docs",
        category: "Threat Hunting"
      }
    ],
    greenTeam: [
      {
        name: "Oracle VirtualBox",
        description: "Powerful x86 and AMD64/Intel64 virtualization product for enterprise and home use.",
        installation: "Download from virtualbox.org",
        usage: [
          "Create new VM: File > New",
          "Import appliance: File > Import Appliance",
          "Snapshot management",
          "Network configuration"
        ],
        benefits: [
          "Run multiple OS simultaneously",
          "Isolated testing environment",
          "Snapshot and rollback capability",
          "Cross-platform compatibility"
        ],
        documentation: "https://www.virtualbox.org/manual/",
        category: "Virtualization"
      },
      {
        name: "Docker",
        description: "Platform for developing, shipping, and running applications in containers.",
        installation: "curl -fsSL https://get.docker.com | sh",
        usage: [
          "docker run <image>",
          "docker-compose up",
          "docker build -t myapp .",
          "docker ps"
        ],
        benefits: [
          "Lightweight containerization",
          "Consistent development environments",
          "Rapid deployment",
          "Resource efficiency"
        ],
        documentation: "https://docs.docker.com/",
        category: "Containerization"
      }
    ]
  };

  const installationGuide = {
    installerTypes: [
      {
        title: "Complete Offline Installer",
        description: "A full installation package that includes all components and customization options",
        features: [
          "Offline installation capability",
          "Complete security tools suite",
          "Custom configuration options",
          "Verified stable release"
        ],
        setupSteps: [
          "Download the complete installer ISO from the download page",
          "Verify the ISO checksum using: sha256sum cyberunix-xx.iso",
          "Create bootable USB using: dd if=cyberunix-xx.iso of=/dev/sdX bs=4M",
          "Boot from USB and follow the installation wizard"
        ]
      },
      {
        title: "Weekly Development Build",
        description: "Latest development version with newest features and updates",
        features: [
          "Latest security patches",
          "Experimental features",
          "Weekly updates",
          "Testing builds"
        ],
        setupSteps: [
          "Download the weekly build ISO from the download page",
          "Verify the ISO checksum using: sha256sum cyberunix-weekly.iso",
          "Create bootable USB using: dd if=cyberunix-weekly.iso of=/dev/sdX bs=4M",
          "Boot from USB and follow the installation wizard"
        ]
      }
    ],
    systemRequirements: {
      minimum: {
        cpu: "2 cores, 2.0 GHz",
        ram: "4 GB",
        storage: "20 GB",
        network: "Ethernet/Wi-Fi"
      },
      recommended: {
        cpu: "4+ cores, 3.0 GHz",
        ram: "8+ GB",
        storage: "50+ GB SSD",
        network: "Gigabit Ethernet"
      }
    }
  };

  const teamDescriptions = {
    redTeam: {
      title: "Red Team",
      icon: <Sword className="w-12 h-12 text-red-500" />,
      description: "Red Teams are offensive security professionals who simulate real-world attacks to test an organization's security posture. They:",
      responsibilities: [
        "Conduct penetration testing and vulnerability assessments",
        "Perform social engineering and physical security testing",
        "Identify and exploit security weaknesses",
        "Help improve defensive capabilities through attack simulation"
      ],
      benefits: [
        "Validates security controls effectiveness",
        "Provides real-world attack scenarios",
        "Helps prioritize security investments",
        "Identifies gaps in detection and response"
      ]
    },
    blueTeam: {
      title: "Blue Team",
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      description: "Blue Teams are defensive security professionals responsible for protecting and maintaining an organization's security posture. They:",
      responsibilities: [
        "Monitor and analyze security alerts",
        "Implement and maintain security controls",
        "Respond to and investigate security incidents",
        "Develop and update security policies"
      ],
      benefits: [
        "Provides continuous security monitoring",
        "Ensures rapid incident response",
        "Maintains security compliance",
        "Protects critical assets and data"
      ]
    },
    purpleTeam: {
      title: "Purple Team",
      icon: <Activity className="w-12 h-12 text-purple-500" />,
      description: "Purple Teams represent the collaboration between Red and Blue teams, focusing on maximum security improvement through shared knowledge. They:",
      responsibilities: [
        "Facilitate communication between Red and Blue teams",
        "Ensure lessons learned are implemented",
        "Optimize security testing and defense",
        "Validate security improvements"
      ],
      benefits: [
        "Improves overall security effectiveness",
        "Accelerates security maturity",
        "Enhances team collaboration",
        "Provides comprehensive security approach"
      ]
    }
  };

  const filteredTools = Object.entries(toolDocs).reduce((acc, [team, tools]) => {
    if (activeCategory === 'all' || activeCategory === team) {
      const filtered = tools.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filtered.length > 0) {
        acc[team] = filtered;
      }
    }
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      
      {/* Mobile Navigation - Always visible on mobile */}
      <div className="lg:hidden sticky top-0 z-50 bg-gray-800 p-4 border-b border-gray-700">
        <nav className="flex overflow-x-auto whitespace-nowrap space-x-4 px-2 py-1">
          <button
            onClick={() => scrollToSection('download')}
            className={`flex-none text-sm px-4 py-2 rounded-lg transition ${
              activeSection === 'download' ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Download
          </button>
          <button
            onClick={() => scrollToSection('installation')}
            className={`flex-none text-sm px-4 py-2 rounded-lg transition ${
              activeSection === 'installation' ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Installation
          </button>
          <button
            onClick={() => scrollToSection('teams')}
            className={`flex-none text-sm px-4 py-2 rounded-lg transition ${
              activeSection === 'teams' ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Teams
          </button>
          <button
            onClick={() => scrollToSection('tools')}
            className={`flex-none text-sm px-4 py-2 rounded-lg transition ${
              activeSection === 'tools' ? 'bg-green-500 text-white' : 'text-gray-300 hover:bg-gray-700'
            }`}
          >
            Tools
          </button>
        </nav>
      </div>

      <div className="container mx-auto py-12 px-4 flex">
        {/* Sidebar Navigation */}
        <aside className="hidden lg:block w-64 fixed h-80 bg-gray-800 p-6 rounded-lg mr-8">
          <nav className="space-y-2">
            <h3 className="text-lg font-bold mb-4">Documentation</h3>
            <button
              onClick={() => scrollToSection('download')}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeSection === 'download' 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Download and Installation
            </button>
            <button
              onClick={() => scrollToSection('installation')} // Changed to 'installation'
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeSection === 'installation' // Changed to 'installation'
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Installation Guide
            </button>
            <button
              onClick={() => scrollToSection('teams')}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeSection === 'teams' 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Security Teams Overview
            </button>
            <button
              onClick={() => scrollToSection('tools')}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeSection === 'tools' 
                  ? 'bg-green-500 text-white' 
                  : 'hover:bg-gray-700'
              }`}
            >
              Security Tools
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-72 w-full">
          <h1 className="text-4xl font-bold mb-12 text-center">Documentation</h1>

          {/* Download Section */}
          <section ref={sections.download} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Download className="text-green-500" />
              Download and Installation
            </h2>
            
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <p className="text-gray-300 mb-4">
                CyberUnix OS is available in two versions. Choose the one that best suits your needs:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {installationGuide.installerTypes.map((installer, index) => (
                  <div key={index} className="border border-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">{installer.title}</h3>
                    <p className="text-gray-400 mb-4">{installer.description}</p>
                    <ul className="space-y-2 mb-4">
                      {installer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/download" 
                      className="inline-flex items-center gap-2 text-green-500 hover:text-green-400"
                    >
                      <Download className="w-4 h-4" />
                      Download Now
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation Guide */}
            <section ref={sections.installation} >
            <div className="bg-gray-800 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Terminal className="text-green-500" />
                Installation Guide
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-4">System Requirements</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Minimum Requirements */}
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Minimum Requirements</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>CPU: {installationGuide.systemRequirements.minimum.cpu}</li>
                        <li>RAM: {installationGuide.systemRequirements.minimum.ram}</li>
                        <li>Storage: {installationGuide.systemRequirements.minimum.storage}</li>
                        <li>Network: {installationGuide.systemRequirements.minimum.network}</li>
                      </ul>
                    </div>
                    
                    {/* Recommended Requirements */}
                    <div className="border border-gray-700 rounded-lg p-4">
                      <h5 className="font-semibold mb-2">Recommended</h5>
                      <ul className="space-y-2 text-gray-300">
                        <li>CPU: {installationGuide.systemRequirements.recommended.cpu}</li>
                        <li>RAM: {installationGuide.systemRequirements.recommended.ram}</li>
                        <li>Storage: {installationGuide.systemRequirements.recommended.storage}</li>
                        <li>Network: {installationGuide.systemRequirements.recommended.network}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Installation Steps</h4>
                  <div className="space-y-4">
                    {installationGuide.installerTypes[0].setupSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            </section>
          </section>

          {/* Security Teams Overview */}
          <section ref={sections.teams} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <Shield className="text-green-500" />
              Security Teams Overview
            </h2>
            
            {Object.entries(teamDescriptions).map(([team, info]) => (
              <div key={team} className="mb-8 bg-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  {info.icon}
                  <h3 className="text-2xl font-bold">{info.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4">{info.description}</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Key Responsibilities</h4>
                    <ul className="space-y-2">
                      {info.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${team === 'redTeam' ? 'red' : team === 'blueTeam' ? 'blue' : 'purple'}-500`} />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 text-lg">Benefits</h4>
                    <ul className="space-y-2">
                      {info.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full bg-${team === 'redTeam' ? 'red' : team === 'blueTeam' ? 'blue' : 'purple'}-500`} />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Tools Documentation */}
          <section ref={sections.tools} className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <BookOpen className="text-green-500" />
              Security Tools
            </h2>
            
            {/* Search and Filter */}
            <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search tools..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:border-green-500 focus:ring-1 focus:ring-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 rounded-lg ${
                    activeCategory === 'all' ? 'bg-green-600' : 'bg-gray-800'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setActiveCategory('redTeam')}
                  className={`px-4 py-2 rounded-lg ${
                    activeCategory === 'redTeam' ? 'bg-red-600' : 'bg-gray-800'
                  }`}
                >
                  Red Team
                </button>
                <button
                  onClick={() => setActiveCategory('blueTeam')}
                  className={`px-4 py-2 rounded-lg ${
                    activeCategory === 'blueTeam' ? 'bg-blue-600' : 'bg-gray-800'
                  }`}
                >
                  Blue Team
                </button>
                <button
                  onClick={() => setActiveCategory('purpleTeam')}
                  className={`px-4 py-2 rounded-lg ${
                    activeCategory === 'purpleTeam' ? 'bg-purple-600' : 'bg-gray-800'
                  }`}
                >
                  Purple Team
                </button>
                <button
                  onClick={() => setActiveCategory('greenTeam')}
                  className={`px-4 py-2 rounded-lg ${
                    activeCategory === 'greenTeam' ? 'bg-green-600' : 'bg-gray-800'
                  }`}
                >
                  Green Team
                </button>
              </div>
            </div>

            {/* Documentation Content */}
            {Object.entries(filteredTools).map(([team, tools]) => (
              <section key={team} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  {team === 'redTeam' && <Sword className="w-8 h-8 text-red-500" />}
                  {team === 'blueTeam' && <Shield className="w-8 h-8 text-blue-500" />}
                  {team === 'purpleTeam' && <Activity className="w-8 h-8 text-purple-500" />}
                  {team === 'greenTeam' && <Terminal className="w-8 h-8 text-green-500" />}
                  <h2 className="text-2xl font-bold">
                    {team === 'redTeam' ? 'Red Team' : team === 'blueTeam' ? 'Blue Team' : team === 'purpleTeam' ? 'Purple Team' : 'Green Team'} Tools
                  </h2>
                </div>
                
                <div className="space-y-6">
                  {tools.map((tool) => (
                    <ToolDocCard key={tool.name} tool={tool} teamType={team} />
                  ))}
                </div>
              </section>
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

const ToolDocCard = ({ tool, teamType }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const variantStyles = {
    redTeam: 'border-red-500 bg-red-500/10',
    blueTeam: 'border-blue-500 bg-blue-500/10',
    purpleTeam: 'border-purple-500 bg-purple-500/10',
    greenTeam: 'border-green-500 bg-green-500/10'
  };

  return (
    <div className={`p-6 rounded-lg border ${variantStyles[teamType]}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{tool.name}</h3>
          <span className="text-sm text-gray-400">{tool.category}</span>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-gray-400 hover:text-white"
        >
          {isExpanded ? 'Show Less' : 'Show More'}
        </button>
      </div>
      
      <p className="text-gray-300 mb-4">{tool.description}</p>
      
      {isExpanded && (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Installation</h4>
            <div className="bg-gray-800 p-3 rounded">
              <code className="text-green-500">{tool.installation}</code>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Usage Examples</h4>
            <ul className="space-y-2">
              {tool.usage.map((example, index) => (
                <li key={index} className="bg-gray-800 p-3 rounded">
                  <code className="text-green-500">{example}</code>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Official Documentation</h4>
            <a
              href={tool.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              {tool.documentation}
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documentation;
