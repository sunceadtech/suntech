import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Monitor, Palette, Zap, Shield, Globe, Rocket, ChevronRight, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const WebDevelopmentComponent = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored solutions built from scratch to meet your unique business requirements.",
      features: ["Custom Coding", "Scalable Architecture", "Performance Optimized"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Seamless experience across all devices - desktop, tablet, and mobile.",
      features: ["Mobile-First", "Cross-Platform", "Touch Optimized"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      features: ["Modern Design", "User-Centered", "Conversion Focused"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading speeds and optimized user experience.",
      features: ["Speed Optimization", "SEO Ready", "Core Web Vitals"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security & Maintenance",
      description: "Robust security measures and ongoing maintenance support.",
      features: ["SSL Certificates", "Regular Updates", "24/7 Monitoring"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online store solutions with payment integration.",
      features: ["Payment Gateways", "Inventory Management", "Order Tracking"]
    }
  ];

  const technologies = [
    { name: "React", color: "bg-blue-500", delay: "0s" },
    { name: "Next.js", color: "bg-black", delay: "0.1s" },
    { name: "Vue.js", color: "bg-green-500", delay: "0.2s" },
    { name: "Node.js", color: "bg-green-600", delay: "0.3s" },
    { name: "Python", color: "bg-yellow-500", delay: "0.4s" },
    { name: "MongoDB", color: "bg-green-700", delay: "0.5s" },
    { name: "PostgreSQL", color: "bg-blue-600", delay: "0.6s" },
    { name: "AWS", color: "bg-orange-500", delay: "0.7s" }
  ];

  const processSteps = [
    { step: "01", title: "Discovery & Planning", description: "Understanding your vision and requirements" },
    { step: "02", title: "Design & Prototyping", description: "Creating wireframes and interactive prototypes" },
    { step: "03", title: "Development", description: "Building your application with best practices" },
    { step: "04", title: "Testing & Launch", description: "Thorough testing and seamless deployment" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className={`text-center transform transition-all duration-1000 mt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center bg-purple-500/20 rounded-full px-6 py-2 mb-8 animate-bounce">
              <Rocket className="w-5 h-5 mr-2 text-purple-400" />
              <span className="text-purple-300 font-medium">Premium Web Development</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Craft Digital
              <br />
              <span className="text-white">Experiences</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into stunning, high-performance web applications that captivate users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                Start Your Project
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/portfolio"className="group border-2 border-purple-400 hover:bg-purple-400/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                View Portfolio
                <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-pink-500/20 rounded-full animate-bounce hidden lg:block"></div>
        <div className="absolute bottom-1/4 left-1/4 w-12 h-12 bg-blue-500/20 rounded-full animate-ping hidden lg:block"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  activeService === index ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-purple-400 mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge tools and frameworks for modern web development
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl text-center"
                style={{ animationDelay: tech.delay }}
              >
                <div className={`w-16 h-16 ${tech.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                  {tech.name.charAt(0)}
                </div>
                <h3 className="text-lg font-semibold group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                  <div className="text-6xl font-bold text-purple-500/30 mb-4 group-hover:text-purple-400/50 transition-colors">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-purple-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ChevronRight className="w-8 h-8 text-purple-400 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed", icon: <Rocket className="w-8 h-8" /> },
              { number: "100+", label: "Happy Clients", icon: <Star className="w-8 h-8" /> },
              { number: "5+", label: "Years Experience", icon: <Globe className="w-8 h-8" /> },
              { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and create something amazing together. Get in touch for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to ="/contact" className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              Get Free Quote
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+919873569000" className="group border-2 border-purple-400 hover:bg-purple-400/20 px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Schedule Call
              <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentComponent;