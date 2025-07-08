import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const USPComponent = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeCard, setActiveCard] = useState(0)
  const [hoveredCard, setHoveredCard] = useState(null)
  const sectionRef = useRef(null)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-rotate active card
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % uspCards.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const uspCards = [
    {
      id: 1,
      icon: '🚀',
      title: 'Lightning Fast Results',
      subtitle: 'See Growth in 30 Days',
      description: 'Our proven strategies deliver measurable results within the first month. No waiting, no excuses.',
      image: './images/share.avif',
      stats: { number: '300%', label: 'Faster Growth' },
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      icon: '🎯',
      title: 'Precision Targeting',
      subtitle: 'Reach Your Ideal Customers',
      description: 'Advanced AI-powered targeting ensures your message reaches exactly who needs to hear it.',
      image: './images/laptop.avif',
      stats: { number: '95%', label: 'Target Accuracy' },
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Data-Driven Strategy',
      subtitle: 'Every Decision Backed by Analytics',
      description: 'Real-time analytics and comprehensive reporting guide every campaign decision we make.',
      image: './images/contentwriting.webp',
      stats: { number: '24/7', label: 'Live Monitoring' },
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      icon: '💎',
      title: 'Premium Quality',
      subtitle: 'Enterprise-Level Solutions',
      description: 'White-glove service with dedicated account managers and custom-built strategies for your brand.',
      image: './images/mobile.avif',
      stats: { number: '100%', label: 'Client Satisfaction' },
      color: 'from-orange-500 to-red-500'
    }
  ]

  const mainFeatures = [
    {
      icon: '⚡',
      title: 'Instant Setup',
      description: 'Get started in minutes, not weeks'
    },
    {
      icon: '🔒',
      title: 'Guaranteed ROI',
      description: 'Money-back guarantee on results'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: '15+ years combined experience'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'Worldwide campaign management'
    }
  ]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></span>
            <span className="text-blue-700 font-semibold text-sm uppercase tracking-wide">
              Why Choose SunceADTECH?
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="block">We Don't Just Promise</span>
            <span className="block bg-gradient-to-br from-orange-500 via-red-500 to-blue-900 bg-clip-text text-transparent">
              We Deliver Results
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join 500+ businesses that have transformed their digital presence with our
            proven methodology and cutting-edge strategies.
          </p>
        </div>

        {/* Main USP Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-6 lg:px-0">
          {/* Interactive Card Display */}
          <div className={`relative transition-all duration-1000 delay-300 order-2 lg:order-1 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
            <div className="relative min-h-[400px] sm:min-h-[450px] lg:min-h-[500px]">
              {uspCards.map((card, index) => (
                <div
                  key={card.id}
                  className={`absolute inset-0 transition-all duration-1000 transform ${activeCard === index
                    ? 'opacity-100 scale-100 rotate-0'
                    : 'opacity-0 scale-95 rotate-1'
                    }`}
                >
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 mx-auto max-w-lg lg:max-w-none">
                    {/* Card Header */}
                    <div className={`relative h-48 sm:h-56 lg:h-64 bg-gradient-to-br ${card.color} p-4 sm:p-6 lg:p-8 text-white`}>
                      <div className="absolute inset-0 opacity-20">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                          <div className="text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-3 lg:mb-4">{card.icon}</div>
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 leading-tight">{card.title}</h3>
                          <p className="text-sm sm:text-base lg:text-lg opacity-90 leading-snug">{card.subtitle}</p>
                        </div>
                      </div>

                      {/* Floating Stat */}
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/20 backdrop-blur-md rounded-lg sm:rounded-xl p-2 sm:p-3 text-center min-w-[60px] sm:min-w-[70px]">
                        <div className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">{card.stats.number}</div>
                        <div className="text-[10px] sm:text-xs opacity-90 leading-tight">{card.stats.label}</div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-6 lg:p-8">
                      <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                        {card.description}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                        <Link to="/contact" className={`w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r ${card.color} text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-sm sm:text-base`}>
                          Learn More
                        </Link>
                        <div className="hidden sm:flex items-center text-gray-400">
                          <span className="text-xs sm:text-sm mr-2">Swipe for more</span>
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
              {uspCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${activeCard === index
                    ? 'bg-blue-600 w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5 sm:w-3'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Features List */}
          <div className={`space-y-6 sm:space-y-8 transition-all duration-1000 delay-500 order-1 lg:order-2 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
                What Sets Us Apart?
              </h3>

              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`flex items-start space-x-3 sm:space-x-4 p-4 sm:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 cursor-pointer ${hoveredCard === index
                    ? 'bg-white shadow-lg sm:shadow-xl transform scale-102 sm:scale-105'
                    : 'bg-white/50 hover:bg-white/80'
                    }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center text-lg sm:text-xl lg:text-2xl transition-all duration-300 ${hoveredCard === index
                    ? 'bg-gradient-to-br  from-orange-500 via-red-500 to-blue-900 text-white transform rotate-6 sm:rotate-12'
                    : 'bg-gray-100'
                    }`}>
                    {feature.icon}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2 leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className={`transition-all duration-300 flex-shrink-0 ${hoveredCard === index ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-2'
                    }`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-orange-500 via-red-500 to-blue-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
                  Ready to 10X Your Business?
                </h4>
                <p className="text-base sm:text-lg mb-5 sm:mb-6 opacity-90 text-center sm:text-left leading-relaxed">
                  Join successful businesses who've already transformed their digital presence.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/contact" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-bold rounded-lg sm:rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg text-sm sm:text-base">
                    Start Free Trial
                  </Link>
                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white font-bold rounded-lg sm:rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base">
                    <Link to='/contact'>Schedule Demo</Link>
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-32 h-20 sm:h-32 bg-white/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-gray-200 shadow-lg">
            <p className="text-gray-700 mb-6 text-lg font-medium">
              Trusted by industry leaders and growing businesses worldwide
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center cursor-pointer"
            >
              {/* Logo 1 — Orange to Red with Blur */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 bg-gradient-to-r from-orange-500 to-red-500 bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow"
              >
                <span className="text-white font-bold">BRAND</span>
              </motion.div>

              {/* Logo 2 — Dark Blue with Blur */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 bg-gradient-to-r from-blue-800 to-blue-900 bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow"
              >
                <span className="text-white font-bold">TECH</span>
              </motion.div>

              {/* Logo 3 — Violet with Blur */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 bg-gradient-to-r from-purple-500 to-purple-700 bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow"
              >
                <span className="text-white font-bold">GROW</span>
              </motion.div>

              {/* Logo 4 — Red to Dark Blue with Blur */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="h-12 bg-gradient-to-r from-red-500 to-blue-900 bg-white/80 backdrop-blur-md rounded-lg flex items-center justify-center shadow"
              >
                <span className="text-white font-bold">SCALE</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default USPComponent