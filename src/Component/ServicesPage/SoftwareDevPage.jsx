import React, { useState, useEffect } from "react";
import {
  Code,
  Smartphone,
  Globe,
  Database,
  Shield,
  Trophy,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const SoftwareDevPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: <Globe className="w-10 h-10 text-purple-400" />,
      title: "Web Development",
      description:
        "Custom web applications built with modern frameworks and cutting-edge technologies.",
      features: [
        "React / Next.js",
        "Node.js Backend",
        "Cloud Deployment",
        "SEO Optimized",
      ],
    },
    {
      icon: <Smartphone className="w-10 h-10 text-purple-400" />,
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
      icon: <Database className="w-10 h-10 text-purple-400" />,
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
      icon: <Shield className="w-10 h-10 text-purple-400" />,
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
      icon: <Trophy className="w-8 h-8 text-purple-400" />,
    },
    {
      number: "150+",
      label: "Happy Clients",
      icon: <Users className="w-8 h-8 text-purple-400" />,
    },
    {
      number: "5+",
      label: "Years Experience",
      icon: <Clock className="w-8 h-8 text-purple-400" />,
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: <CheckCircle className="w-8 h-8 text-purple-400" />,
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
    <>
      <Helmet>
        <title>Building Scalable Custom Software Solutions | Sunceadtech</title>
        <meta
          name="description"
          content="Sunceadtech offers scalable, custom software development services tailored for your business growth. Expert web and desktop applications built with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="custom software development, scalable software solutions, business software, web applications, desktop applications, Sunceadtech"
        />
        <link
          rel="canonical"
          href="https://www.sunceadtech.com/software-development"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero */}
        <section className="relative px-6 py-24 sm:px-12 lg:px-20 text-center max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center justify-center gap-3 bg-purple-700/30 rounded-full px-5 py-3 mb-8 font-semibold uppercase tracking-wider text-purple-300 backdrop-blur-sm animate-pulse mx-auto w-max">
              <Code className="w-6 h-6 text-purple-400" />
              Professional Software Development
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-white via-purple-300 to-blue-300 bg-clip-text text-transparent leading-tight">
              Scalable & Custom Software Solutions
            </h1>
            <p className="max-w-3xl mx-auto text-gray-300 text-lg sm:text-xl leading-relaxed mb-10">
              Empower your business with expertly crafted software, tailored to
              your unique needs and built with the latest technologies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 font-semibold text-lg shadow-lg transition transform hover:scale-105"
                aria-label="Start your software development project"
              >
                Start Your Project
              </Link>
              <Link
                to="/portfolio"
                className="px-10 py-4 rounded-3xl border-2 border-purple-500 hover:bg-purple-700/20 font-semibold text-lg transition"
                aria-label="View our software portfolio"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
            Our Core Software Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map(({ icon, title, description, features }) => (
              <div
                key={title}
                className="bg-purple-800/40 rounded-xl p-8 flex flex-col shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-2xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{description}</p>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {features.map((feat) => (
                    <li key={feat}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies */}
        <section className="bg-gradient-to-r from-purple-900 to-blue-900 py-16 px-6">
          <h2 className="text-4xl font-extrabold mb-8 text-center text-white">
            Technologies We Use
          </h2>
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-purple-700/40 px-5 py-3 rounded-full text-white font-semibold tracking-wide text-lg cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-white">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 text-center text-gray-300">
            {stats.map(({ number, label, icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-purple-800/40 rounded-xl p-8 shadow-lg hover:shadow-purple-500/50 transition-shadow duration-300"
              >
                <div>{icon}</div>
                <p className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {number}
                </p>
                <p className="text-lg">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process */}
        <section className="bg-gradient-to-r from-purple-800 to-blue-800 rounded-xl max-w-6xl mx-auto px-6 py-16 text-white mb-20">
          <h2 className="text-4xl font-extrabold mb-12 text-center">
            Our Development Process
          </h2>
          <ol className="max-w-3xl mx-auto list-decimal list-inside space-y-8 text-gray-300 text-lg">
            <li>
              <strong className="text-white">Discovery & Planning:</strong> We
              collaborate with you to understand your goals, challenges, and
              scope to create a detailed project roadmap.
            </li>
            <li>
              <strong className="text-white">Design & Prototyping:</strong>{" "}
              Crafting intuitive UI/UX designs and interactive prototypes to
              visualize the end product.
            </li>
            <li>
              <strong className="text-white">Agile Development:</strong> Using
              iterative sprints, we build, test, and refine your software to
              ensure quality and adaptability.
            </li>
            <li>
              <strong className="text-white">Deployment & Maintenance:</strong>{" "}
              Launching your solution with continuous support, updates, and
              scalability.
            </li>
          </ol>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-white">
            Ready to Build Your Custom Software?
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mb-12">
            Contact Sunceadtech’s expert team today to start turning your ideas
            into scalable software solutions that accelerate your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-14 py-5 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
              aria-label="Contact us to start software project"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+919873569000"
              className="border-2 border-purple-500 text-purple-300 hover:bg-purple-700 hover:text-white px-14 py-5 rounded-full font-semibold transition-colors"
              aria-label="Call us for software inquiry"
            >
              Call Us Now
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default SoftwareDevPage;
