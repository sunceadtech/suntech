import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, Play, Pause } from 'lucide-react';

const TestimonialComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({});

  const testimonials = [
  
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, InnovateLab",
      company: "InnovateLab",
      image: "./images/man.webp",
      rating: 5,
      text: "Outstanding service and results! The attention to detail and innovative approach helped us scale our platform to serve millions of users seamlessly.",
      location: "New York, NY",
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "GrowthCo",
      image: "./images/man2.webp",
      rating: 5,
      text: "Incredible ROI and professional execution. Our conversion rates improved by 250% within the first quarter. Highly recommend their services!",
      location: "Austin, TX",
      date: "3 weeks ago"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Founder, StartupVision",
      company: "StartupVision",
      image: "./images/man8.webp",
      rating: 5,
      text: "Game-changing partnership! The strategic insights and technical excellence delivered results beyond our wildest dreams. Our revenue doubled in 6 months.",
      location: "Seattle, WA",
      date: "1 week ago"
    },
      {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      company: "TechStart Inc",
      image: "./images/women.webp",
      rating: 5,
      text: "This solution completely transformed our business operations. The team's expertise and dedication exceeded our expectations. We've seen a 300% increase in efficiency since implementation.",
      location: "San Francisco, CA",
      date: "2 months ago"
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goToSlide = (index) => setCurrentIndex(index);
  const handleImageLoad = (id) => setImageLoaded(prev => ({ ...prev, [id]: true }));
  const renderStars = (rating) => Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${i < rating ? 'text-yellow-400 fill-yellow-400 transform scale-110' : 'text-gray-300'}`}
    />
  ));

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-orange-600 mb-3 sm:mb-4">
          What Our Clients Say
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-blue-900 max-w-2xl mx-auto leading-relaxed">
          Don't just take our word for it. Here's what industry leaders have to say about their experience.
        </p>
      </div>

      <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-violet-50 to-blue-50"></div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">

              <div className="order-2 lg:order-1 text-center lg:text-left">
                <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-blue-900 rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>

                <div className="flex justify-center lg:justify-start space-x-1 mb-4 sm:mb-6">
                  {renderStars(currentTestimonial.rating)}
                </div>

                <blockquote className="text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8 relative">
                  <span className="absolute -top-2 -left-2 text-4xl sm:text-6xl text-blue-100 font-serif">"</span>
                  <span className="relative z-10">{currentTestimonial.text}</span>
                  <span className="absolute -bottom-4 right-0 text-4xl sm:text-6xl text-blue-100 font-serif">"</span>
                </blockquote>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="text-xl sm:text-2xl font-bold text-blue-900">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-sm sm:text-base text-orange-500 font-semibold">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">
                    {currentTestimonial.company} • {currentTestimonial.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {currentTestimonial.date}
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative group">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                    {!imageLoaded[currentTestimonial.id] && (
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-blue-100 animate-pulse flex items-center justify-center">
                        <div className="w-16 h-16 bg-orange-300 rounded-full animate-bounce"></div>
                      </div>
                    )}
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${imageLoaded[currentTestimonial.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
                      onLoad={() => handleImageLoad(currentTestimonial.id)}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-violet-400 to-blue-400 rounded-full blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-orange-500 rounded-full border-2 sm:border-4 border-white shadow-lg animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-6 sm:mt-8">
          <button onClick={prevTestimonial} className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-gray-100">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
          </button>

          <div className="flex space-x-2 sm:space-x-3">
            {testimonials.map((_, index) => (
              <button key={index} onClick={() => goToSlide(index)} className={`h-2 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${currentIndex === index ? 'bg-orange-500 w-6 sm:w-8 shadow-lg' : 'bg-gray-300 w-2 sm:w-3 hover:bg-gray-400'}`} aria-label={`Go to testimonial ${index + 1}`} />
            ))}
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button onClick={() => setIsAutoPlaying(!isAutoPlaying)} className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-300 transform hover:scale-110 ${isAutoPlaying ? 'bg-orange-500 text-white shadow-lg' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>
              {isAutoPlaying ? <Pause className="w-3 h-3 sm:w-4 sm:h-4" /> : <Play className="w-3 h-3 sm:w-4 sm:h-4 ml-0.5" />}
            </button>

            <button onClick={nextTestimonial} className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group border border-gray-100">
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-orange-500 transition-colors" />
            </button>
          </div>
        </div>
      </div>

      <div className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '250%', label: 'Average ROI' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm lg:text-base text-blue-900 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
