import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SEOMarketingPage = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const seoServices = [
    {
      title: "Technical SEO Audit",
      description: "Comprehensive analysis of your website's technical health",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "URL Structure", "XML Sitemaps"]
    },
    {
      title: "Keyword Research",
      description: "Strategic keyword analysis to target the right audience",
      features: ["Competitor Analysis", "Search Volume Data", "Long-tail Keywords", "Intent Mapping"]
    },
    {
      title: "On-Page Optimization",
      description: "Optimize individual pages for better search rankings",
      features: ["Title Tag Optimization", "Meta Descriptions", "Header Structure", "Internal Linking"]
    },
    {
      title: "Link Building",
      description: "Build high-quality backlinks to boost domain authority",
      features: ["Guest Posting", "Resource Link Building", "Broken Link Building", "Brand Mentions"]
    }
  ]

  const packages = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Up to 10 Keywords",
        "Monthly SEO Report",
        "Basic On-Page Optimization",
        "Google My Business Setup",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Up to 30 Keywords",
        "Bi-weekly SEO Reports",
        "Advanced On-Page Optimization",
        "Link Building Campaign",
        "Content Creation (4 posts)",
        "Phone + Email Support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Unlimited Keywords",
        "Weekly SEO Reports",
        "Complete SEO Management",
        "Advanced Link Building",
        "Content Creation (8 posts)",
        "Dedicated Account Manager",
        "24/7 Priority Support"
      ],
      popular: false
    }
  ]

  const faqs = [
    {
      question: "How long does it take to see SEO results?",
      answer: "SEO is a long-term strategy. You can expect to see initial improvements in 3-6 months, with significant results typically appearing after 6-12 months of consistent optimization."
    },
    {
      question: "Do you guarantee #1 rankings on Google?",
      answer: "No reputable SEO agency can guarantee specific rankings. We focus on improving your overall visibility, traffic quality, and conversions through proven SEO strategies."
    },
    {
      question: "What's included in your SEO audit?",
      answer: "Our comprehensive audit includes technical SEO analysis, on-page optimization review, competitor analysis, keyword research, and a detailed action plan."
    },
    {
      question: "Do you work with local businesses?",
      answer: "Yes! We specialize in both local and national SEO. Our local SEO services include Google My Business optimization, local citations, and location-based keyword targeting."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50">
      {/* Hero Section */}
      <div className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span className="text-green-600 font-semibold text-lg">SEO Marketing</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Dominate Search Results with 
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Expert SEO</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Increase your organic traffic, improve search rankings, and drive qualified leads with our data-driven SEO strategies. Get found by customers actively searching for your services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Free SEO Audit
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-green-700 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-green-200"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Organic Traffic</span>
                    <span className="text-green-600 font-bold">+185%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-4/5"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Keyword Rankings</span>
                    <span className="text-green-600 font-bold">+247%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-5/6"></div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lead Generation</span>
                    <span className="text-green-600 font-bold">+312%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Comprehensive SEO Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven SEO methodology covers every aspect of search optimization to ensure maximum visibility and sustainable growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              SEO Packages & Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect SEO package for your business needs and budget
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative transform hover:scale-105 transition-all duration-300 ${pkg.popular ? 'ring-4 ring-green-500 ring-opacity-50' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-600">{pkg.price}</span>
                    <span className="text-gray-600 ml-1">{pkg.period}</span>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-lg' 
                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our SEO Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to improve your search rankings and drive results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Audit & Analysis", desc: "Comprehensive website and competitor analysis" },
              { step: "02", title: "Strategy Development", desc: "Custom SEO strategy based on your goals" },
              { step: "03", title: "Implementation", desc: "Execute optimization across all channels" },
              { step: "04", title: "Monitor & Optimize", desc: "Track results and continuously improve" }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Boost Your Search Rankings?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free SEO audit and discover how we can help you dominate search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free SEO Audit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-green-600 transform hover:scale-105 transition-all duration-300"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SEOMarketingPage