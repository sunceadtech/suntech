import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sunceAdtec from "../../assets/sunceAdtec.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      path: '/services',
      dropdown: [
        {
          category: 'Next Gen',
          items: [
            { name: 'SEO Marketing', path: '/services/seo' },
            { name: 'Social Media', path: '/services/social-media' },
            { name: 'PPC Advertising', path: '/services/ppc' },
            { name: 'Content Marketing', path: '/services/content' },
            { name: 'Digital Media Planning', path: '/services/digital-media' },
            { name: 'Digital strategy consultant', path: '/services/analysis' },
            { name: 'Analytics & Reporting', path: '/services/analytics' },
            { name: 'Video Content', path: '/services/video-content' },
          ],
        },
        {
          category: 'Design',
          items: [
            { name: 'UI/UX Design', path: '/services/uiux' },
            { name: 'Branding', path: '/services/branding' },
            { name: 'Graphic Design', path: '/services/graphic' },
            { name: 'photography & Video', path: '/services/photography' },
          ],
        },
        {
          category: 'Development',
          items: [
            { name: 'Web Development', path: '/services/web' },
            { name: 'Mobile App Development', path: '/services/mobile' },
            { name: 'Software Development', path: '/services/software' },
            { name: 'Website Maintenance & Security', path: '/services/maintenance' },
          ],
        },
      ],
    },
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 group">
            <Link to="/" className="flex items-center space-x-2">
              <img src={sunceAdtec} alt="SunceADTECH Logo" className="w-32 h-14 p-1 object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300" />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div onMouseEnter={() => setActiveDropdown(item.name)} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 cursor-pointer">
                      <span>{item.name === 'Services' ? 'Our Experties' : item.name}</span>
                      <svg className={`w-4 h-4 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    <div className={`absolute top-full left-0 mt-2 w-[750px] bg-white rounded-xl shadow-2xl border border-gray-100 transform ${activeDropdown === item.name ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} transition-all duration-500 delay-150`}>
                      <div className="py-6 px-6">
                        <div className="flex justify-around mb-6">
                          {item.dropdown.map((group, idx) => (
                            <h4 key={idx} className="text-orange-500 text-lg font-semibold text-center">{group.category}</h4>
                          ))}
                        </div>
                        <div className="flex justify-around gap-6">
                          {item.dropdown.map((group, idx) => (
                            <div key={idx} className="flex flex-col items-center flex-1">
                              {group.items.map((dropdownItem, i) => (
                                <Link key={i} to={dropdownItem.path} className="block text-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-sm font-medium">
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link to={item.path} className="text-gray-700 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 cursor-pointer">
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-blue-900 hover:to-blue-800 transform hover:scale-105">
              Get Contact
            </Link>
            <button onClick={toggleMenu} className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-blue-50 cursor-pointer">
              <div className="w-6 h-6 relative">
                <span className={`absolute block w-full h-0.5 bg-current ${isOpen ? 'rotate-45 top-2.5' : 'top-1'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current top-2.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`absolute block w-full h-0.5 bg-current ${isOpen ? '-rotate-45 top-2.5' : 'top-4'}`}></span>
              </div>
            </button>
          </div>
        </div>

        <div className={`lg:hidden transition-all duration-300 text-center overflow-hidden ${isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl mt-4 mb-4 max-h-[400px] overflow-y-auto">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div className='text-center'>
                    <button
                      onClick={() => handleDropdown(item.name)}
                      className="flex items-center justify-center w-full px-4 py-3 text-gray-800 hover:text-blue-600 font-semibold cursor-pointer"
                    >
                      <span className="text-base">{item.name === 'Services' ? 'Our Experties' : item.name}</span>
                      <svg className={`w-4 h-4 ml-2 ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="py-3 px-4 bg-white rounded-lg shadow mt-2 space-y-6 transition-all duration-500 delay-150">
                        {item.dropdown.map((group, idx) => (
                          <div key={idx} className="mb-4">
                            <h4 className="text-orange-500 text-sm font-semibold mb-2 text-center">{group.category}</h4>
                            <div className="flex flex-col gap-2 items-center">
                              {group.items.map((dropdownItem, i) => (
                                <Link
                                  key={i}
                                  to={dropdownItem.path}
                                  className="block text-center px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r from-blue-50 to-purple-50 rounded-md text-sm font-medium"
                                  onClick={() => { setIsOpen(false); setActiveDropdown(null); }}
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-center px-6 py-3 text-gray-700 hover:text-blue-600 font-medium hover:bg-white/50 rounded-lg mx-2 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="px-6 pt-4">
              <Link to="/contact" className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;