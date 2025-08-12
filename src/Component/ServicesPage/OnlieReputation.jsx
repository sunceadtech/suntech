import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function OnlieReputation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    setIsVisible(true);
  }, []);
  const ormServices = [
    {
      title: "Review Monitoring & Response",
      description:
        "Track reviews across Google, Facebook, Practo and other platforms with prompt, brand-safe replies.",
      features: [
        "Automated Review Alerts",
        "Response Playbooks",
        "Escalation Rules",
        "Sentiment Analysis",
      ],
    },
    {
      title: "Crisis Management",
      description:
        "Contain emerging issues fast with a proven playbook for social, news and forums.",
      features: [
        "Real-time War Room",
        "Stakeholder Messaging",
        "Media Guidelines",
        "Post-crisis Audit",
      ],
    },
    {
      title: "SERP Cleanup & Suppression",
      description:
        "Push down negative links and elevate positive assets on Google for branded queries.",
      features: [
        "Owned Asset Optimization",
        "Digital PR & Features",
        "Knowledge Panel Hygiene",
        "Wikipedia/Listing Guidance",
      ],
    },
    {
      title: "Brand Mentions & Social Listening",
      description:
        "Discover, classify and act on mentions across web & social to protect brand trust.",
      features: [
        "Platform-wide Listening",
        "Influencer/Publisher Mapping",
        "Competitor Watch",
        "Monthly Insights Report",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Review Tracking (Google + 1 Platform)",
        "Weekly Reputation Report",
        "Response Templates",
        "Basic SERP Suppression Plan",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "₹₹₹",
      period: "/month",
      features: [
        "Multi-platform Monitoring (4+)",
        "Crisis Playbook & On-call Support",
        "Digital PR Outreach (2/mo)",
        "Advanced SERP Suppression",
        "Bi‑weekly Strategy Reviews",
        "Phone + Email Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "₹₹₹",
      period: "/quarter",
      features: [
        "24/7 Monitoring & War Room",
        "High-volume Response Management",
        "PR + Thought Leadership Program",
        "Aggressive Link Suppression",
        "Custom Dashboards & SLAs",
        "Dedicated Account Manager",
        "Priority Support",
      ],
      popular: false,
    },
  ];

  const faqs = [
    {
      question: "How long does ORM take to show results?",
      answer:
        "Quick wins can appear in 2–4 weeks (faster responses, improved ratings). SERP suppression and PR impact typically take 2–3 months for stable, measurable shifts.",
    },
    {
      question: "Can you remove negative articles or reviews?",
      answer:
        "We can’t delete third‑party content, but we can push down harmful links, request removals if they violate policies, and offset with stronger positive assets.",
    },
    {
      question: "Which platforms do you monitor?",
      answer:
        "Google Reviews, Facebook, Instagram, X (Twitter), YouTube, Practo, Justdial, Quora, news sites and niche forums—plus any custom sources you request.",
    },
    {
      question: "Is ORM suitable for local clinics and SMEs?",
      answer:
        "Yes. We tailor monitoring, response SOPs and PR to your size and goals—often starting with Google reviews and local listings for quick impact.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Online Reputation Management Services | Protect & Grow Your Brand |
          Sunceadtech
        </title>
        <meta
          name="description"
          content="Sunceadtech offers expert Online Reputation Management services including review monitoring, crisis response, SERP suppression, and brand trust building. Boost your ratings and safeguard your online presence today."
        />
        <meta
          name="keywords"
          content="Online Reputation Management Services, ORM services, Sunceadtech"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://example.com/online-reputation-management"
        />
        {/* Open Graph / Twitter Card metadata can be added here for social sharing */}
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg mr-4">
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
                        d="M3 10h3l3 10 4-18 3 8h5"
                      />
                    </svg>
                  </div>
                  <span className="text-indigo-600 font-semibold text-lg">
                    Online Reputation Management
                  </span>
                </div>

                {/* Unique SEO-Friendly H1 */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  Trusted Online Reputation Management to Protect Your Brand
                  Image
                </h1>

                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Monitor reviews and mentions, respond quickly, and keep
                  negative content out of sight. Our combined approach of review
                  operations, crisis playbooks, PR, and SEO safeguards your
                  brand reputation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    aria-label="Request a free reputation audit"
                    title="Get Free Reputation Audit"
                  >
                    Get Free Reputation Audit
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
                    className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-indigo-200"
                    aria-label="Schedule an ORM consultation"
                    title="Schedule ORM Consultation"
                  >
                    Schedule Consultation
                  </Link>
                </div>
              </div>

              {/* Metric Card */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Average Rating Lift</span>
                      <span className="text-indigo-600 font-bold">+1.2★</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-3 rounded-full w-4/5"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">
                        Negative Links Pushed
                      </span>
                      <span className="text-indigo-600 font-bold">‑70%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-3 rounded-full w-5/6"></div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Response SLA Met</span>
                      <span className="text-indigo-600 font-bold">99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-indigo-500 to-violet-500 h-3 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Metric Card */}
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* H2 for Services */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Complete Online Reputation Management Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From review operations to SERP suppression and crisis control,
                we manage every layer of your brand reputation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {ormServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-50 to-violet-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* H3 for each service title */}
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
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
        <div className="py-16 px-4 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              {/* H2 for Pricing */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                ORM Packages & Pricing
              </h2>
              <p className="text-xl text-gray-600">
                Pick a plan that fits your brand’s scale and risk profile
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl shadow-xl p-8 relative transform hover:scale-105 transition-all duration-300 ${
                    pkg.popular ? "ring-4 ring-indigo-500 ring-opacity-50" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    {/* H3 for package name */}
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-indigo-600">
                        {pkg.price}
                      </span>
                      <span className="text-gray-600 ml-1">{pkg.period}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <svg
                          className="w-5 h-5 text-indigo-500 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      pkg.popular
                        ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-700 hover:to-violet-700 shadow-lg"
                        : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
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
              {/* H2 for Process */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Our Proven 4-Step ORM Process to Restore Trust
              </h2>
              <p className="text-xl text-gray-600">
                Practical steps that restore trust—and keep it
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Audit & Baseline",
                  desc: "Ratings, SERP, mentions & risk mapping",
                },
                {
                  step: "02",
                  title: "Playbooks & Setup",
                  desc: "Review ops, response SOPs & escalation",
                },
                {
                  step: "03",
                  title: "Execution",
                  desc: "Monitoring, PR, suppression & outreach",
                },
                {
                  step: "04",
                  title: "Measure & Improve",
                  desc: "Dashboards, insights & monthly tune-ups",
                },
              ].map((process, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {process.step}
                  </div>
                  {/* H3 for each process step */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">{process.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-16 px-4 bg-gradient-to-br from-indigo-50 to-violet-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              {/* FAQ main heading is optional but here kept as h3 */}
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-violet-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <p className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Brand Reputation?
            </p>
            <p className="text-xl mb-8 opacity-90">
              Get a free reputation audit and a step‑by‑step plan to improve
              ratings, visibility and trust.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-700 font-semibold rounded-xl hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Get Free Reputation Audit
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
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-indigo-700 transform hover:scale-105 transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OnlieReputation;
