import React, { useState, useEffect } from 'react';
import { Target, TrendingUp, Users, Lightbulb, Rocket, Heart, Play, Megaphone, Shield, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeValue, setActiveValue] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveValue(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { number: "500+", label: "Campaigns Launched", icon: <Rocket className="w-6 h-6" /> },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "15M+", label: "Leads Generated", icon: <Target className="w-6 h-6" /> },
    { number: "300%", label: "Avg ROI Increase", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Results Driven",
      description: "We focus on measurable outcomes that directly impact your bottom line and business growth.",
      color: "from-orange-400 to-yellow-400"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Staying ahead of digital trends to deliver cutting-edge marketing solutions for our clients.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client Obsessed",
      description: "Your success is our success. We treat every client's business as if it were our own.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear communication, honest reporting, and full visibility into all marketing activities.",
      color: "from-blue-900 to-blue-500"
    }
  ];

  const openVideo = () => setShowVideo(true);
  const closeVideo = () => setShowVideo(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-[#f0f8ff] to-blue-100 overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-6">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full border mb-8">
              <Megaphone className="w-5 h-5 mr-2 text-orange-500" />
              <span className="text-orange-500 font-medium">About Our Digital Marketing Agency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
                Driving Growth
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Through Innovation
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 mb-8 leading-relaxed">
              We're not just another marketing agency. We're growth partners who combine creativity with data-driven strategies to deliver exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio"> <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-xl cursor-pointer text-lg hover:from-blue-900 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
              >

                Watch Our Story
              </motion.button>
              </Link>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-96 bg-gradient-to-br from-blue-200 to-blue-400 rounded-3xl overflow-hidden border border-blue-300 flex items-center justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-20 h-20 bg-white/40 rounded-full flex items-center justify-center cursor-pointer"
              onClick={openVideo}
            >
              <Play className="w-8 h-8 text-white ml-1" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105">
                <div className="flex justify-center mb-4 text-orange-500">
                  {stat.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-bold mb-2 text-orange-600">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f0f8ff]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-16 text-orange-600 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border border-orange-300 hover:scale-105 transition transform cursor-pointer ${activeValue === index ? 'ring-2 ring-orange-400' : ''}`}
                onClick={() => setActiveValue(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative w-full max-w-4xl p-4 bg-white rounded-lg shadow-lg"
            >
              <button onClick={closeVideo} className="absolute top-4 right-4 text-black hover:text-red-500">
                <X className="w-6 h-6" />
              </button>
              <div className="aspect-w-16 aspect-h-9">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QsY8fnvMn6c?si=B9qWRl7KQo4JHl3B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default AboutPage;
