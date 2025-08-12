import React from "react";
import {
  PenTool,
  Feather,
  LayoutTemplate,
  Brush,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function LogoDesign() {
  const services = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Custom Logo Design",
      desc: "Unique and memorable logos tailored to reflect your brand’s identity and values.",
    },
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Typography & Iconography",
      desc: "Distinct fonts and icons crafted to enhance recognition and visual appeal.",
    },
    {
      icon: <LayoutTemplate className="w-8 h-8" />,
      title: "Brand Identity Kits",
      desc: "Complete logo packages including colors, fonts, and guidelines for consistency.",
    },
    {
      icon: <Brush className="w-8 h-8" />,
      title: "Logo Revamp",
      desc: "Modernize outdated logos while retaining core brand essence and familiarity.",
    },
  ];

  const testimonials = [
    {
      name: "Priya Kapoor",
      company: "Artistry Lane",
      text: "SunceADTECH created a logo that truly captured my vision. It’s bold, clean, and exactly what I needed.",
      avatar: "🎨",
    },
    {
      name: "David Chen",
      company: "TechNova",
      text: "Their branding expertise helped us elevate our startup image and made us stand out instantly.",
      avatar: "🚀",
    },
    {
      name: "Ritika Sharma",
      company: "Bloom Wellness",
      text: "Our refreshed logo feels professional and modern—clients love it, and so do we!",
      avatar: "🌸",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Professional Logo Design Services | Custom Business Logos by
          Sunceadtech
        </title>
        <meta
          name="description"
          content="Get custom logo design services from Sunceadtech. Memorable, creative logos crafted to elevate your brand identity and grow your business."
        />
        <meta
          name="keywords"
          content="professional logo design, custom logo design, business logos, creative branding, logo designers, Sunceadtech"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://example.com/services/logo-design" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Professional Logo Design Services | Custom Business Logos by Sunceadtech"
        />
        <meta
          property="og:description"
          content="Create unique and impactful business logos with Sunceadtech’s professional logo design services. Elevate your brand identity today."
        />
        <meta
          property="og:url"
          content="https://example.com/services/logo-design"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-7xl mx-auto relative z-10">
            {/* H1 - Unique & Keyword-rich */}
            <h1 className="text-5xl py-4 sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
              Expert Logo Design Services to Elevate Your Brand Identity
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Create a lasting impression with professional logos that speak
              your brand’s language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all"
              >
                Start Your Logo Project{" "}
                <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border-2 border-white/20 rounded-full text-lg hover:bg-white/10 hover:border-white/40"
              >
                Explore Branding Work
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
          <div className="max-w-7xl mx-auto text-center mb-16">
            {/* H2 */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Our Logo Design Expertise
            </h2>
            <p className="text-lg text-gray-300">
              End-to-end logo design solutions that align with your mission,
              audience, and future growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105"
              >
                <div className="mb-6 text-pink-400">{service.icon}</div>
                {/* H3 */}
                <h3 className="text-xl font-semibold mb-4 text-pink-200">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            {/* H2 */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Here’s what our happy clients say about their brand
              transformations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{t.avatar}</div>
                  <div>
                    {/* H3 */}
                    <h3 className="font-semibold text-pink-200">{t.name}</h3>
                    <p className="text-gray-400 text-sm">{t.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
          <div className="max-w-7xl mx-auto text-center mb-16">
            {/* H2 */}
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Why Choose Sunceadtech for Logo Design?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Combining creativity with strategy to deliver logos that captivate
              and convert.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105">
              {/* H3 */}
              <h3 className="text-xl font-semibold mb-4 text-pink-200">
                Industry-Leading Creative Expertise
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Our team uses the latest trends and timeless design principles
                for impactful logos.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105">
              {/* H3 */}
              <h3 className="text-xl font-semibold mb-4 text-pink-200">
                Dedicated Support from Concept to Delivery
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We work closely with you to ensure your vision is perfectly
                captured.
              </p>
            </div>
            <div className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105">
              {/* H3 */}
              <h3 className="text-xl font-semibold mb-4 text-pink-200">
                Affordable Packages with Guaranteed Satisfaction
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Choose a plan that fits your needs without compromising quality.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
