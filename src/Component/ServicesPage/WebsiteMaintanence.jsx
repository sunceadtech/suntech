import React, { useState, useEffect } from 'react';
import { Shield, Wrench, Server, AlertTriangle, CheckCircle, ArrowRight, Users, Trophy, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

function WebsiteMaintanence() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Website Maintenance",
      description: "Keep your website running smoothly with regular updates, backups, and monitoring.",
      features: ["Security Patches", "Performance Optimization", "Regular Backups", "Content Updates"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Website Security",
      description: "Protect your digital assets with comprehensive security solutions and threat monitoring.",
      features: ["Firewall Setup", "Malware Protection", "DDoS Prevention", "Security Audits"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Hosting & Uptime",
      description: "Ensure your site is always accessible with robust hosting and uptime monitoring.",
      features: ["99.9% Uptime", "Server Monitoring", "Fast Load Times", "Cloud Hosting"]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Emergency Support",
      description: "Rapid response team for website issues, downtime, or urgent fixes.",
      features: ["24/7 Monitoring", "Quick Response", "Issue Resolution", "Downtime Prevention"]
    }
  ];

  const stats = [
    { number: "300+", label: "Websites Maintained", icon: <Trophy className="w-6 h-6" /> },
    { number: "100+", label: "Clients Protected", icon: <Users className="w-6 h-6" /> },
    { number: "7+", label: "Years in Service", icon: <Clock className="w-6 h-6" /> },
    { number: "98%", label: "Issue Resolution Rate", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const processSteps = [
    { step: "01", title: "Assessment", desc: "Review current website health", icon: <Layers className="w-6 h-6" /> },
    { step: "02", title: "Implementation", desc: "Apply updates and security patches", icon: <Wrench className="w-6 h-6" /> },
    { step: "03", title: "Monitoring", desc: "Continuous monitoring and backups", icon: <Shield className="w-6 h-6" /> },
    { step: "04", title: "Support", desc: "Ongoing assistance for any issues", icon: <AlertTriangle className="w-6 h-6" /> }
  ];

  const technologies = ["WordPress", "Shopify", "HTML/CSS", "JavaScript", "Cloudflare", "SSL", "AWS", "Google Cloud"];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <section className="relative px-4 py-20 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl"></div>
          <div className={`relative max-w-7xl mx-auto text-center transform transition-all duration-1000 mt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full border border-purple-400/30 mb-8 backdrop-blur-sm">
              <Shield className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-medium">Website Maintenance & Security</span>
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
              Safeguard & Maintain
              <span className="block bg-gradient-to-r py-4 from-purple-400 to-blue-400 bg-clip-text text-transparent">Your Digital Presence</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reliable maintenance and robust security to keep your website fast, safe, and always online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
                Request Maintenance
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio" className="px-8 py-4 border-2 border-purple-400/50 rounded-xl font-semibold text-lg hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                View Case Studies
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-4 text-purple-400">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive maintenance and security tailored for your website</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className={`group relative p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${activeService === index ? 'ring-2 ring-purple-400/50' : ''}`} onClick={() => setActiveService(index)}>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-300 text-lg">{service.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold py-4  mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Technologies We Support</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Expertise across multiple platforms and technologies</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className={`px-6 py-3 bg-gradient-to-r from-purple-800/40 to-blue-800/40 rounded-full border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer transform delay-${index * 50}`}>
                <span className="text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">A simple and effective process to maintain and secure your website</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">{process.step}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Let's Secure Your Website Today</h2>
            <p className="text-xl text-gray-300 mb-8">Get in touch for tailored maintenance and security services</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/contact' className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  )
}

export default WebsiteMaintanence
