import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const serviceHighlights = [
  {
    icon: "🎯",
    title: "SEO & SEM",
    desc: "Rank higher & get discovered faster",
    path: "/services/seo",
  },
  {
    icon: "📱",
    title: "Social Media",
    desc: "Engage audiences across platforms",
    path: "/services/social-media",
  },
  {
    icon: "💰",
    title: "PPC Ads",
    desc: "Maximize ROI with smart targeting",
    path: "/services/ppc",
  },
  {
    icon: "✍️",
    title: "Content Marketing",
    desc: "Drive leads through storytelling",
    path: "/services/content",
  },
  {
    icon: "🎥",
    title: "Video Marketing",
    desc: "Capture attention with visuals",
    path: "/services/video-content",
  },
  {
    icon: "📊",
    title: "Analytics",
    desc: "Make informed decisions with data",
    path: "/services/analytics",
  },
  {
    icon: "💻",
    title: "Web Development",
    desc: "Responsive, SEO-friendly websites",
    path: "/services/web",
  },
  {
    icon: "🧠",
    title: "Software Development",
    desc: "Custom scalable business software",
    path: "/services/software",
  },
  {
    icon: "📲",
    title: "App Development",
    desc: "iOS & Android apps for modern brands",
    path: "/services/mobile",
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "User-focused designs that convert",
    path: "/services/uiux",
  },
  {
    icon: "🧾",
    title: "Digital Media Planning",
    desc: "Plan & buy ads across channels",
    path: "/services/digital-media",
  },
  {
    icon: "👥",
    title: "Social Media Consulting",
    desc: "Tailored growth strategies for social",
    path: "/services/social-media",
  },
  {
    icon: "📢",
    title: "Branding & Strategy",
    desc: "Craft strong, memorable identities",
    path: "/services/branding",
  },
  {
    icon: "⚙️",
    title: "Marketing Automation",
    desc: "Automate & scale your campaigns",
    path: "/services/analysis",
  },
  {
    icon: "🖼️",
    title: "Graphic Design",
    desc: "Visual content for marketing & branding",
    path: "/services/graphic",
  },
];

const BestDigitalMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Agency in Delhi NCR | Sunceadtech</title>
        <meta
          name="description"
          content="Sunceadtech is the best digital marketing agency in Delhi NCR offering SEO, video marketing, mobile app development, and custom web solutions to boost your online growth."
        />
        <meta
          name="keywords"
          content="best digital marketing agency in Delhi, SEO services Delhi NCR, video marketing India, mobile app development Delhi, web development company, Sunceadtech, branding services, performance marketing, PPC, social media marketing"
        />
      </Helmet>

      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-hidden">
        {/* Background Glow Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-8"
          >
            <span className="block">Best Digital</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600 py-2">
              Marketing Agency
            </span>
            <span className="block">In Delhi NCR</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            At <strong>SunceADTECH</strong>, we combine creativity, technology,
            and strategy to grow brands across India and globally. From{" "}
            <strong>SEO</strong> and <strong>video marketing</strong> to{" "}
            <strong>mobile apps</strong> and{" "}
            <strong>custom web development</strong>, we turn clicks into loyal
            customers.
          </motion.p>

          {/* Service Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-14"
          >
            {serviceHighlights.map((service, i) => (
              <Link
                key={i}
                to={service.path}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-transform transform hover:scale-105 block text-left"
                title={`Learn more about ${service.title}`}
                aria-label={`Service: ${service.title}`}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </Link>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/blog"
              className="px-6 py-3 text-white bg-blue-600 font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-md"
              aria-label="Explore all digital marketing services offered by SunceADTECH"
              title="Explore all digital marketing services offered by SunceADTECH"
            >
              Explore All Digital Marketing Services
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 text-blue-600 bg-white border border-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-300"
              aria-label="Contact SunceADTECH to get a free marketing audit"
              title="Contact SunceADTECH to get a free marketing audit"
            >
              Contact Us for a Free Marketing Audit
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BestDigitalMarketing;
