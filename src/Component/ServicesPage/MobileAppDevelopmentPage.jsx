import React, { useState, useEffect } from "react";
import {
  Smartphone,
  Code,
  Zap,
  Shield,
  Users,
  Trophy,
  ArrowRight,
  Check,
  Star,
  Play,
  ChevronDown,
  Globe,
  Cpu,
  Database,
} from "lucide-react";
import TestimonialComponent from "../Home/TestimonialComponent";
import { Link } from "react-router-dom";

const MobileAppDevelopmentPage = () => {
  const [activeTab, setActiveTab] = useState("ios");
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Smartphone,
      title: "Native iOS Development",
      desc: "Swift & Objective-C expertise for premium iOS experiences",
    },
    {
      icon: Code,
      title: "Android Development",
      desc: "Kotlin & Java solutions for Android ecosystem",
    },
    {
      icon: Globe,
      title: "Cross-Platform Apps",
      desc: "React Native & Flutter for multi-platform reach",
    },
    {
      icon: Cpu,
      title: "Progressive Web Apps",
      desc: "Modern web technologies for app-like experiences",
    },
    {
      icon: Database,
      title: "Backend Integration",
      desc: "Robust APIs and cloud services integration",
    },
    {
      icon: Shield,
      title: "App Security",
      desc: "Enterprise-grade security and data protection",
    },
  ];

  const features = [
    "Custom UI/UX Design",
    "Real-time Synchronization",
    "Push Notifications",
    "In-App Purchases",
    "Analytics Integration",
    "Cloud Storage",
    "Offline Functionality",
    "Social Media Integration",
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc",
      text: "Exceptional mobile app development. Our user engagement increased by 300%!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "RetailPro",
      text: "Professional team delivered our e-commerce app ahead of schedule with amazing quality.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "HealthTech Solutions",
      text: "Their expertise in healthcare apps helped us achieve regulatory compliance seamlessly.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Apps Developed" },
    { number: "10M+", label: "Downloads Generated" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto mt-6 px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transform transition-all duration-1000 ${
                isVisible.hero
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-12 opacity-0"
              }`}
              id="hero"
              data-animate
            >
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full text-sm font-medium animate-pulse">
                <Zap className="w-4 h-4 mr-2" />
                #1 Mobile App Development Agency
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Build{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Powerful
                </span>{" "}
                Mobile Apps
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your ideas into stunning mobile applications that
                captivate users and drive business growth. From concept to
                deployment, we craft exceptional digital experiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
                  aria-label="Start your mobile app development project by contacting our team"
                >
                  Start Your Mobile App Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link to='/blog'>
                <button
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center"
                  aria-label="Watch a demo of our mobile app development services"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Service Demo
                </button>
                </Link>
              </div>
            </div>
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible.hero
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl animate-pulse"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-6">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-bounce`}
                        style={{
                          animationDelay: `${i * 0.2}s`,
                          animationDuration: "2s",
                        }}
                      >
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-white" />
                        </div>
                        <div className="h-2 bg-gray-200 rounded mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div
            className={`grid grid-cols-2 lg:grid-cols-4 gap-8 transform transition-all duration-1000 ${
              isVisible.stats
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="stats"
            data-animate
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text mb-2 group-hover:scale-110 transform transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.services
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="services"
            data-animate
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Development
              </span>{" "}
              Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From native iOS and Android apps to cross-platform solutions, we
              deliver cutting-edge mobile experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 border border-gray-100 hover:border-blue-200 ${
                  isVisible.services
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transform transition-all duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Tabs Section */}
      <section className="py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible.platforms
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="platforms"
            data-animate
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
              Multi-Platform{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Excellence
              </span>
            </h2>

            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-2xl p-2 shadow-lg">
                {["ios", "android", "cross-platform"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-8 py-3 rounded-xl font-semibold capitalize transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {tab.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  {activeTab === "ios" && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-bold text-gray-900">
                        iOS Development
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Create premium iOS applications with native performance
                        using Swift and the latest iOS frameworks. We ensure
                        your app meets Apple's strict guidelines and delivers
                        exceptional user experiences.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "SwiftUI",
                          "Core Data",
                          "ARKit",
                          "App Store Optimization",
                        ].map((tech) => (
                          <div key={tech} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === "android" && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-bold text-gray-900">
                        Android Development
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Build powerful Android applications using Kotlin and
                        modern Android architecture patterns. Reach billions of
                        users across diverse Android devices with optimized
                        performance.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "Kotlin",
                          "Jetpack Compose",
                          "Room Database",
                          "Google Play Console",
                        ].map((tech) => (
                          <div key={tech} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {activeTab === "cross-platform" && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-bold text-gray-900">
                        Cross-Platform Solutions
                      </h3>
                      <p className="text-gray-600 text-lg">
                        Maximize your reach with cross-platform development
                        using React Native and Flutter. One codebase, multiple
                        platforms, faster time-to-market.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          "React Native",
                          "Flutter",
                          "Shared Codebase",
                          "Faster Development",
                        ].map((tech) => (
                          <div key={tech} className="flex items-center">
                            <Check className="w-5 h-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl p-8 transform hover:scale-105 transition-all duration-500">
                    <div className="w-full h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-24 h-24 text-white animate-bounce" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.features
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="features"
            data-animate
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every app we build comes packed with modern features and
              capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-l-4 border-gradient-to-b from-blue-500 to-purple-500 ${
                  isVisible.features
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  borderImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6) 1",
                }}
              >
                <div className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="font-semibold text-gray-800">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialComponent />

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center max-w-4xl mx-auto transform transition-all duration-1000 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-12 opacity-0"
            }`}
            id="cta"
            data-animate
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8">
              Ready to Build Your
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text block">
                Dream App?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Join hundreds of successful businesses who trust us with their
              mobile app development. Let's turn your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                Get Started Today
                <ArrowRight className="inline-block ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 text-sm text-gray-500">
              ✓ Free consultation ✓ No obligation ✓ 48-hour response time
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default MobileAppDevelopmentPage;
