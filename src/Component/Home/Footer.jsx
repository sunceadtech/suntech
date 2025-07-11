// Optimized Footer.jsx
import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook, Twitter, Instagram, Linkedin, Youtube, Mail,
  Phone, MapPin, Clock, ArrowUp, MessageCircle, Send, Heart, Globe
} from 'lucide-react';
import { throttle } from 'lodash';

const Newsletter = React.lazy(() => import('./Newsletter'));

const Footer = () => {
  const [email, setEmail] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(throttle(() => {
    setShowScrollTop(window.scrollY > 300);
    setIsScrolled(window.scrollY > 10);
  }, 200), []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });

    const footerElement = document.getElementById('animated-footer');
    if (footerElement) observer.observe(footerElement);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (footerElement) observer.unobserve(footerElement);
    };
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/people/Sunce-Adtech/pfbid0LowM7Wqbyob9oVcAU3owX73BA47NTDpSHFeN6w64oH2YUKWDQiLCUm5adUuKt6epl/', label: 'Facebook', color: 'hover:text-blue-600', bg: 'hover:bg-blue-50' },
    { icon: Twitter, href: 'https://x.com/sunceadtech', label: 'Twitter', color: 'hover:text-sky-500', bg: 'hover:bg-sky-50' },
    { icon: Instagram, href: 'https://www.instagram.com/sunceadtech/', label: 'Instagram', color: 'hover:text-pink-600', bg: 'hover:bg-pink-50' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/sunce-adtech-600655364/', label: 'LinkedIn', color: 'hover:text-blue-700', bg: 'hover:bg-blue-50' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-600', bg: 'hover:bg-red-50' }
  ];

  const quickLinks = [
    { name: 'About', path: '/about' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  const services = [
    { name: 'SEO Marketing', path: '/services/seo' },
    { name: 'Social Media', path: '/services/social-media' },
    { name: 'PPC Advertising', path: '/services/ppc' },
    { name: 'Content Marketing', path: '/services/content' },
    { name: 'Video Content', path: '/services/video-content' },
    { name: 'Analytics & Reporting', path: '/services/analytics' },
    { name: 'Photography & video', path: '/services/photography' },
    { name: 'Web Development', path: '/services/web' },
    { name: 'Mobile App Development', path: '/services/mobile' },
    { name: 'Software Development', path: '/services/software' },
  ];

  const legalLinks = [...quickLinks];

  return (
    <>
   <footer id="animated-footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden md:mb-0 mb-4">
  <div className="absolute inset-0 opacity-5">
    {isVisible && (
      <>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-purple-500 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-500 rounded-full animate-ping delay-700"></div>
      </>
    )}
  </div>

  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-8">
    <nav aria-label="Footer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-12">
      <div className={`lg:col-span-2 xl:col-span-2 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110">
                <Globe className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">SunceADTECH</h3>
          </div>
          <p className="text-gray-300 mb-6 text-sm sm:text-base">
            We're passionate about helping businesses thrive in the digital world.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:sunceadtech@gmail.com"
              className="text-sm text-blue-400"
              aria-label="Send an email to sunceadtech@gmail.com"
            >
              <ContactItem
                icon={Mail}
                text="Email: sunceadtech@gmail.com"
                color="bg-blue-600 mb-2"
              />
            </a>

            <a
              href="tel:+9211877900"
              className="text-sm text-green-400"
              aria-label="Call SunceADTECH at +91 9211877900"
            >
              <ContactItem
                icon={Phone}
                text="Phone: +91 9211877900"
                color="bg-green-600 mb-2"
              />
            </a>

            <a
              href="https://maps.app.goo.gl/E4zecJQijPHYswaP9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-red-400"
              aria-label="View our location on Google Maps"
            >
              <ContactItem
                icon={MapPin}
                text="Location: 1st floor A 797 GD Colony MayurVihar-Phase-III"
                color="bg-red-600 mb-2"
              />
            </a>

            <a
              href="#working-hours"
              className="text-sm text-yellow-400"
              aria-label="See SunceADTECH working hours"
            >
              <ContactItem
                icon={Clock}
                text="Hours: Mon-Sat, 10AM–7PM EST"
                color="bg-yellow-500"
              />
            </a>
          </div>
        </div>
      </div>

      <FooterLinks title="Quick Links" links={quickLinks} delay="200" isVisible={isVisible} />
      <FooterLinks title="Services" links={services} delay="300" isVisible={isVisible} />

      <Suspense fallback={<div>Loading...</div>}>
        <Newsletter
          email={email}
          setEmail={setEmail}
          handleNewsletterSubmit={() => setEmail('')}
          socialLinks={socialLinks}
          delay="400"
          isVisible={isVisible}
          setHoveredSocial={setHoveredSocial}
          hoveredSocial={hoveredSocial}
        />
      </Suspense>
    </nav>
  </div>

  <div className="border-t border-gray-700/50 bg-gray-900/50 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
      <div className="flex items-center space-x-2 text-gray-400 text-sm">
        <span>© 2025 SunceADTECH. Made with</span>
        <Heart className="w-4 h-4 text-red-500 animate-pulse" aria-hidden="true" />
        <span>All rights reserved.</span>
      </div>
      <div className="flex flex-wrap justify-center lg:justify-end items-center space-x-6 text-sm">
        {legalLinks.map((link, index) => (
          <a
            key={index}
            href={link.path}
            className="text-gray-400 hover:text-white transition-colors duration-300"
            aria-label={`Read our ${link.name} page`}
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  </div>
</footer>

<div
  className={`fixed bottom-0 left-0 right-0 z-50 ${
    isScrolled
      ? 'bg-white border-t border-gray-100'
      : 'bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700'
  } p-3 flex flex-nowrap items-center justify-center gap-2 transition-all duration-300`}
>
  {/* Call Us Button */}
  <a
    href="tel:+919211877900"
    className="flex items-center justify-center px-4 py-3 rounded-md bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm shadow-md w-[48%] sm:w-[180px] md:w-[300px] lg:w-[400px] xl:w-[350px]"
    aria-label="Call us now at +91 9211877900"
    title="Call us now at +91 9211877900"
  >
    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
    <span className="font-semibold">Call Us</span>
  </a>

  {/* WhatsApp Us Button */}
  <a
    href="https://wa.me/919211877900"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-4 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm shadow-md w-[48%] sm:w-[180px] md:w-[240px] lg:w-[300px] xl:w-[350px]"
    aria-label="Chat with us on WhatsApp"
    title="Chat with us on WhatsApp"
  >
    <MessageCircle className="w-4 h-4 mr-2" aria-hidden="true" />
    <span className="font-semibold">WhatsApp Us</span>
  </a>
</div>

<button
  onClick={scrollToTop}
  aria-label="Scroll to top"
  className={`fixed bottom-20 right-6 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}
>
  <ArrowUp className="w-5 h-5 mx-auto" aria-hidden="true" />
</button>
    </>
  );
};

const ContactItem = React.memo(({ icon: Icon, text, href, color }) => (
  <div className="flex items-center space-x-3 group">
    <div className={`w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:${color}`}>
      <Icon className="w-4 h-4" aria-hidden="true" />
    </div>
    {href ? <a href={href} className="text-gray-300 text-sm sm:text-base">{text}</a> : <span className="text-gray-300 text-sm sm:text-base">{text}</span>}
  </div>
));

const FooterLinks = React.memo(({ title, links, delay, isVisible }) => (
  <div className={`transform transition-all duration-700 delay-${delay} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
    <h4 className="text-lg sm:text-xl font-semibold mb-6 text-white">{title}</h4>
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} className="text-gray-300 hover:text-white text-sm sm:text-base transition-all duration-300 hover:translate-x-2 inline-block group">
            <span className="relative">{link.name}<span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span></span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
));

export default Footer;