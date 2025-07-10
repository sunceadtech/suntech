import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, ArrowRight, TrendingUp, Eye, MessageCircle, Share2, Search, Filter, ChevronDown, BookOpen, Target, BarChart3, Megaphone, Users, Zap, Heart, Bookmark, Play } from 'lucide-react';
import { Link } from "react-router-dom"
const DigitalMarketingBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setFeaturedIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { id: 'all', name: 'All Posts', icon: <BookOpen className="w-4 h-4" />, count: 24 },
    { id: 'seo', name: 'SEO', icon: <TrendingUp className="w-4 h-4" />, count: 8 },
    { id: 'social', name: 'Social Media', icon: <Users className="w-4 h-4" />, count: 6 },
    { id: 'ppc', name: 'PPC Advertising', icon: <Target className="w-4 h-4" />, count: 5 },
    { id: 'analytics', name: 'Analytics', icon: <BarChart3 className="w-4 h-4" />, count: 5 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing in 2025",
      excerpt: "Discover the latest trends and technologies shaping the digital marketing landscape.",
      image: "./images/digital.webp",
      category: "Trends",
      readTime: "8 min",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      views: "2.3k",
      isVideo: false
    },
    {
      id: 2,
      title: "AI-Powered Content Marketing Strategies",
      excerpt: "Learn how artificial intelligence is revolutionizing content creation and distribution.",
      image: "./images/cretaive.avif",
      category: "AI & Marketing",
      readTime: "12 min",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      views: "1.8k",
      isVideo: true
    },
    {
      id: 3,
      title: "Social Commerce: The New Frontier",
      excerpt: "Explore how social platforms are becoming the new shopping destinations.",
      image: "./images/social3.avif",
      category: "Social Commerce",
      readTime: "6 min",
      author: "Emma Davis",
      date: "Dec 10, 2024",
      views: "3.1k",
      isVideo: false
    }
  ];

  const blogPosts = [
    {
      id: 4,
      title: "10 SEO Mistakes That Are Killing Your Rankings",
      excerpt: "Avoid these common SEO pitfalls that could be hurting your search visibility.",
      image: "./images/seo.webp",
      category: "seo",
      categoryName: "SEO",
      readTime: "7 min",
      author: "Alex Rodriguez",
      date: "Dec 8, 2024",
      views: "1.5k",
      comments: 23,
      likes: 45
    },
    {
      id: 5,
      title: "Instagram Reels vs TikTok: Which Platform Wins?",
      excerpt: "A comprehensive comparison of two major short-form video platforms.",
      image: "./images/social2.avif",
      category: "social",
      categoryName: "Social Media",
      readTime: "5 min",
      author: "Lisa Park",
      date: "Dec 5, 2024",
      views: "2.1k",
      comments: 31,
      likes: 67
    },
    {
      id: 6,
      title: "Google Ads vs Facebook Ads: ROI Comparison 2024",
      excerpt: "Detailed analysis of which platform delivers better returns for your ad spend.",
      image: "./images/googleadd.webp",
      category: "ppc",
      categoryName: "PPC Advertising",
      readTime: "10 min",
      author: "David Kim",
      date: "Dec 3, 2024",
      views: "1.9k",
      comments: 18,
      likes: 52
    },
    {
      id: 7,
      title: "Digital Marketing Automation: Complete Guide",
      excerpt: "Set up effective email sequences that convert prospects into customers.",
      image: "./images/digitalmedia.webp",
      category: "Scoial media",
      categoryName: "Digital Marketing",
      readTime: "9 min",
      author: "Jenny Wilson",
      date: "Dec 1, 2024",
      views: "1.3k",
      comments: 15,
      likes: 38
    },
    {
      id: 8,
      title: "GA4 Migration: Everything You Need to Know",
      excerpt: "Complete guide to transitioning from Universal Analytics to GA4.",
      image: "./images/share.avif",
      category: "analytics",
      categoryName: "Analytics",
      readTime: "15 min",
      author: "Tom Anderson",
      date: "Nov 28, 2024",
      views: "2.7k",
      comments: 42,
      likes: 89
    },
    {
      id: 9,
      title: "Content Marketing ROI: How to Measure Success",
      excerpt: "Learn the key metrics and KPIs that matter for content marketing.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop",
      category: "content",
      categoryName: "Content Marketing",
      readTime: "8 min",
      author: "Rachel Green",
      date: "Nov 25, 2024",
      views: "1.7k",
      comments: 26,
      likes: 54
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
<div className="min-h-screen bg-[aliceblue]">
  {/* Hero Section */}
  <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[aliceblue]">
    <div className="relative max-w-7xl mx-auto">
      <div className={`text-center transform transition-all duration-1000 mt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

        {/* Updated Badge with gradient like portfolio */}
        <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-500 rounded-full px-6 py-2 mb-8 shadow-md">
          <Megaphone className="w-5 h-5 mr-2 text-white" />
          <span className="text-white font-medium">Digital Marketing Blogs</span>
        </div>

        {/* Matching heading style */}
        <h1 className="text-4xl py-4 sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[darkblue] to-[orange] bg-clip-text text-transparent">
          Marketing Blog
        </h1>

        {/* Matching paragraph color */}
        <p className="text-xl text-orange-700 mb-12 max-w-3xl mx-auto">
          Stay ahead of the curve with the latest digital marketing strategies, trends, and insights from industry experts.
        </p>
      </div>
    </div>
  </section>



      {/* Featured Posts Carousel */}
         <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[white]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-900/90">
              Featured Articles
            </h2>
            <p className="text-[darkblue] text-lg">Hand-picked content from our marketing experts</p>
          </div>

          {/* ✅ Updated border & alt text */}
          <div className="relative overflow-hidden rounded-3xl border border-[darkblue]/10 bg-white shadow-xl">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${featuredIndex * 100}%)` }}
            >
              {featuredPosts.map((post, index) => (
                <div key={post.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-[500px] sm:h-[600px] bg-gradient-to-br from-[darkblue]/50 to-[orange]/50 rounded-3xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={`Cover image for '${post.title}' by ${post.author}`}
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[darkblue] via-[darkblue]/50 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-end p-8 sm:p-12">
                      <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                          <span className="bg-[orange]/20 text-[orange] px-4 py-2 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          {post.isVideo && (
                            <div className="flex items-center bg-[darkblue]/20 text-[darkblue] px-4 py-2 rounded-full text-sm">
                              <Play className="w-4 h-4 mr-1" />
                              Video
                            </div>
                          )}
                        </div>
                        <h3 className="text-3xl sm:text-5xl font-bold mb-4 text-[white]">
                          {post.title}
                        </h3>
                        <p className="text-xl text-[white] mb-8 max-w-2xl">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-6 text-[white]">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </div>
                            <div className="flex items-center gap-2">
                              <Eye className="w-4 h-4" />
                              {post.views}
                            </div>
                          </div>
                          <button className="group bg-orange-500 cursor-pointer px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-white">
                            Read More
                            <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {featuredPosts.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === featuredIndex ? 'bg-[orange] scale-125' : 'bg-[darkblue]/30'}`}
                  onClick={() => setFeaturedIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[white]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">

            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[darkblue] w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[orange]/90 rounded-full text-[darkblue] placeholder-[darkblue] focus:outline-none focus:ring-2 focus:ring-[blue] focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${selectedCategory === category.id
                    ? 'bg-[#ff8c00] text-[white] shadow-lg'
                    : 'bg-white border border-[darkblue]/70 text-[darkblue] hover:bg-[white]'
                    }`}
                >
                  {category.icon}
                  {category.name}
                  <span className="text-xs bg-[white] text-[darkblue] px-2 py-0.5 rounded-full border border-[darkblue]/20">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>


      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[white]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-orange-500">
              Latest Articles
            </h2>
            <p className="text-[darkblue] text-lg">
              {filteredPosts.length} articles found
              {selectedCategory !== 'all' && (
                <span className="ml-2 text-[orange]">
                  in {categories.find(c => c.id === selectedCategory)?.name}
                </span>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group bg-gradient-to-br from-[white] to-[white] backdrop-blur-sm rounded-2xl overflow-hidden border border-[darkblue]/10 hover:border-[orange]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[darkblue]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-[orange] text-[white] px-3 py-1 rounded-full text-xs font-medium">
                      {post.categoryName}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="bg-[white]/70 hover:bg-[aliceblue] p-2 rounded-full transition-colors duration-200">
                      <Bookmark className="w-4 h-4 text-[darkblue]" />
                    </button>
                    <button className="bg-[white]/70 hover:bg-[aliceblue] p-2 rounded-full transition-colors duration-200">
                      <Share2 className="w-4 h-4 text-[darkblue]" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-sm text-[darkblue]">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-[darkblue] group-hover:text-[orange] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-[darkblue] mb-6 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-[darkblue]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-[darkblue]/20">
                    <div className="flex items-center gap-4 text-sm text-[darkblue]">
                      <button className="flex items-center gap-1 hover:text-[orange] transition-colors duration-200">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </button>
                      <button className="flex items-center gap-1 hover:text-[orange] transition-colors duration-200">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
{/* Load More Button */}
<div className="text-center mt-12">
  <button className="group bg-gradient-to-r from-white to-[orange] hover:from-[orange] hover:to-[darkblue] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-[darkblue] border border-[darkblue]/30">
    Load More Articles
    <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-200 text-[darkblue]" />
  </button>
</div>
</div>
</section>

{/* Newsletter Subscription */}
<section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[darkblue]/5">
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-8">
      <Zap className="w-12 h-12 text-[orange] mx-auto mb-4 animate-pulse" />
      <h2 className="text-3xl sm:text-4xl py-4 font-bold mb-4 text-[darkblue]">
        Stay Updated
      </h2>
      <p className="text-xl text-[darkblue] max-w-2xl mx-auto">
        Get the latest digital marketing insights delivered straight to your inbox. Join 10,000+ marketers who trust our newsletter.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <Link to="/contact" className="mx-auto cursor-pointer">
        <button className="bg-gradient-to-r from-[darkblue] to-[orange] hover:from-[orange] hover:to-[darkblue] px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl text-white">
          Know More
        </button>
      </Link>
    </div>
    <p className="text-sm text-[darkblue] mt-4">
      No spam, unsubscribe at any time.
    </p>
  </div>
</section>
    </div>
    </>
  );
};

export default DigitalMarketingBlog;