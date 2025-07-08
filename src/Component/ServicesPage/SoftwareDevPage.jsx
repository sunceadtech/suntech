import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Globe, Database, Shield, Zap, CheckCircle, ArrowRight, Users, Trophy, Clock, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const SoftwareDevPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Custom web applications built with modern frameworks and cutting-edge technologies.",
      features: ["React/Next.js", "Node.js Backend", "Cloud Deployment", "SEO Optimized"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      description: "Scalable server architectures and robust API development for enterprise solutions.",
      features: ["Microservices", "Database Design", "API Development", "Cloud Integration"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DevOps & Security",
      description: "Secure deployment pipelines and infrastructure management for optimal performance.",
      features: ["CI/CD Pipelines", "Security Audits", "Monitoring", "Scalability"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Trophy className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Clock className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const technologies = [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", 
    "PostgreSQL", "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl "></div>
        <div className={`relative max-w-7xl mx-auto text-center transform transition-all duration-1000 mt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full border border-purple-400/30 mb-8 backdrop-blur-sm">
            <Code className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-300 font-medium">Professional Software Development</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions with cutting-edge technology and innovative design
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              Start Your Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/portfolio" className="px-8 py-4 border-2 border-purple-400/50 rounded-xl font-semibold text-lg hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
              View Portfolio
            </Link>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center transform transition-all duration-700 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="flex justify-center mb-4 text-purple-400">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`group relative p-8 bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 ${activeService === index ? 'ring-2 ring-purple-400/50' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
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
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging the latest technologies to build robust and scalable solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className={`px-6 py-3 bg-gradient-to-r from-purple-800/40 to-blue-800/40 rounded-full border border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 hover:scale-105 transition-all duration-300 cursor-pointer transform delay-${index * 50}`}
              >
                <span className="text-gray-200 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A systematic approach to deliver exceptional software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your requirements and goals", icon: <Users className="w-6 h-6" /> },
              { step: "02", title: "Design", desc: "Creating intuitive user experiences", icon: <Layers className="w-6 h-6" /> },
              { step: "03", title: "Development", desc: "Building with best practices", icon: <Code className="w-6 h-6" /> },
              { step: "04", title: "Deployment", desc: "Launch and ongoing support", icon: <Zap className="w-6 h-6" /> }
            ].map((process, index) => (
              <div key={index} className="relative text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {process.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className="text-gray-300">{process.desc}</p>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-xs font-bold">
                  {process.step}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and turn your vision into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a herf="tel:+919873569000" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25">
              Get Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevPage;