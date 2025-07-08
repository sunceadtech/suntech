import React, { useState, useEffect } from 'react';
import {
  TrendingUp, Target, Eye, Users, ShoppingCart, BarChart3,
  PlayCircle, ExternalLink, Award, Zap, Globe, Search,
  ArrowRight, Filter, Calendar, Clock, CheckCircle2,
  MousePointer, Smartphone, Monitor, Mail, Share2
} from 'lucide-react';

import { Link } from 'react-router-dom';
const PortfolioPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const filters = [
    { id: 'all', label: 'All Projects', icon: <Globe className="w-4 h-4" /> },
    { id: 'social', label: 'Social Media', icon: <Share2 className="w-4 h-4" /> },
    { id: 'ppc', label: 'PPC Campaigns', icon: <Target className="w-4 h-4" /> },
    { id: 'seo', label: 'SEO & Content', icon: <Search className="w-4 h-4" /> },
    { id: 'email', label: 'Video Content', icon: <PlayCircle className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "E-commerce Growth Campaign",
      client: "TechGear Pro",
      category: "ppc",
      image: "./images/dynamic.webp",
      results: {
        metric1: { value: "450%", label: "Revenue Increase" },
        metric2: { value: "12x", label: "ROAS" },
        metric3: { value: "2.3M", label: "Impressions" }
      },
      duration: "6 months",
      description: "Complete digital transformation for a tech retailer, including PPC, social media, and conversion optimization.",
      tags: ["Google Ads", "Facebook Ads", "CRO", "Analytics"],
      featured: true
    },
    {
      id: 2,
      title: "Brand Awareness Revolution",
      client: "Urban Lifestyle Co.",
      category: "social",
      image: "./images/branding.webp",
      results: {
        metric1: { value: "8.5M", label: "Reach" },
        metric2: { value: "340%", label: "Engagement" },
        metric3: { value: "50K", label: "New Followers" }
      },
      duration: "4 months",
      description: "Viral social media campaign that transformed a local brand into a national trendsetter.",
      tags: ["Instagram", "TikTok", "Influencer", "Content"],
      featured: false
    },
    {
      id: 3,
      title: "SEO Domination Strategy",
      client: "HealthTech Solutions",
      category: "seo",
      image: "./images/seo.webp",
      results: {
        metric1: { value: "#1", label: "Rankings" },
        metric2: { value: "580%", label: "Organic Traffic" },
        metric3: { value: "45", label: "Keywords Ranked" }
      },
      duration: "8 months",
      description: "Comprehensive SEO strategy that took a startup from zero to market leader in organic search.",
      tags: ["Technical SEO", "Content", "Link Building", "Local SEO"],
      featured: true
    },
   {
  id: 4,
  title: "Digital Media Mastery",
  client: "FitLife Nutrition",
  category: "digital-media",
  image: "./images/digitalmedia.webp", // You can change the image URL if needed
  results: {
    metric1: { value: "5.2M", label: "Impressions" },
    metric2: { value: "740K", label: "Engagements" },
    metric3: { value: "$3.1M", label: "Revenue Attributed" }
  },
  duration: "4 months",
  description: "A full-scale digital media campaign blending paid and organic strategies to elevate brand presence and drive measurable ROI.",
  tags: ["Media Planning", "Cross-Channel Strategy", "Audience Targeting", "Performance Optimization"],
  featured: false
},

 {
  id: 5,
  title: "Scalable Software Transformation",
  client: "Eco-Friendly Homes",
  category: "software-development",
  image: "./images/laptop.avif", // Replace if you have a specific dev image
  results: {
    metric1: { value: "92%", label: "System Efficiency" },
    metric2: { value: "78%", label: "User Adoption" },
    metric3: { value: "$2.4M", label: "Annual Cost Savings" }
  },
  duration: "10 months",
  description: "End-to-end software development strategy, focusing on scalable architecture, intuitive UI/UX, and cloud-first deployment to streamline operations.",
  tags: ["Custom Software", "Agile Delivery", "Cloud Integration", "User-Centric Design"],
  featured: true
},

    {
      id: 6,
      title: "Local Business Explosion",
      client: "Metro Restaurant Group",
      category: "social",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      results: {
        metric1: { value: "300%", label: "Foot Traffic" },
        metric2: { value: "12K", label: "App Downloads" },
        metric3: { value: "4.9", label: "Review Rating" }
      },
      duration: "5 months",
      description: "Hyperlocal marketing strategy that turned struggling restaurants into community favorites.",
      tags: ["Local Marketing", "Google My Business", "Reviews", "Geo-Targeting"],
      featured: false
    }
  ];

  const testimonials = [
    {
      quote: "The results speak for themselves - 450% revenue increase in just 6 months!",
      author: "Sarah Chen",
      company: "TechGear Pro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b9e1e5f7?w=100&h=100&fit=crop&crop=fae"
    },
    {
      quote: "Our brand went from unknown to trending nationwide. Incredible transformation!",
      author: "Mike Rodriguez",
      company: "Urban Lifestyle Co.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "From zero to #1 in Google rankings. This team knows SEO like no other.",
      author: "Dr. Amanda Foster",
      company: "HealthTech Solutions",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-white via-[aliceblue] to-[aliceblue] backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[darkred]">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2 text-[darkblue]">{project.title}</h3>
              <p className="text-[darkred] text-lg">{project.client}</p>
            </div>
            <button onClick={onClose} className="text-[darkblue] hover:text-[darkred] text-2xl">×</button>
          </div>

          <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-2xl mb-6 border border-[darkred]" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {Object.entries(project.results).map(([key, result]) => (
              <div key={key} className="text-center p-4 bg-[aliceblue] rounded-xl backdrop-blur-sm border border-[darkred]">
                <div className="text-3xl font-bold text-[darkred] mb-2">{result.value}</div>
                <div className="text-[darkblue]">{result.label}</div>
              </div>
            ))}
          </div>

          <p className="text-[darkblue] text-lg mb-6 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-[darkred] rounded-full text-sm text-[aliceblue] border border-[darkblue]">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-[darkred]">
              <Clock className="w-5 h-5" />
              <span>Duration: {project.duration}</span>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-[darkblue] to-[darkred] rounded-xl font-semibold hover:from-[darkblue] hover:to-[darkred] transition-all duration-300 text-white">
              View Live Case Study
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen  bg-gradient-to-br from-white via-[#fefefe] to-blue-50 overflow-hidden">

      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fefefe] to-blue-50"></div>
        <div className={`relative max-w-7xl mx-auto text-center transform transition-all duration-1000 mt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-[aliceblue]/20 rounded-full border border-[orange]/30 mb-8 backdrop-blur-sm">
            <Award className="w-5 h-5 mr-2 text-[orange]" />
            <span className="text-[orange] font-medium">Award-Winning Campaigns</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className=" text-blue-900">
              Success Stories
            </span>
            <br />
            <span className="bg-gradient-to-r from-[orange] to-[red] bg-clip-text text-transparent">
              That Inspire
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-[darkblue] mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover how we've helped businesses achieve extraordinary growth through data-driven marketing strategies and creative excellence
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "500%", label: "Avg Growth Rate" },
              { number: "200+", label: "Success Stories" },
              { number: "15M+", label: "Leads Generated" },
              { number: "98%", label: "Client Retention" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-[orange] mb-1">{stat.number}</div>
                <div className="text-[darkblue] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Featured Testimonial Slider */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[aliceblue]/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                  index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
              >
                <div className="bg-gradient-to-r from-[darkblue]/40 to-[red]/40 p-8 md:p-12 backdrop-blur-sm border border-[orange]/30 rounded-3xl">
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-20 h-20 rounded-full object-cover border-4 border-[orange]/50"
                    />
                    <div className="text-center md:text-left">
                      <blockquote className="text-xl md:text-2xl font-medium text-[darkblue] mb-4 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div>
                        <div className="font-bold text-[orange]">{testimonial.author}</div>
                        <div className="text-[darkblue]">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[orange] scale-125' : 'bg-[darkblue]'
                  }`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Portfolio Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${activeFilter === filter.id
                  ? 'bg-gradient-to-r from-orange-500 to-blue-500 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-black/20'
                  }`}
              >
                <p className='text-black'>{filter.icon}</p>
                <span className='text-black'>{filter.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-105 bg-white border border-gray-200"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-80 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 rounded-b-xl">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-600 text-xs rounded-full border border-orange-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-black mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{project.client}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.results).map(([key, result]) => (
                      <div key={key} className="text-center">
                        <div className="text-base font-bold text-orange-600">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{project.duration}</span>
                    </div>
                    <div className="text-orange-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Services Showcase */}
<section className="py-6 px-4 sm:px-6 lg:px-8 bg-[aliceblue]/20 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-[white] to-[aliceblue] bg-clip-text text-transparent">
        Our Expertise
      </h2>
      <p className="text-2xl text-orange-700 max-w-3xl mx-auto">
        Comprehensive digital marketing solutions that drive measurable results
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" >
      {[
        {
          icon: <Target className="w-8 h-8" />,
          title: "PPC Advertising",
          desc: "High-converting ad campaigns",
          color: "from-orange-400 to-red-500"
        },
        {
          icon: <Search className="w-8 h-8" />,
          title: "SEO Strategy",
          desc: "Rank higher, grow faster",
          color: "from-green-400 to-blue-500"
        },
        {
          icon: <PlayCircle className="w-8 h-8" />,
          title: "Video Content",
          desc: "Engaging, scroll-stopping visuals",
          color: "from-purple-500 to-pink-500"
        },
        {
          icon: <Globe className="w-8 h-8" />,
          title: "Digital Presence",
          desc: "Omnichannel brand elevation",
          color: "from-cyan-400 to-sky-500"
        }
      ].map((service, index) => (
        <div
          key={index}
          className={`p-6 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
        >
          <div className={`w-14 h-14 flex items-center text-center mx-auto justify-center rounded-xl mb-4 text-white bg-gradient-to-r ${service.color}`}>
            {service.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 text-[darkblue]">{service.title}</h3>
          <p className="text-gray-600">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[darkblue]/90 to-[orange]/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 py-2 bg-gradient-to-r from-[white] to-[aliceblue] bg-clip-text text-transparent">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-[darkblue] mb-8">
            Let's create a campaign that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold text-lg hover:from-blue-900 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[darkred]/25"
            >
              Start Your Campaign
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-[white]" />
            </Link>
          </div>
        </div>
      </section>


      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default PortfolioPage;