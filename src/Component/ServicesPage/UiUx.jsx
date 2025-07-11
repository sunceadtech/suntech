import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function UiUx() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "User Research & Analysis",
      description:
        "Gain deep insights into your users’ needs, behaviors, and pain points.",
      features: [
        "Persona Development",
        "User Journey Mapping",
        "Usability Testing",
        "Data-Driven Insights",
      ],
    },
    {
      title: "Wireframing & Prototyping",
      description:
        "Visualize the structure and flow of your digital products before development.",
      features: [
        "Low & High-Fidelity Wireframes",
        "Interactive Prototypes",
        "Information Architecture",
        "User Flow Design",
      ],
    },
    {
      title: "Visual Design & Branding",
      description:
        "Create stunning, consistent, and user-friendly interfaces that reflect your brand.",
      features: [
        "UI Style Guides",
        "Responsive Design",
        "Microinteractions",
        "Accessibility Design",
      ],
    },
    {
      title: "UI Development & Handoff",
      description:
        "Smooth transition from design to development with pixel-perfect deliverables.",
      features: [
        "Design-to-Code Handoff",
        "Component Libraries",
        "Developer Collaboration",
        "Responsive UI Kits",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
        <div
          className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Exceptional{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  UI/UX Design
                </span>{" "}
                Services
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering intuitive, engaging, and aesthetically pleasing
                digital experiences tailored to your audience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Request a free consultation for UI/UX design services"
                >
                  Request a Free UI/UX Consultation
                </Link>

                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-700 font-semibold rounded-xl hover:bg-gray-50 border border-purple-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Explore our full range of UI/UX design services"
                >
                  Explore UI/UX Services
                </Link>
              </div>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Packages Section */}
            {/* Design Approach Section */}
            <div className="py-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
                Our Design Approach
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Human-Centered Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We focus on the real needs of users to craft intuitive and
                    delightful experiences that drive engagement.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✔ Empathy Mapping</li>
                    <li>✔ User Testing</li>
                    <li>✔ Accessibility Standards</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform scale-105">
                  <h3 className="text-2xl font-bold mb-4">
                    Iterative Prototyping
                  </h3>
                  <p className="mb-4 text-pink-100">
                    We believe in quick iteration, rapid prototyping, and
                    frequent feedback to refine designs efficiently.
                  </p>
                  <ul className="space-y-2 text-pink-100">
                    <li>✔ Wireframes to High-Fidelity</li>
                    <li>✔ User-Centric Prototypes</li>
                    <li>✔ Continuous Feedback Loop</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Scalable & Consistent Design
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We build scalable design systems ensuring consistency,
                    flexibility, and smooth developer handoff.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>✔ Design Systems</li>
                    <li>✔ Component Libraries</li>
                    <li>✔ Development Ready Assets</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UiUx;
