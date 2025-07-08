import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

import { useNavigate } from 'react-router-dom';
const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const services = [
        'SEO Marketing',
        'Social Media Marketing',
        'PPC Advertising',
        'Content Marketing',
        'Website Maintance & security',
        'Video Content',
        'Branding',
        'Graphic Design',
        'Web Design & Development',
        'Brand Strategy',
        'Analytics & Reporting'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };
    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        if (!formData.service.trim()) newErrors.service = 'Service is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        setIsSubmitting(true);
        const formPayload = {
            access_key: 'bb8e7492-826c-47d4-a267-11ad80807fbe',   // 🔑 Yahan apna key daal
            subject: ` sunceadtech - ${formData.service}`,
            from_name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone || 'Not provided',
            company: formData.company || 'Not specified',
            message: formData.message
        };
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formPayload)
            });

            const result = await response.json();
            console.log(result);
            if (result.success) {
                console.log('Form submitted successfully:', result);
                setSubmitStatus('success');
                navigate("/thankyou");
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    company: '',
                    service: '',
                    message: ''
                });
            } else {
                console.error('Submission failed:', result);
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative sm:py-6 md:mt-0 mt-8">
                {/* <div className="absolute inset-0 bg-red-500 opacity-10"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
                        Let's Grow Your Business
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                            Together
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up-delay">
                        Ready to take your digital marketing to the next level? Get in touch with our expert team today.
                    </p>
                </div>
                
                <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-float"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-float-delay"></div>
                <div className="absolute top-40 right-1/4 w-12 h-12 bg-green-400 rounded-full opacity-20 animate-bounce"></div> */}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Information */}
                    <div className="space-y-8 animate-slide-in-left">
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Get In Touch
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                            </p>
                        </div>
                        {/* Contact Cards */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                <a href="tel:+91 9211877900">
                                    <div className="flex items-center space-x-4">
                                        <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                                            <Phone className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Phone</h3>
                                            <p className="text-gray-600">+91 9211877900</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 px-2">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sunceadtech@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <div className="flex items-center space-x-4 cursor-pointer">
                                        <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors">
                                            <Mail className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900">Email</h3>
                                            <p className="text-gray-600">sunceadtech@gmail.com</p>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors">
                                        <MapPin className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Address</h3>
                                        <p className="text-gray-600">1st floor A 797 <br />GD Colony MayurVihar-Phase-III</p>
                                    </div>
                                </div>
                            </div>

                            <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                                <div className="flex items-center space-x-4">
                                    <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition-colors">
                                        <Clock className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Hours</h3>
                                        <p className="text-gray-600">Mon-Sat: 10AM-7PM EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Contact Methods */}
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Other Ways to Reach Us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <a href="https://wa.me/9211877900"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center space-x-3">
                                        <span className="text-blue-600 font-medium">WhatsApp:</span>
                                        <span className="text-gray-700">+91 9211877900</span>
                                    </a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <a href="mailto:sunceadtech@gmail.com" className="flex items-center space-x-3">
                                        <span className="text-blue-600 font-medium">Skype:</span>
                                        <span className="text-gray-700">sunceadtech@gmail.com</span></a>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-blue-600 font-medium">LinkedIn:</span>
                                    <span className="text-gray-700">@SunceADTECH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="animate-slide-in-right">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                                Start Your Project Today
                            </h3>

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3 animate-fade-in">
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                    <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.firstName ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="John"
                                        />
                                        {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.lastName ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="Doe"
                                        />
                                        {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                            placeholder="+1 (555) 123-4567"
                                        />
                                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Your Company Ltd."
                                    />
                                </div>

                                {/* Service */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service Needed *
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border-2 text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.service ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service) => (
                                            <option key={service} value={service}>{service}</option>
                                        ))}
                                    </select>
                                    {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service}</p>}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Project Details *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className={`w-full px-4 py-3 rounded-lg border-2 text-black transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${errors.message ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-blue-500'}`}
                                        placeholder="Tell us about your project, goals, and any specific requirements..."
                                    ></textarea>
                                    {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom CTA Section */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Join hundreds of successful businesses that trust us with their digital marketing.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <span className="text-black font-semibold">Free Consultation</span>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <span className="text-black font-semibold">24/7 Support</span>
                        </div>
                        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
                            <span className="text-black font-semibold">Proven Results</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-fade-in-up-delay {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.2s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delay {
          animation: float 6s ease-in-out infinite 2s;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-in;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
        </div>
    );
};

export default ContactPage;