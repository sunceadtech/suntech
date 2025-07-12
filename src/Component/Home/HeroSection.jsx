import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  
   const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '1000+', label: 'Projects Done' },
    { number: '15+', label: 'Team Members' },
    { number: '5+', label: 'Years Experience' }
  ];

  const features = [
    { icon: '🎯', title: 'Targeted Marketing', desc: 'Reach your ideal customers' },
    { icon: '📈', title: 'Growth Focused', desc: 'Measurable results & ROI' },
    { icon: '⚡', title: 'Fast Results', desc: 'Quick implementation' }
  ];

  return (
   <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#fefefe] to-blue-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 md:mt-6 bg-orange-100 text-orange-700 rounded-full border border-orange-200">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium">Leading Digital Marketing Experts</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                <span className="block">Accelerate Your</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">Business Growth</span>
                <span className="block">with Digital Power</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
                We specialize in delivering tailored digital marketing solutions that increase visibility, engage audiences, and drive measurable success.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 px-6 py-3 bg-white border border-gray-200 rounded-full hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div className="text-gray-800">
                    <div className="font-semibold text-sm">{feature.title}</div>
                    <div className="text-xs text-gray-500">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-blue-900 hover:to-blue-800 transition-all duration-300 shadow-lg"
              >
                Get Free Consultation
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-800">{stat.number}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="hidden lg:block">
            <div className="w-full h-96 rounded-2xl bg-white border border-gray-200 flex flex-col items-start justify-start text-gray-800 p-8 space-y-4 shadow-lg mt-[-40px]">
              <h2 className="text-3xl font-bold mb-2">Empowering Your Online Presence</h2>
              <p className="text-sm text-gray-600">
                From strategy to execution, we help brands grow through:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>SEO & Content Excellence</li>
                <li>Social Media Engagement</li>
                <li>Data-Driven Advertising</li>
                <li>Creative Design Solutions</li>
              </ul>
              <Link
                to="/blog"
                className="mt-4 inline-block px-6 py-3 bg-blue-900 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


