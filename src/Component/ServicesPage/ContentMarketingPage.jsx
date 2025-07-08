import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Menu, X, Star, Link } from 'lucide-react';
import { Links } from 'react-router-dom';

const ContentMarketingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: <Target className="w-8 h-8" />, title: "Strategy Development", desc: "Comprehensive content strategies that align with your business goals" },
    { icon: <TrendingUp className="w-8 h-8" />, title: "Content Creation", desc: "High-quality, engaging content across all formats and platforms" },
    { icon: <Users className="w-8 h-8" />, title: "Audience Engagement", desc: "Build meaningful connections with your target audience" },
    { icon: <Zap className="w-8 h-8" />, title: "Performance Analytics", desc: "Data-driven insights to optimize your content performance" }
  ];

  const stats = [
    { number: "300%", label: "Average ROI Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "2M+", label: "Content Views Generated", icon: <Users className="w-6 h-6" /> },
    { number: "150+", label: "Successful Campaigns", icon: <Target className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    { name: "Sarah Johnson", company: "TechCorp", text: "Their content strategy transformed our brand presence completely.", rating: 5 },
    { name: "Mike Chen", company: "StartupX", text: "ROI increased by 400% within just 6 months of working with them.", rating: 5 },
    { name: "Emma Davis", company: "GrowthCo", text: "Professional, creative, and results-driven. Highly recommended!", rating: 5 }
  ];

  const contentTypes = ["Blog Posts", "Video Content", "Social Media", "Email Campaigns", "Infographics", "Podcasts"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
     
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-pulse-slow mb-8">
              <span className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-sm font-medium border border-purple-500/30">
                🚀 #1 Content Marketing Agency
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-gradient">
                Transform Your Brand
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-gradient-reverse">
                Through Content
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create compelling content strategies that drive engagement, build communities, and deliver measurable results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-1/3 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-float-slow"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} 
                   className="text-center group cursor-pointer"
                   style={{animationDelay: `${index * 200}ms`}}>
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive content marketing solutions tailored to your unique business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} 
                   className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-purple-500/10 hover:to-pink-500/10"
                   style={{animationDelay: `${index * 150}ms`}}>
                <div className="mb-6 text-purple-400 group-hover:text-pink-400 transition-colors duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Content We Create
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {contentTypes.map((type, index) => (
              <div key={index}
                   className="px-6 py-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 cursor-pointer group"
                   style={{animationDelay: `${index * 100}ms`}}>
                <span className="text-white group-hover:text-purple-200 transition-colors duration-300">
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}
                   className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 group"
                   style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-purple-300">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Ready to Transform Your Content Strategy?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of successful brands who've revolutionized their marketing with our proven content strategies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to= "/contact"className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group">
              <span className="flex items-center justify-center gap-2">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
            
            <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-gradient-reverse {
          background-size: 200% 200%;
          animation: gradient-reverse 3s ease infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default ContentMarketingPage;