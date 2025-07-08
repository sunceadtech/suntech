import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const PPCAdvertisingPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeMetric, setActiveMetric] = useState(0)
  const [hoveredPlatform, setHoveredPlatform] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Auto-rotate metrics
    const metricInterval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4)
    }, 3000)

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length)
    }, 5000)
    
    return () => {
      clearInterval(metricInterval)
      clearInterval(testimonialInterval)
    }
  }, [])

  const platforms = [
    {
      name: 'Google Ads',
      icon: '🔍',
      color: 'from-blue-500 to-blue-600',
      features: ['Search Campaigns', 'Display Network', 'Shopping Ads', 'YouTube Ads'],
      marketShare: '92%',
      avgCPC: '2.32'
    },
    {
      name: 'Facebook Ads',
      icon: '📘',
      color: 'from-blue-600 to-blue-700',
      features: ['Feed Ads', 'Stories', 'Reels', 'Messenger'],
      marketShare: '24%',
      avgCPC: '1.86'
    },
    {
      name: 'LinkedIn Ads',
      icon: '💼',
      color: 'from-blue-700 to-blue-800',
      features: ['Sponsored Content', 'Message Ads', 'Dynamic Ads', 'Lead Gen'],
      marketShare: '13%',
      avgCPC: '5.58'
    },
    {
      name: 'Microsoft Ads',
      icon: '🟦',
      color: 'from-blue-400 to-blue-500',
      features: ['Search Ads', 'Shopping', 'Audience Network', 'Import from Google'],
      marketShare: '8%',
      avgCPC: '1.54'
    },
    {
      name: 'Amazon Ads',
      icon: '📦',
      color: 'from-orange-500 to-orange-600',
      features: ['Sponsored Products', 'Sponsored Brands', 'Display Ads', 'Video Ads'],
      marketShare: '15%',
      avgCPC: '0.97'
    },
    {
      name: 'TikTok Ads',
      icon: '🎵',
      color: 'from-pink-500 to-purple-600',
      features: ['In-Feed Ads', 'Branded Effects', 'TopView', 'Spark Ads'],
      marketShare: '5%',
      avgCPC: '1.29'
    }
  ]

  const services = [
    {
      title: "Campaign Strategy & Setup",
      description: "Custom PPC strategies tailored to your business goals and target audience",
      icon: "🎯",
      features: ["Keyword Research", "Competitor Analysis", "Landing Page Optimization", "Conversion Tracking"]
    },
    {
      title: "Ad Creation & Design",
      description: "Compelling ad copy and creative that converts viewers into customers",
      icon: "🎨",
      features: ["Ad Copywriting", "Creative Design", "A/B Testing", "Brand Compliance"]
    },
    {
      title: "Campaign Management",
      description: "Ongoing optimization to maximize ROI and minimize wasted ad spend",
      icon: "⚙️",
      features: ["Bid Management", "Budget Optimization", "Audience Targeting", "Performance Monitoring"]
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed insights and transparent reporting on campaign performance",
      icon: "📊",
      features: ["ROI Tracking", "Conversion Analysis", "Custom Dashboards", "Monthly Reports"]
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/month",
      adSpend: "1,000 - 5,000",
      platforms: "2 Platforms",
      features: [
        "Campaign Setup & Strategy",
        "Ad Copy Creation",
        "Basic A/B Testing",
        "Monthly Reporting",
        "Email Support",
        "Landing Page Recommendations"
      ],
      popular: false,
      color: "from-blue-50 to-indigo-50"
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/month",
      adSpend: "5,000 - 20,000",
      platforms: "4 Platforms",
      features: [
        "Advanced Campaign Strategy",
        "Custom Ad Creative Design",
        "Comprehensive A/B Testing",
        "Bi-weekly Optimization",
        "Detailed Analytics Dashboard",
        "Phone + Email Support",
        "Conversion Rate Optimization",
        "Remarketing Campaigns"
      ],
      popular: true,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/month",
      adSpend: "20,000+",
      platforms: "All Platforms",
      features: [
        "Full-Service Campaign Management",
        "Premium Creative Production",
        "Advanced Audience Segmentation",
        "Weekly Strategy Calls",
        "Real-time Performance Dashboard",
        "Dedicated Account Manager",
        "Custom Landing Pages",
        "Advanced Attribution Modeling",
        "Priority Support"
      ],
      popular: false,
      color: "from-purple-50 to-pink-50"
    }
  ]

  const metrics = [
    { label: "Average ROAS", value: "4.2x", description: "Return on Ad Spend" },
    { label: "Cost Reduction", value: "35%", description: "Lower CPC vs Industry" },
    { label: "Conversion Rate", value: "12.8%", description: "Above Industry Average" },
    { label: "Client Retention", value: "94%", description: "Long-term Partnerships" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      role: "Marketing Director",
      content: "Our PPC campaigns have generated over 2M in revenue with a 5.2x ROAS. The team's expertise in Google Ads and Facebook advertising is unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "CEO",
      content: "They transformed our struggling ad campaigns into profitable growth engines. Our conversion rate improved by 180% in just 3 months.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "HealthCare Innovations",
      role: "CMO",
      content: "Professional, data-driven approach that delivers results. Our cost per acquisition dropped by 40% while scaling our campaigns 3x.",
      rating: 5
    }
  ]

  const caseStudy = {
    client: "SaaS Startup",
    industry: "Software",
    challenge: "Low-quality leads and high customer acquisition costs",
    solution: "Multi-platform PPC strategy with advanced targeting and landing page optimization",
    duration: "6 months",
    results: [
      { metric: "ROAS Improvement", value: "320%", icon: "📈" },
      { metric: "Lead Quality Score", value: "+85%", icon: "⭐" },
      { metric: "Cost Per Lead", value: "-60%", icon: "💰" },
      { metric: "Monthly Revenue", value: "+240%", icon: "🚀" }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className={`pt-20 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-3 sm:mr-4 transform hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-blue-600 font-semibold text-base sm:text-lg">PPC Advertising</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                Drive Instant Traffic &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Maximize ROI</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Get immediate visibility and qualified leads with expertly managed PPC campaigns. We optimize your ad spend across Google, Facebook, LinkedIn, and more to deliver measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free PPC Audit
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-200"
                >
                  View Case Studies
                </Link>
              </div>

              {/* Animated Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {metrics.map((metric, index) => (
                  <div 
                    key={index} 
                    className={`bg-white rounded-xl p-3 sm:p-4 shadow-md transform transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                      activeMetric === index ? 'ring-2 ring-blue-500 scale-105' : ''
                    }`}
                  >
                    <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">{metric.value}</div>
                    <div className="text-xs sm:text-sm text-gray-600 font-medium">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {platforms.map((platform, index) => (
                <div 
                  key={platform.name} 
                  className={`bg-gradient-to-br ${platform.color} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer ${
                    index >= 4 ? 'col-span-1 sm:col-span-1' : ''
                  }`}
                  onMouseEnter={() => setHoveredPlatform(index)}
                  onMouseLeave={() => setHoveredPlatform(null)}
                >
                  <div className="text-2xl sm:text-3xl mb-2">{platform.icon}</div>
                  <h3 className="font-bold text-sm sm:text-lg mb-2">{platform.name}</h3>
                  <div className={`space-y-1 text-xs sm:text-sm opacity-90 transition-all duration-300 ${
                    hoveredPlatform === index ? 'opacity-100' : ''
                  }`}>
                    <div>Share: {platform.marketShare}</div>
                    <div>Avg CPC: {platform.avgCPC}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Complete PPC Management Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy to execution, we handle every aspect of your PPC campaigns to maximize your return on investment.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="text-3xl sm:text-4xl mb-4 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
                <div className="space-y-2 sm:space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3"></div>
                      <span className="text-xs sm:text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Success Spotlight
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              How we helped a SaaS startup achieve 320% ROAS improvement
            </p>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8 sm:mb-12">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6">{caseStudy.client}</h3>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Industry</h4>
                    <p className="text-gray-600">{caseStudy.industry}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Timeline</h4>
                    <p className="text-gray-600">{caseStudy.duration}</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {caseStudy.results.map((result, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 sm:p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="text-2xl sm:text-3xl mb-2">{result.icon}</div>
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">{result.value}</div>
                    <div className="text-xs sm:text-sm text-gray-700 font-medium">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                View All Case Studies
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Real results from real businesses
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4 sm:mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <blockquote className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-gray-800 text-base sm:text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium text-sm sm:text-base">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-blue-600 w-6 sm:w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              Choose Your PPC Package
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with no hidden fees. All packages include setup, management, and detailed reporting.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                  pkg.popular 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105 lg:scale-110 shadow-2xl' 
                    : `bg-gradient-to-br ${pkg.color} hover:shadow-xl`
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-yellow-900 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6 sm:mb-8">
                  <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`mb-2 text-sm sm:text-base ${pkg.popular ? 'text-blue-100' : 'text-blue-600'}`}>
                    {pkg.platforms}
                  </div>
                  <div className={`mb-2 text-xs sm:text-sm ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    Ad Spend: {pkg.adSpend}
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-3xl sm:text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                      {pkg.price}
                    </span>
                    <span className={`ml-1 text-sm sm:text-base ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      {pkg.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        pkg.popular ? 'bg-blue-200' : 'bg-blue-500'
                      }`}></div>
                      <span className={`text-sm sm:text-base ${pkg.popular ? 'text-blue-100' : 'text-gray-700'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
                      to="/contact"
                  className={`block w-full text-center py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    pkg.popular 
                      ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
     <div className="py-16 px-4 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Social Media Presence?
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
            Let's create a social media strategy that drives real results for your business. Get started with a free consultation and social media audit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Audit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-xl border-2 border-white hover:bg-white hover:text-pink-700 transform hover:scale-105 transition-all duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-pink-100">Successful Campaigns</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">98%</div>
              <div className="text-pink-100">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-pink-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
}

export default PPCAdvertisingPage