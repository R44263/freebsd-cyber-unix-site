import React, { useState } from 'react';
import { Download, Terminal, Box, HardDrive, Clock, CloudOff, History, Coffee, CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DownloadKit = () => {
  const [selectedVersion, setSelectedVersion] = useState('latest');

  const versions = [
    { version: '1.2.0', date: '2024-03-15', size: '2.8 GB' },
    { version: '1.1.0', date: '2024-02-01', size: '2.6 GB' },
    { version: '1.0.0', date: '2024-01-15', size: '2.5 GB' }
  ];

  // Function to handle file download
  const handleDownload = (fileType) => {
    // Set the download URL based on file type
    let downloadUrl = '';
    
    if (fileType === 'vmware') {
      // Direct download URL to the specific file in your server
      downloadUrl = '/oses/cyberunix_freebsd_final.zip';
    } else if (fileType === 'offline') {
      // For future implementation
      alert('Offline installer coming soon!');
      return;
    } else if (fileType === 'development') {
      // For future implementation
      alert('Development build coming soon!');
      return;
    }

    // Create an anchor element and trigger download
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'cyberunix_freebsd_final.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto py-12 px-4">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4">Download CyberUnix OS</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose your preferred installation method. All versions include core security features and tools.
            </p>
          </section>

          {/* Download Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <DownloadCard
              title="Complete Offline Installer"
              icon={<CloudOff className="w-8 h-8 text-yellow-500" />}
              description="Full installation package with all components and customization options (Coming Soon)"
              version="1.3.0-dev"
              size="2.8 GB"
              features={[
                "Offline installation",
                "Full customization options",
                "All security tools included",
                "Under development"
              ]}
              variant="experimental"
              onDownload={() => handleDownload('offline')}
            />

            <DownloadCard
              title="Weekly Development Build"
              icon={<Clock className="w-8 h-8 text-yellow-500" />}
              description="Latest development features and security updates (Coming Soon)"
              version="1.2.1-dev"
              size="2.9 GB"
              features={[
                "Latest features",
                "Security updates",
                "Under development",
                "Weekly updates planned"
              ]}
              variant="experimental"
              onDownload={() => handleDownload('development')}
            />

            <DownloadCard
              title="VMware Compatible (Oracle)"
              icon={<HardDrive className="w-8 h-8 text-yellow-500" />}
              description="VMware compatible image for easy setup"
              version="1.0.0"
              size="10.3 GB"
              features={[
                "Download and unzip",
                "Original file size is ~28 GB",
                "Add to VMware and open",
                "Username: root (no password)",
                "Hack user: hack / Hashcat@1918"
              ]}
              variant="stable"
              onDownload={() => handleDownload('vmware')}
            />
          </div>

          {/* Installation Guide */}
          <section className="bg-gray-800 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Terminal className="text-green-500" />
              Quick Installation Guide
            </h2>
            <div className="bg-yellow-500/10 border border-yellow-500 rounded-lg p-4 mb-6">
              <p className="text-yellow-500">
                ⚠️ Prerequisites: Before proceeding with CyberUnix installation, please ensure you have installed the official FreeBSD version from{' '}
                <a href="https://www.freebsd.org/where/" className="underline hover:text-yellow-400" target="_blank" rel="noopener noreferrer">
                  FreeBSD.org
                </a>
              </p>
            </div>
            <div className="space-y-4">
              <InstallStep
                number="1"
                title="Download the installer or run the command"
                command="fetch https://cyberunix.site/install-updater.sh"
              />
              <InstallStep
                number="2"
                title="Make it executable"
                command="chmod +x install-updater.sh"
              />
              <InstallStep
                number="3"
                title="Run the installer"
                command="./install-updater.sh"
              />
              <InstallStep
                number="4"
                title="Check for updates"
                command="update-system"
              />
              <InstallStep
                number="5"
                title="Download VMware compatible image"
                command="fetch https://cyberunix.site/vmware-image.zip"
              />
              <InstallStep
                number="6"
                title="Unzip the downloaded file"
                command="unzip vmware-image.zip"
              />
              <InstallStep
                number="7"
                title="Add the unzipped file to VMware"
                command="Follow VMware instructions to add the image"
              />
              <InstallStep
                number="8"
                title="Open VMware and login"
                command="Username: root (no password), Hack user: hack / Hashcat@1918"
              />
            </div>
          </section>

          {/* System Requirements */}
          <section className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Coffee className="text-green-500" />
                Minimum Requirements
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CPU: 2 cores, 2.0 GHz</li>
                <li>• RAM: 4 GB</li>
                <li>• Storage: 50 GB</li>
                <li>• Network: Ethernet/Wi-Fi</li>
              </ul>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-500" />
                Recommended
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CPU: 4+ cores, 3.0 GHz</li>
                <li>• RAM: 8+ GB</li>
                <li>• Storage: 50+ GB SSD</li>
                <li>• Network: Gigabit Ethernet</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const DownloadCard = ({ title, icon, description, version, size, features, variant = 'stable', onDownload }) => {
  return (
    <div className={`p-6 rounded-lg border ${
      variant === 'experimental' ? 'border-yellow-500 bg-gray-800' : 'border-green-500 bg-gray-800'
    }`}>
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`text-sm ${variant === 'experimental' ? 'text-yellow-500' : 'text-green-500'}`}>
            Version {version}
          </span>
        </div>
      </div>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="mb-4">
        {/* <span className="text-sm text-gray-400">Size: {size}</span> */}
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-300">
            <div className={`w-1.5 h-1.5 rounded-full ${
              variant === 'experimental' ? 'bg-yellow-500' : 'bg-green-500'
            }`} />
            {feature}
          </li>
        ))}
      </ul>
      <button 
        onClick={onDownload}
        className={`w-full py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          variant === 'experimental' 
            ? 'border border-yellow-500 hover:bg-yellow-500/10'
            : 'bg-green-600 hover:bg-green-700'
        }`}>
        <Download className="w-4 h-4" />
        Download Now
      </button>
    </div>
  );
};

const InstallStep = ({ number, title, command }) => {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <code className="text-sm bg-gray-900 px-3 py-1 rounded text-green-500">{command}</code>
      </div>
    </div>
  );
};

export default DownloadKit;