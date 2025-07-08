import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
function DigitalMediaPlanning() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Audience Research & Targeting",
      description: "Identify and reach your ideal audience with precision.",
      features: ["Demographic Analysis", "Behavioral Targeting", "Interest Segmentation", "Geo-Targeting"]
    },
    {
      title: "Media Buying & Placement",
      description: "Strategic ad placements across digital channels for maximum ROI.",
      features: ["Programmatic Buying", "Real-Time Bidding", "Cross-Platform Placement", "Budget Optimization"]
    },
    {
      title: "Creative Strategy & Production",
      description: "Craft compelling visuals and messaging to drive engagement.",
      features: ["Video & Graphic Creation", "A/B Creative Testing", "Interactive Ad Formats", "Storytelling"]
    },
    {
      title: "Performance Monitoring & Reporting",
      description: "Track, analyze, and optimize campaigns continuously.",
      features: ["Custom Dashboards", "KPI Tracking", "Conversion Analysis", "Regular Insights & Recommendations"]
    }
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹₹₹",
      period: "/month",
      features: [
        "1 Platform Focus",
        "Monthly Reporting",
        "Basic Creative Assets",
        "Email Support"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Multi-Platform Management",
        "Bi-Weekly Reporting",
        "Advanced Targeting",
        "Creative Design & Video",
        "Phone + Email Support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "₹₹₹",
      period: "/month",
      features: [
        "All Digital Channels",
        "Weekly Performance Reviews",
        "Advanced Creative Production",
        "Conversion Optimization",
        "Dedicated Account Manager",
        "Priority Support"
      ],
      popular: false
    }
  ];
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Smarter <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Digital Media Planning</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Maximize your brand's reach and impact with tailored digital media strategies that drive measurable results.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Request Free Consultation
                </Link>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-50 border border-indigo-200 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Explore Our Services
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Packages</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {packages.map((pkg, index) => (
                  <div key={index} className={`rounded-2xl p-8 relative ${pkg.popular ? 'bg-gradient-to-br from-indigo-500 to-blue-600 text-white transform scale-105' : 'bg-gradient-to-br from-gray-50 to-blue-50'} hover:shadow-xl transition-all duration-300`}>
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>{pkg.name}</h3>
                      <div className={`mb-4 ${pkg.popular ? 'text-indigo-100' : 'text-indigo-600'}`}>Digital Media Planning</div>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-800'}`}>{pkg.price}</span>
                        <span className={`ml-1 ${pkg.popular ? 'text-indigo-100' : 'text-gray-600'}`}>{pkg.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 ${pkg.popular ? 'bg-indigo-200' : 'bg-indigo-500'}`}></div>
                          <span className={pkg.popular ? 'text-indigo-100' : 'text-gray-700'}>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${pkg.popular ? 'bg-white text-indigo-700 hover:bg-indigo-50' : 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white hover:from-indigo-700 hover:to-blue-700'}`}>
                      Get Started
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DigitalMediaPlanning
