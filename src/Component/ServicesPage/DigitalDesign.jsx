import React, { useState, useEffect } from 'react';
import {
  Play, Film, Camera, Monitor, Smartphone, Tablet, CheckCircle, ArrowRight, Star, Zap, Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

function DigitalDesign() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Production",
      desc: "Professional video creation for brand stories, ads, and social media that captivate your audience."
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Cinematography",
      desc: "Capture cinematic visuals that enhance storytelling and leave a lasting impression."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Video Editing",
      desc: "Seamless editing that brings your footage to life with creative effects, music, and motion graphics."
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Animated Videos",
      desc: "Engage your audience with captivating animated explainer videos, intros, and social reels."
    }
  ];

  const testimonials = [
    {
      name: "Ankit Mehra",
      company: "MediaWorks",
      text: "The video content elevated our brand's social media reach—professional, creative, and impactful!",
      avatar: "🎥"
    },
    {
      name: "Lisa Carter",
      company: "GlowUp Beauty",
      text: "Our product launch video was a huge success thanks to the talented video team!",
      avatar: "💄"
    },
    {
      name: "Rajesh Patel",
      company: "StartupHub",
      text: "The explainer video they created helped us secure investors by clearly communicating our vision.",
      avatar: "🚀"
    }
  ];


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 text-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h1 className="text-5xl py-4 sm:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
              Video Content Solutions
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Bring your ideas to life with stunning video content that engages, inspires, and drives results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl transition-all">
                Start Project <ArrowRight className="inline ml-2 w-5 h-5" />
              </Link>
              <Link to='/portfolio' className="px-8 py-4 border-2 border-white/20 rounded-full text-lg hover:bg-white/10 hover:border-white/40">
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              Our Video Expertise
            </h2>
            <p className="text-lg text-gray-300">
              From concept to screen, we create impactful video content tailored to your brand and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105">
                <div className="mb-6 text-pink-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-pink-200">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300">
              Hear from clients who transformed their brand with our video content expertise.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-pink-500/50 transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{t.avatar}</div>
                  <div>
                    <p className="font-semibold text-pink-200">{t.name}</p>
                    <p className="text-gray-400 text-sm">{t.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{t.text}"</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default DigitalDesign
