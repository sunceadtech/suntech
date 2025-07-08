import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const SocialMediaPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('facebook')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialPlatforms = [
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '📘',
      color: 'from-blue-600 to-blue-700',
      stats: { users: '2.9B', engagement: '6.4%', demographics: '25-54 years' }
    },
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      color: 'from-pink-500 to-purple-600',
      stats: { users: '2B', engagement: '4.2%', demographics: '18-34 years' }
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      color: 'from-blue-700 to-blue-800',
      stats: { users: '900M', engagement: '2.1%', demographics: '25-44 years' }
    },
    {
      id: 'twitter',
      name: 'Twitter',
      icon: '🐦',
      color: 'from-blue-400 to-blue-500',
      stats: { users: '450M', engagement: '1.4%', demographics: '25-49 years' }
    }
  ]

  const services = [
    {
      title: "Content Creation & Strategy",
      description: "Engaging visual and written content tailored to each platform",
      features: ["Custom Graphics & Videos", "Content Calendar Planning", "Brand Voice Development", "Trend Integration"]
    },
    {
      title: "Community Management",
      description: "Active engagement and relationship building with your audience",
      features: ["Real-time Response Management", "Community Building", "User-Generated Content", "Crisis Management"]
    },
    {
      title: "Social Media Advertising",
      description: "Targeted ad campaigns to reach your ideal customers",
      features: ["Campaign Strategy & Setup", "Audience Targeting", "A/B Testing", "ROI Optimization"]
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed insights to measure and improve performance",
      features: ["Performance Tracking", "Engagement Analytics", "Growth Metrics", "Competitor Analysis"]
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/month",
      platforms: "2 Platforms",
      features: [
        "10 Posts per Month",
        "Basic Graphics Design",
        "Community Management",
        "Monthly Analytics Report",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/month",
      platforms: "4 Platforms",
      features: [
        "20 Posts per Month",
        "Custom Graphics & Videos",
        "Advanced Community Management",
        "Social Media Advertising (200 ad spend included)",
        "Bi-weekly Reports",
        "Phone + Email Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/month",
      platforms: "All Platforms",
      features: [
        "40 Posts per Month",
        "Premium Content Creation",
        "24/7 Community Management",
        "Advanced Advertising Campaigns (500 ad spend included)",
        "Weekly Reports & Strategy Calls",
        "Dedicated Account Manager",
        "Priority Support"
      ],
      popular: false
    }
  ]

  const caseStudy = {
    client: "Local Restaurant Chain",
    challenge: "Low brand awareness and customer engagement",
    solution: "Comprehensive social media strategy across Instagram and Facebook",
    results: [
      { metric: "Followers Growth", value: "+340%" },
      { metric: "Engagement Rate", value: "+180%" },
      { metric: "Website Traffic", value: "+225%" },
      { metric: "Online Orders", value: "+150%" }
    ]
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Hero Section */}
      <div className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <span className="text-pink-600 font-semibold text-lg">Social Media Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Build Your Brand &
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"> Connect with Customers</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your social media presence into a powerful marketing engine. We create engaging content, build communities, and drive real business results across all major platforms.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Social Media Audit
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200"
                >
                  View Our Work
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {socialPlatforms.map((platform, index) => (
                <div key={platform.id} className={`bg-gradient-to-br ${platform.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}>
                  <div className="text-3xl mb-2">{platform.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                  <div className="space-y-1 text-sm opacity-90">
                    <div>{platform.stats.users} Users</div>
                    <div>{platform.stats.engagement} Engagement</div>
                    <div>{platform.stats.demographics}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Complete Social Media Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to community management, we handle every aspect of your social media presence to drive engagement and growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Success Story
            </h2>
            <p className="text-xl text-gray-600">
              How we transformed a local restaurant's social media presence
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{caseStudy.client}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-pink-600 mb-2">Challenge</h4>
                    <p className="text-gray-600">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-600 mb-2">Solution</h4>
                    <p className="text-gray-600">{caseStudy.solution}</p>
                  </div>
                </div>
                <Link
                  to="//contact"
                  className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                >
                  View Full Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-pink-600 mb-2">{result.value}</div>
                    <div className="text-gray-700 font-medium">{result.metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Choose Your Social Media Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible packages designed to meet your business needs and budget. All packages include dedicated support and regular performance reviews.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 relative ${pkg.popular ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white transform scale-105' : 'bg-gradient-to-br from-gray-50 to-pink-50'} hover:shadow-xl transition-all duration-300`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                    {pkg.name}
                  </h3>
                  <div className={`mb-4 ${pkg.popular ? 'text-pink-100' : 'text-pink-600'}`}>
                    {pkg.platforms}
                  </div>
                  <div className="flex items-baseline justify-center">
                    <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>
                      {pkg.price}
                    </span>
                    <span className={`ml-1 ${pkg.popular ? 'text-pink-100' : 'text-gray-600'}`}>
                      {pkg.period}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${pkg.popular ? 'bg-pink-200' : 'bg-pink-500'}`}></div>
                      <span className={pkg.popular ? 'text-pink-100' : 'text-gray-700'}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                <Link
             to="/contact"
                  className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-white text-pink-600 hover:bg-pink-50' 
                      : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
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

export default SocialMediaPage