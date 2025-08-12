import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function InfluencerMarketing() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Platforms tailored for influencer marketing
  const influencerPlatforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: "📷",
      color: "from-pink-500 to-purple-600",
      stats: { creators: "2M+", engagement: "High", bestFor: "Reels, Stories" },
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: "▶️",
      color: "from-red-500 to-red-700",
      stats: { creators: "1M+", engagement: "Long-form", bestFor: "Reviews" },
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: "🎵",
      color: "from-gray-900 to-gray-700",
      stats: { creators: "1.5M+", engagement: "Very High", bestFor: "Shorts" },
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      icon: "💼",
      color: "from-blue-700 to-blue-800",
      stats: {
        creators: "B2B KOLs",
        engagement: "Thought Leadership",
        bestFor: "B2B",
      },
    },
  ];

  const services = [
    {
      title: "Influencer Discovery & Vetting",
      description:
        "Niche, audience quality, authenticity aur brand fit par based curated creator lists.",
      features: [
        "Audience & Demographic Match",
        "Fake Follower/Fraud Checks",
        "Brand-fit Scoring",
        "Category & Region Filters",
      ],
    },
    {
      title: "Campaign Strategy & Briefs",
      description:
        "Clear objectives, content angles, deliverables aur timelines define karte hain.",
      features: [
        "Creative Brief & Concepts",
        "Hashtags & CTA Framework",
        "Timeline & Deliverables Plan",
        "Compliance (ASCI/Disclaimers)",
      ],
    },
    {
      title: "Negotiation & Contracts",
      description:
        "Best value ensure karte hue contracts, usage rights aur whitelisting manage.",
      features: [
        "Rate & Barter Negotiations",
        "Usage & Whitelisting Rights",
        "Product Seeding/Logistics",
        "Payment & Invoicing Support",
      ],
    },
    {
      title: "Execution, Tracking & Reporting",
      description:
        "End‑to‑end execution with real‑time tracking and clear ROI reporting.",
      features: [
        "Live Link/Content Tracking",
        "UTM & Coupon Setup",
        "Performance Dashboards",
        "Post‑Campaign Insights",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/campaign",
      platforms: "Up to 5 Creators",
      features: [
        "Creator Discovery & Outreach",
        "1 Platform (IG or YT)",
        "Brief + 1 Review Cycle",
        "Basic Performance Report",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/campaign",
      platforms: "10–15 Creators",
      features: [
        "Multi‑platform (IG + YT/TikTok)",
        "Negotiation & Contracting",
        "Whitelisting (30 days)",
        "UTM/Coupon Tracking",
        "Bi‑weekly Performance Updates",
        "Phone + Email Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/quarter",
      platforms: "25+ Creators",
      features: [
        "Always‑on Creator Program",
        "Multi‑wave Content Calendar",
        "Paid Amplification + Whitelisting (90 days)",
        "Quarterly Strategy Workshops",
        "Custom Dashboards & MMM Inputs",
        "Dedicated Account Manager",
        "Priority Support",
      ],
      popular: false,
    },
  ];

  const caseStudy = {
    client: "D2C Skincare Brand",
    challenge:
      "Low awareness in tier‑1/2 cities and low trust for new launches",
    solution:
      "Nano + mid‑tier creator mix across Instagram Reels & YouTube Shorts with coupon tracking",
    results: [
      { metric: "Reach", value: "12M+" },
      { metric: "Coupon Sales", value: "+210%" },
      { metric: "CPA vs Paid Social", value: "-32%" },
      { metric: "Repeat Purchases", value: "+45%" },
    ],
  };
  return (
    <>
      <Helmet>
        <title>Influencer Marketing Services | Sunceadtech</title>
        <meta
          name="description"
          content="Discover, manage, and scale influencer campaigns across Instagram, YouTube & TikTok. End‑to‑end influencer marketing with discovery, contracts, tracking & ROI."
        />
        <meta
          name="keywords"
          content="influencer marketing, creator marketing, instagram influencers, youtube collaborations, tiktok creators, KOL marketing, Sunceadtech"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://example.com/services/influencer" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Influencer Marketing Services | Sunceadtech"
        />
        <meta
          property="og:description"
          content="Run high‑ROI influencer campaigns with creator discovery, negotiation, and real‑time performance tracking."
        />
        <meta
          property="og:url"
          content="https://example.com/influencer-marketing"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        {/* Hero Section */}
        <div
          className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 10l4.553-.661a1 1 0 01.94 1.54l-3.295 3.21.777 4.53a1 1 0 01-1.451 1.054L12 18.347l-4.523 2.326a1 1 0 01-1.451-1.054l.777-4.53-3.295-3.21a1 1 0 01.94-1.54L9 10l2-4 2 4z"
                      />
                    </svg>
                  </div>
                  <span className="text-pink-600 font-semibold text-lg">
                    Influencer Marketing
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Partner with Creators &
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Grow with Authentic Content
                  </span>
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover the right creators, craft compelling briefs, and run
                  high‑ROI influencer campaigns across Instagram, YouTube,
                  TikTok, and LinkedIn. We handle everything—from discovery and
                  negotiations to tracking and reporting.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-xl hover:from-pink-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Request a free influencer marketing audit by contacting us"
                    title="Request a free influencer marketing audit"
                  >
                    Get Influencer Audit
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-pink-200"
                    aria-label="View our influencer campaign case studies"
                    title="View our influencer marketing work"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {influencerPlatforms.map((platform) => (
                  <div
                    key={platform.id}
                    className={`bg-gradient-to-br ${platform.color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-xl`}
                  >
                    <div className="text-3xl mb-2">{platform.icon}</div>
                    <h3 className="font-bold text-lg mb-2">{platform.name}</h3>
                    <div className="space-y-1 text-sm opacity-90">
                      <div>{platform.stats.creators}</div>
                      <div>{platform.stats.engagement}</div>
                      <div>{platform.stats.bestFor}</div>
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
                End‑to‑End Influencer Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discovery se lekar contracts, execution aur ROI tak—hum aapke
                liye poora creator program manage karte hain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </p>
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
                How we scaled a D2C launch with nano + mid‑tier creators
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    {caseStudy.client}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold text-pink-600 mb-2">
                        Challenge
                      </p>
                      <p className="text-gray-600">{caseStudy.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-pink-600 mb-2">
                        Solution
                      </p>
                      <p className="text-gray-600">{caseStudy.solution}</p>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center mt-8 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300"
                  >
                    View Full Case Study
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {caseStudy.results.map((result, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 text-center"
                    >
                      <div className="text-3xl font-bold text-pink-600 mb-2">
                        {result.value}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {result.metric}
                      </div>
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
                Choose Your Influencer Package
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible packages for launches, promos ya always‑on
                programs—hamisha ROI par focus.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 relative ${
                    pkg.popular
                      ? "bg-gradient-to-br from-pink-500 to-purple-600 text-white transform scale-105"
                      : "bg-gradient-to-br from-gray-50 to-pink-50"
                  } hover:shadow-xl transition-all duration-300`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-yellow-500 text-yellow-900 px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <p
                      className={`text-2xl font-bold mb-2 ${
                        pkg.popular ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {pkg.name}
                    </p>
                    <div
                      className={`mb-4 ${
                        pkg.popular ? "text-pink-100" : "text-pink-600"
                      }`}
                    >
                      {pkg.platforms}
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span
                        className={`text-4xl font-bold ${
                          pkg.popular ? "text-white" : "text-gray-800"
                        }`}
                      >
                        {pkg.price}
                      </span>
                      <span
                        className={`ml-1 ${
                          pkg.popular ? "text-pink-100" : "text-gray-600"
                        }`}
                      >
                        {pkg.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 mr-3 ${
                            pkg.popular ? "bg-pink-200" : "bg-pink-500"
                          }`}
                        ></div>
                        <span
                          className={
                            pkg.popular ? "text-pink-100" : "text-gray-700"
                          }
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-white text-pink-600 hover:bg-pink-50"
                        : "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700"
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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Scale with Creators?
            </h3>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Let’s build an influencer program that drives measurable
              growth—free audit & roadmap included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-pink-700 font-semibold rounded-xl hover:bg-pink-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Free Audit
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
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
                <div className="text-3xl font-bold text-white mb-2">800+</div>
                <div className="text-pink-100">Creator Collaborations</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">96%</div>
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
    </>
  );
}

export default InfluencerMarketing;
