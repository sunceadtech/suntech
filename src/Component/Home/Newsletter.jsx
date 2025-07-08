import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = ({ email, setEmail, handleNewsletterSubmit, socialLinks, delay, isVisible, setHoveredSocial, hoveredSocial }) => (
  <div className={`transform transition-all duration-700 delay-${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">Stay Updated</h4>
    <p className="text-gray-300 mb-6 text-sm sm:text-base">Get the latest news and updates delivered to your inbox.</p>
    <div className="space-y-4">
      <div className="relative group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
        />
      </div>
      <button
        onClick={handleNewsletterSubmit}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transform hover:scale-105 flex items-center justify-center space-x-2 text-sm sm:text-base group"
      >
        <Send className="w-4 h-4 group-hover:translate-x-1" />
        <span>Subscribe</span>
      </button>
    </div>
    <div className="mt-8">
      <h5 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h5>
      <div className="flex space-x-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            onMouseEnter={() => setHoveredSocial(index)}
            onMouseLeave={() => setHoveredSocial(null)}
            className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center transform hover:scale-110 ${social.color} ${social.bg}`}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default Newsletter;
