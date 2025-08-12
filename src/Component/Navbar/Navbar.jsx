import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import sunceAdtec from "../../assets/sun3.png";

import { useNavigate ,useLocation} from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

 useEffect(() => {
  setIsOpen(false); // close mobile menu
  setActiveDropdown(null); // close dropdown
  window.scrollTo({ top: 0, behavior: "smooth" });
}, [location.pathname]);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        {
          category: "Next Gen",
          items: [
            { name: "Search Engine Marketing", path: "/services/seo" },
            { name: "Social Media", path: "/services/social-media" },
            { name: "PPC Advertising", path: "/services/ppc" },
            { name: "Content Marketing", path: "/services/content" },
            { name: "Analytics & Reporting", path: "/services/analytics" },
            { name: "Digital strategy consultant", path: "/services/analysis" },
            { name: "Online Reputation Management", path: "/services/online-reputation" },
            { name: "Influencer Marketing", path: "/services/influencer" },
          ],
        },
        {
          category: "Design",
          items: [
            { name: "Website Designing", path: "/services/uiux" },
            { name: "Branding", path: "/services/branding" },
            { name: "Graphic Designing", path: "/services/graphic" },
            { name: "Photography & Video", path: "/services/photography" },
            { name: "Logo Design", path: "/services/logo-design" },
          ],
        },
        {
          category: "Development",
          items: [
            { name: "Web Development", path: "/services/web" },
            { name: "Mobile App Development", path: "/services/mobile" },
            { name: "Software Development", path: "/services/software" },
            {
              name: "Website Maintenance & Security",
              path: "/services/maintenance",
            },
            {
              name: "Digital Marketing Agency In Delhi",
              path: "/services/digital-marketing-agency",
            },
          ],
        },
      ],
    },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex-shrink-0 group">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/sun4.png"
                alt="Sunceadtech"
                className="w-32 h-14 p-1 object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
              />
            </Link>
          </div>
          <div
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 cursor-pointer"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                    >
                      <span>
                        {item.name === "Services" ? "Our Expertise" : item.name}
                      </span>
                      <svg
                        className={`w-4 h-4 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    <div
                      className={`absolute top-full left-0 mt-2 w-[750px] bg-white rounded-xl shadow-2xl border border-gray-100 transform ${
                        activeDropdown === item.name
                          ? "opacity-100 translate-y-0 visible"
                          : "opacity-0 -translate-y-2 invisible"
                      } transition-all duration-500 delay-150`}
                    >
                      <div className="py-6 px-6 grid grid-cols-3 gap-6">
                        {item.dropdown.map((group, idx) => (
                          <div key={idx}>
                            <h4 className="text-orange-500 text-lg font-semibold mb-4">
                              {group.category}
                            </h4>
                            <div className="flex flex-col space-y-2">
                              {group.items.map((dropdownItem, i) => (
                                <Link
                                  key={i}
                                  to={dropdownItem.path}
                                  className="px-4 py-2 text-gray-800 hover:text-blue-600 hover:bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg text-sm font-medium"
                                >
                                  {dropdownItem.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-800 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-blue-50 cursor-pointer"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl hover:from-blue-900 hover:to-blue-800 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-800 hover:text-blue-600 hover:bg-blue-50 cursor-pointer"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute block w-full h-0.5 bg-current ${
                    isOpen ? "rotate-45 top-2.5" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current top-2.5 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-full h-0.5 bg-current ${
                    isOpen ? "-rotate-45 top-2.5" : "top-4"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md border-t border-gray-200 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.dropdown ? (
                  <div className="border-b border-gray-100 pb-2">
                    {/* Dropdown toggle button */}
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.name ? null : item.name
                        )
                      }
                      className="w-full flex justify-between items-center text-gray-800 font-semibold py-2 px-2 rounded-md hover:bg-blue-50"
                    >
                      <span className="w-full text-center block">
                        {item.name === "Services" ? "Our Expertise" : item.name}
                      </span>
                      <svg
                        className={`w-4 h-4 transform transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown content */}
                    {activeDropdown === item.name && (
                      <div className="pl-3 mt-2 space-y-3">
                        {item.dropdown.map((group, gIdx) => (
                          <div key={gIdx} className="mb-3">
                            <h5 className="text-orange-500 font-semibold text-sm mb-2">
                              {group.category}
                            </h5>
                            <div className="flex flex-col space-y-2">
                              {group.items.map((sub, i) => (
                                <Link
                                  key={i}
                                  to={sub.path}
                                  className="text-sm font-medium text-gray-800 hover:text-blue-600 px-3 py-2 rounded hover:bg-blue-50 border-l-2 border-blue-100"
                                  onClick={() => {
                                    // ONLY close menu & scroll – DO NOT manually navigate
                                    setIsOpen(false);
                                    setActiveDropdown(null);
                                    window.scrollTo({
                                      top: 0,
                                      behavior: "smooth",
                                    });
                                  }}
                                >
                                  {sub.name}
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
                    className="block text-gray-800 px-2 py-3 rounded hover:bg-blue-50 font-medium border-b border-gray-100"
                    onClick={() => {
                      setIsOpen(false);
                      setActiveDropdown(null);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="mt-4 w-full text-center py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl"
              onClick={() => {
                setIsOpen(false);
                setActiveDropdown(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
