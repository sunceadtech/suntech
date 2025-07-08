import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ServicesOverview = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);
const services = [
    {
      id: 1,
      icon: '🎯',
      title: 'SEO & SEM',
      subtitle: 'Search Engine Optimization',
      description: 'Dominate search results with our advanced SEO strategies. Get found by customers actively searching for your services.',
      image: './images/seo.webp',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Technical SEO'],
      color: 'from-blue-500 to-cyan-500',
      stats: { increase: '+250%', metric: 'Organic Traffic' },
      route: '/services/seo'
    },
    {
      id: 2,
      icon: '📱',
      title: 'Social Media Marketing',
      subtitle: 'Build Your Brand Community',
      description: 'Create engaging content and build a loyal following across all major social platforms with our proven strategies.',
      image: './images/social2.avif',
      features: ['Content Creation', 'Community Management', 'Paid Social Ads', 'Influencer Outreach'],
      color: 'from-pink-500 to-rose-500',
      stats: { increase: '+400%', metric: 'Engagement Rate' },
      route: '/services/social-media'
    },
    {
      id: 3,
      icon: '💰',
      title: 'PPC Advertising',
      subtitle: 'Pay-Per-Click Campaigns',
      description: 'Maximize your ROI with targeted advertising campaigns across Google, Facebook, and other premium platforms.',
      image: './images/digitalmedia.webp',
      features: ['Google Ads', 'Facebook Ads', 'Campaign Optimization', 'A/B Testing'],
      color: 'from-green-500 to-emerald-500',
      stats: { increase: '+350%', metric: 'Conversion Rate' },
      route: '/services/ppc'
    },
    {
      id: 4,
      icon: '✍️',
      title: 'Content Marketing',
      subtitle: 'Storytelling That Converts',
      description: 'Compelling content that educates, engages, and converts your audience into loyal customers and brand advocates.',
      image: 'https://localo.com/assets/img/definitions/what-is-content.webp',
      features: ['Blog Writing', 'Video Content', 'Graphic Design', 'Content Strategy'],
      color: 'from-purple-500 to-indigo-500',
      stats: { increase: '+180%', metric: 'Lead Generation' },
      route: '/services/content'
    },
   {
  id: 6,
  icon: '🎥',
  title: 'Video Content Marketing',
  subtitle: 'Engage with Visual Storytelling',
  description: 'Captivate your audience with high-quality video content that boosts brand awareness, engagement, and conversions across all platforms.',
  image: './images/vidoe2.webp', // You can replace with your preferred image
  features: ['Explainer Videos', 'Product Demos', 'Social Media Videos', 'Video SEO'],
  color: 'from-purple-600 to-indigo-500',
  stats: { increase: '+380%', metric: 'Video Engagement' },
  route: '/services/video-content'
},

    {
      id: 6,
      icon: '📊',
      title: 'Analytics & Reporting',
      subtitle: 'Data-Driven Insights',
      description: 'Comprehensive analytics and detailed reporting to track performance and optimize every aspect of your campaigns.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Monthly Reports'],
      color: 'from-teal-500 to-blue-500',
      stats: { increase: '+500%', metric: 'Data Accuracy' },
      route: '/services/analytics'
    },
    {
      id: 7,
      icon: '💻',
      title: 'Web Development',
      subtitle: 'Responsive & Scalable Websites',
      description: 'Custom websites built to engage users, perform flawlessly, and scale with your business needs.',
      image: './images/software2.webp',
      features: ['Responsive Design', 'E-commerce Integration', 'CMS Development', 'SEO Friendly Code'],
      color: 'from-indigo-500 to-blue-600',
      stats: { increase: '+300%', metric: 'User Retention' },
      route: '/services/web'
    },
    {
      id: 8,
      icon: '📲',
      title: 'Mobile App Development',
      subtitle: 'iOS & Android Solutions',
      description: 'High-performance mobile apps tailored for your brand to deliver exceptional user experiences.',
      image: './images/app.webp',
      features: ['Cross-Platform Apps', 'Native Development', 'UI/UX Design', 'App Store Deployment'],
      color: 'from-green-500 to-teal-500',
      stats: { increase: '+450%', metric: 'App Downloads' },
      route: '/services/mobile'
    },
    {
      id: 9,
      icon: '🧠',
      title: 'Software Development',
      subtitle: 'Custom Software Solutions',
      description: 'We build scalable and secure software products that solve real-world problems and drive business success.',
      image: 'https://media.istockphoto.com/id/2158910512/photo/programming-or-developing-a-software-or-game-application-program-or-code-development-on-3d.webp?a=1&b=1&s=612x612&w=0&k=20&c=Q2p_1OvMxJnlgKq7c0S505mXhFM-FjiBY41Blort0mY=',
      features: ['Custom Applications', 'API Integration', 'Cloud-Based Solutions', 'Agile Development'],
      color: 'from-yellow-500 to-orange-500',
      stats: { increase: '+320%', metric: 'Operational Efficiency' },
      route: '/services/software'
    }
  ];
  const processSteps = [
    { step: '01', title: 'Discovery', desc: 'Understand your business goals' },
    { step: '02', title: 'Strategy', desc: 'Create customized marketing plan' },
    { step: '03', title: 'Execute', desc: 'Launch and optimize campaigns' },
    { step: '04', title: 'Analyze', desc: 'Track results and refine approach' }
  ];
  
  useEffect(() => {
    if (isMobile) {
      setIsVisible(true); // Show everything immediately on mobile
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isMobile]);

  // Services & processSteps unchanged...

  // ✂️ KEEP your services array and processSteps as is (don't need to change them)

  const handleLearnMore = (route) => {
    navigate(route);
  };

  const getAnimationClass = (baseClass = '') =>
    `${baseClass} transition-all duration-700 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`;

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={getAnimationClass('text-center mb-20')}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="pb-4 block bg-gradient-to-br from-orange-500 via-orange-600 to-blue-900 bg-clip-text text-transparent">
              Complete Digital
            </span>
            <span className="block bg-clip-text text-transparent">Marketing Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From SEO to social media, we offer comprehensive digital marketing services designed to grow your business and maximize your online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-3xl shadow-xl overflow-hidden transform ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } transition-all duration-700`}
              style={!isMobile ? { transitionDelay: `${index * 100}ms` } : {}}
            >
              {/* Image and Icon */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 w-16 h-16 bg-white/80 backdrop-blur-md rounded-xl flex items-center justify-center text-3xl">
                  {service.icon}
                </div>
              </div>

              {/* Service content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1 text-gray-900">{service.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{service.subtitle}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                  <button
                    onClick={() => handleLearnMore(service.route)}
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className={`${getAnimationClass('mb-20')} delay-300`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h3>
            <p className="text-lg text-gray-600">A systematic approach that delivers consistent results for every client</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={!isMobile ? { transitionDelay: `${800 + index * 200}ms` } : {}}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={getAnimationClass('text-center mt-16 delay-700')}>
          <div className="bg-gradient-to-br from-orange-500 via-red-500 to-blue-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join 500+ successful businesses who've already accelerated their growth with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Free Strategy Session
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                <Link to="/about">View Case Studies</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
