import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, Send, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight,
  Menu, X, Star, BarChart3, Shield, Globe, Calendar, Eye,
  MessageSquare, Heart, Award, Smartphone, Monitor, Tablet
} from 'lucide-react';
import { Link } from 'react-router-dom';

const EmailMarketingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [emailCount, setEmailCount] = useState(0);
  const [openRate, setOpenRate] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const intervalRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated counters
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setEmailCount(prev => prev < 50000 ? prev + 1247 : 50000);
      setOpenRate(prev => prev < 89.5 ? prev + 2.1 : 89.5);
    }, 100);

    setTimeout(() => {
      clearInterval(intervalRef.current);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  // Intersection Observer for animations
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

  // Auto-rotate features
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Smart Segmentation",
      desc: "AI-powered audience segmentation for personalized campaigns",
      detail: "Automatically segment your audience based on behavior, preferences, and engagement patterns"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Advanced Analytics",
      desc: "Real-time insights and comprehensive performance tracking",
      detail: "Track opens, clicks, conversions, and ROI with detailed visual reports"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Workflows",
      desc: "Set up complex email sequences that run on autopilot",
      detail: "Create sophisticated drip campaigns with conditional logic and triggers"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Deliverability Optimization",
      desc: "Ensure your emails reach the inbox, not spam folders",
      detail: "Advanced spam testing, domain authentication, and reputation management"
    }
  ];

  const stats = [
    { number: "4.2B", label: "Global Email Users", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
    { number: "4200%", label: "Average ROI", icon: <TrendingUp className="w-6 h-6" />, color: "from-green-500 to-emerald-500" },
    { number: "99%", label: "People Check Daily", icon: <Eye className="w-6 h-6" />, color: "from-purple-500 to-violet-500" },
    { number: "42", label: "ROI per 1 Spent", icon: <Award className="w-6 h-6" />, color: "from-orange-500 to-red-500" }
  ];

  const services = [
    {
      icon: <Send className="w-8 h-8" />,
      title: "Campaign Creation",
      desc: "Beautiful, responsive email templates that convert",
      features: ["Drag & Drop Builder", "Mobile Optimization", "A/B Testing", "Custom HTML"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "List Management",
      desc: "Organize and grow your subscriber base effectively",
      features: ["Smart Segmentation", "Lead Magnets", "Signup Forms", "Data Hygiene"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Analytics",
      desc: "Track, measure, and optimize your email performance",
      features: ["Real-time Reports", "Conversion Tracking", "Heat Maps", "ROI Analysis"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Marketing Automation",
      desc: "Automated sequences that nurture leads into customers",
      features: ["Drip Campaigns", "Behavioral Triggers", "Workflow Builder", "Smart Scheduling"]
    }
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "E-commerce Pro",
      text: "Our email revenue increased by 340% in just 3 months. The automation features are game-changing!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "David Thompson",
      company: "SaaS Startup",
      text: "Best Digital Strategy Consultant platform we've used. The deliverability rates are outstanding.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Emily Chen",
      company: "Digital Agency",
      text: "Client retention improved dramatically thanks to their segmentation tools.",
      rating: 5,
      avatar: "👩‍🎨"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/month",
      description: "Perfect for small businesses",
      features: ["Up to 10,000 contacts", "Unlimited emails", "Basic templates", "Email support"],
      isPopular: false
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/month",
      description: "For growing businesses",
      features: ["Up to 50,000 contacts", "Advanced automation", "A/B testing", "Priority support", "Custom templates"],
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/month",
      description: "For large organizations",
      features: ["Unlimited contacts", "Advanced analytics", "Custom integrations", "Dedicated manager", "White-label options"],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">


      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          ></div>
          <div
            className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 animate-fade-in-up">
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 100,000+ Businesses</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="block bg-gradient-to-r from-white via-blue-200 py-4 to-purple-200 bg-clip-text text-transparent animate-gradient-x">
                Digital Strategy Consultant
              </span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x-reverse">
                That Converts
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Create stunning email campaigns, automate your marketing, and turn subscribers into loyal customers with our powerful platform.
            </p>

            {/* Live Stats */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {emailCount.toLocaleString()}+
                </div>
                <div className="text-sm text-gray-400">Emails Sent Today</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {openRate.toFixed(1)}%
                </div>
                <div className="text-sm text-gray-400">Average Open Rate</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/contact" className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <button className="group px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40 w-full sm:w-auto">
                <span className="flex items-center justify-center gap-2">
                  <BarChart3 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  View Demo
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Floating Email Icons */}
        <div className="absolute top-1/2 left-5 animate-float">
          <Mail className="w-8 h-8 text-blue-400/50" />
        </div>
        <div className="absolute top-1/3 right-5 animate-float-delayed">
          <Send className="w-6 h-6 text-purple-400/50" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float-slow">
          <Heart className="w-5 h-5 text-pink-400/50" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="mb-4 flex justify-center">
                  <div className={`p-4 bg-gradient-to-br ${stat.color} bg-opacity-20 rounded-xl group-hover:bg-opacity-30 transition-all duration-300`}>
                    <div className="text-white">
                      {stat.icon}
                    </div>
                  </div>
                </div>
                <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" data-animate>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize email campaigns that drive results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Feature Cards */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl border transition-all duration-500 cursor-pointer ${activeFeature === index
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 transform scale-105'
                    : 'bg-white/5 border-white/10 hover:border-blue-500/30'
                    }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-all duration-300 ${activeFeature === index ? 'bg-blue-500 text-white' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-2">{feature.desc}</p>
                      {activeFeature === index && (
                        <p className="text-blue-300 text-sm animate-fade-in">{feature.detail}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Visualization */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 border border-white/10">
                <div className="space-y-4">
                  {/* Mock Email Interface */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Campaign Dashboard</div>
                      <div className="text-xs text-gray-400">Real-time analytics</div>
                    </div>
                  </div>

                  {/* Animated Bars */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Open Rate</span>
                      <span className="text-green-400">89.5%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full animate-progress" style={{ width: '89.5%' }}></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Click Rate</span>
                      <span className="text-purple-400">34.2%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full animate-progress-delayed" style={{ width: '34.2%' }}></div>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span>Conversion</span>
                      <span className="text-orange-400">12.8%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full animate-progress-slow" style={{ width: '12.8%' }}></div>
                    </div>
                  </div>

                  {/* Device Icons */}
                  <div className="flex justify-around pt-6 border-t border-white/10">
                    <div className="text-center">
                      <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                      <div className="text-xs text-gray-400">Mobile</div>
                      <div className="text-sm font-medium">68%</div>
                    </div>
                    <div className="text-center">
                      <Monitor className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                      <div className="text-xs text-gray-400">Desktop</div>
                      <div className="text-sm font-medium">25%</div>
                    </div>
                    <div className="text-center">
                      <Tablet className="w-6 h-6 mx-auto mb-2 text-pink-400" />
                      <div className="text-xs text-gray-400">Tablet</div>
                      <div className="text-sm font-medium">7%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl  py-6 sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Complete Digital Problems Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to execution, we provide everything you need for successful Digital Strategy Consultant
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index}
                className="group p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10"
                style={{ animationDelay: `${index * 150}ms` }}>
                <div className="mb-6 text-blue-400 group-hover:text-purple-400 transition-colors duration-300 group-hover:scale-110 transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              See how businesses like yours are growing with our platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index}
                className="p-8 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 group"
                style={{ animationDelay: `${index * 200}ms` }}>
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed group-hover:text-white transition-colors duration-300">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-blue-300">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300">
              Flexible pricing that grows with your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index}
                className={`relative p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${plan.isPopular
                  ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-blue-500/50 transform scale-105'
                  : 'bg-gradient-to-br from-white/5 to-white/10 border-white/10 hover:border-purple-500/50'
                  }`}>
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <div className="mb-8">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.isPopular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40'
                    }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <Mail className="w-16 h-16 mx-auto text-blue-400 mb-4" />
            <h2 className="text-3xl sm:text-5xl py-6 font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Ready to Transform Your Digital Strategy Consultant?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already growing their revenue with our powerful Digital Strategy Consultant platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group">
              <span className="flex items-center justify-center gap-2">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link >

            <button className="px-8 py-4 border-2 border-white/20 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40">
              Schedule Demo
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x-reverse {
          0%, 100% { background-position: 100% 50%; }
          50% { background-position: 0% 50%; }
        }
        
        @keyframes progress {
          0% { width: 0%; }
          100% { width: var(--width); }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
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
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-gradient-x-reverse {
          background-size: 200% 200%;
          animation: gradient-x-reverse 3s ease infinite;
        }
        
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        
        .animate-progress-delayed {
          animation: progress 2s ease-out 0.5s forwards;
        }
        
        .animate-progress-slow {
          animation: progress 2s ease-out 1s forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-float,
          .animate-float-delayed,
          .animate-float-slow {
            animation-duration: 4s;
          }
        }
        
        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
};

export default EmailMarketingPage;