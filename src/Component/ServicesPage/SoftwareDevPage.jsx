import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Users,
  Trophy,
  Clock,
  Layers,
} from "lucide-react";
import { Link } from "react-router-dom";

const SoftwareDevPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and cutting-edge technologies.",
      features: [
        "React/Next.js",
        "Node.js Backend",
        "Cloud Deployment",
        "SEO Optimized",
      ],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      features: [
        "iOS & Android",
        "React Native",
        "Flutter",
        "App Store Optimization",
      ],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Backend Systems",
      description:
        "Scalable server architectures and robust API development for enterprise solutions.",
      features: [
        "Microservices",
        "Database Design",
        "API Development",
        "Cloud Integration",
      ],
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "DevOps & Security",
      description:
        "Secure deployment pipelines and infrastructure management for optimal performance.",
      features: [
        "CI/CD Pipelines",
        "Security Audits",
        "Monitoring",
        "Scalability",
      ],
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Projects Delivered",
      icon: <Trophy className="w-6 h-6" />,
    },
    {
      number: "150+",
      label: "Happy Clients",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-6 h-6" />,
    },
  ];

  const technologies = [
    "React",
    "Node.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-3xl "></div>
        <div
          className={`relative max-w-7xl mx-auto text-center transform transition-all duration-1000 mt-6 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-600/20 rounded-full border border-purple-400/30 mb-8 backdrop-blur-sm">
            <Code className="w-5 h-5 mr-2 text-purple-400" />
            <span className="text-purple-300 font-medium">
              Professional Software Development
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent leading-tight">
            Crafting Digital
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions with
            cutting-edge technology and innovative design
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              aria-label="Start your software development project by contacting us"
            >
              Start Your Software Project
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 border-2 border-purple-400/50 rounded-xl font-semibold text-lg hover:bg-purple-600/20 hover:border-purple-400 transition-all duration-300 backdrop-blur-sm"
              aria-label="View our software development portfolio"
            >
              View Our Software Portfolio
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-600/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Remaining sections remain unchanged */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project and turn your vision into reality
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919873569000"
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-lg hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25"
              aria-label="Call us for a free software consultation"
            >
              Call Now for Free Consultation
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevPage;
