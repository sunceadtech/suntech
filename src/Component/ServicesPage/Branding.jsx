import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Branding() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    {
      title: "Brand Discovery",
      description:
        "We dig deep into your business, target audience, and market to uncover the unique story that sets your brand apart.",
    },
    {
      title: "Visual Identity",
      description:
        "From logos to typography and color schemes, we create a visual language that communicates your brand essence across every touchpoint.",
    },
    {
      title: "Brand Voice & Messaging",
      description:
        "We define how your brand speaks, sounds, and connects with your audience through consistent and impactful messaging.",
    },
    {
      title: "Consistency Across Channels",
      description:
        "We ensure your brand identity remains cohesive and memorable across digital, print, packaging, and beyond.",
    },
  ];

  const processSteps = [
    "In-depth Consultation & Research",
    "Concept Development & Moodboards",
    "Logo & Visual Elements Creation",
    "Brand Guidelines & Collateral Delivery",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 text-gray-800">
      <div
        className={`pt-32 pb-20 px-4 transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Memorable{" "}
              <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Branding Solutions
              </span>{" "}
              That Speak for You
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We help businesses transform into powerful brands through
              compelling storytelling, distinct visuals, and consistent identity
              that builds trust and recognition.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                aria-label="Start your branding journey with SunceADTECH"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-yellow-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Start Your Brand Journey with Us
              </Link>
              <Link
                to="/contact"
                aria-label="Get a free branding consultation from SunceADTECH"
                className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-gray-50 border border-orange-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                Request Free Branding Consultation
              </Link>
            </div>
          </div>

          {/* Pillars of Branding */}
          <div className="mb-20 grid md:grid-cols-2 gap-8 px-4">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-600">
                  {pillar.title}
                </h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* The Branding Process */}
          <div className="mb-20 text-center px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Branding Process
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              A well-defined, collaborative process ensures that your brand not
              only looks great but also resonates with your audience on a deeper
              level.
            </p>
            <div className="grid md:grid-cols-4 gap-8">
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-br from-yellow-50 to-orange-100 p-6 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="text-5xl font-bold text-orange-500 mb-4">
                    {idx + 1}
                  </div>
                  <p className="font-semibold text-lg text-gray-800">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Section */}
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl py-12 px-8 text-white text-center shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Let’s Build Your Brand Together
            </h3>
            <p className="mb-6 text-lg max-w-2xl mx-auto text-orange-100">
              Whether you're starting from scratch or refreshing your identity,
              we’re here to bring your vision to life with creativity and
              strategy.
            </p>
            <Link
              to="/contact"
              aria-label="Book a free branding session with SunceADTECH"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-100 transform hover:scale-105 transition-all duration-300 shadow-md"
            >
              Book Your Free Branding Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Branding;
