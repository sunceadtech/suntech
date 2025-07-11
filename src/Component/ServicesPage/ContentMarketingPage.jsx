import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Menu, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContentMarketingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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
        <div className="max-w-7xl mx-auto text-center">
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
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              aria-label="Contact our team to start your content marketing strategy"
            >
              <span className="flex items-center gap-2">
                Contact Content Marketing Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-pointer">
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
            <Link
              to="/contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 group"
              aria-label="Book your free content strategy session"
            >
              <span className="flex items-center justify-center gap-2">
                Book Free Strategy Session
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>

            <button
              className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              aria-label="Schedule a 1-on-1 content marketing consultation"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContentMarketingPage;