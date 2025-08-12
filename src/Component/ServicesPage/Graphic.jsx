import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function Graphic() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Brand Identity Design",
      description:
        "Craft visually stunning logos, brand elements, and style guides that define your brand’s personality.",
      features: [
        "Logo Design",
        "Color Palettes",
        "Typography Systems",
        "Brand Guidelines",
      ],
    },
    {
      title: "Marketing & Promotional Graphics",
      description:
        "Create eye-catching graphics for both digital and print to boost brand visibility and engagement.",
      features: [
        "Social Media Graphics",
        "Banner Ads",
        "Posters & Flyers",
        "Email Marketing Creatives",
      ],
    },
    {
      title: "Infographics & Data Visualization",
      description:
        "Present complex information in a visually engaging and easy-to-understand format.",
      features: [
        "Interactive Infographics",
        "Charts & Graphs",
        "Report Design",
        "Presentation Design",
      ],
    },
    {
      title: "Packaging & Merchandise Design",
      description:
        "Design packaging and branded merchandise that leaves a lasting impression on your customers.",
      features: [
        "Product Packaging",
        "T-shirt & Merchandise",
        "Label Design",
        "Mockups & 3D Previews",
      ],
    },
  ];

  const approach = [
    {
      title: "Creative Storytelling",
      description:
        "We design graphics that tell your brand's story, capturing emotions and building connections.",
      points: [
        "Unique Visual Language",
        "Target Audience Focus",
        "Emotional Appeal",
      ],
    },
    {
      title: "Attention to Detail",
      description:
        "Our designers obsess over every pixel to ensure a polished and professional finish.",
      points: [
        "Consistent Aesthetics",
        "Color & Font Harmony",
        "Precision in Layout",
      ],
    },
    {
      title: "Versatility & Scalability",
      description:
        "We create designs that work seamlessly across all mediums, from web to print.",
      points: [
        "Responsive Graphics",
        "Print-Ready Files",
        "Cross-Platform Adaptability",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Stunning Graphic Design Solutions for Powerful Digital Marketing |
          SunceADTECH
        </title>
        <meta
          name="description"
          content="SunceADTECH offers stunning graphic design solutions to boost your digital marketing impact. From logos and banners to social media graphics, we create designs that engage and convert."
        />
        <meta
          name="keywords"
          content="graphic design for digital marketing, creative graphic design services, logo and banner design, social media graphics, branding design, SunceADTECH"
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.sunceadtech.com/services/graphic"
        />
      </Helmet>
      <main
        className="min-h-screen bg-gradient-to-br from-yellow-50 to-red-50"
        aria-label="Graphic Design Services"
      >
        <div
          className={`pt-32 pb-16 px-4 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Stunning{" "}
                <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
                  Graphic Design
                </span>{" "}
                Solutions for Powerful Digital Marketing
              </h1>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Captivate your audience with impactful visuals that elevate your
                brand identity and messaging.
              </p>
              <nav
                aria-label="Primary Call to Action"
                className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold rounded-xl hover:from-yellow-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Request a free consultation for graphic design services"
                >
                  Request Free Graphic Design Consultation
                </Link>
                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-xl hover:bg-gray-50 border border-red-200 transform hover:scale-105 transition-all duration-300 shadow-lg"
                  aria-label="Read more about our graphic design services on our blog"
                >
                  Learn More About Graphic Design Services
                </Link>
              </nav>
            </header>

            {/* Services Section */}
            <section
              aria-labelledby="services-heading"
              className="grid md:grid-cols-2 gap-8"
            >
              <h2 id="services-heading" className="sr-only">
                Graphic Designing Services
              </h2>
              {services.map((service, index) => (
                <article
                  key={index}
                  className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-gray-600 mb-6">
                    Our expert team leverages the latest design trends and
                    digital marketing insights to craft visuals that not only
                    look amazing but also drive customer engagement and brand
                    loyalty.
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span
                          className="w-2 h-2 bg-red-500 rounded-full mr-3"
                          aria-hidden="true"
                        ></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>

            {/* Design Approach Section */}
            <section className="py-16" aria-labelledby="approach-heading">
              <h2
                id="approach-heading"
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
              >
                Our Creative Approach
              </h2>
              <p className="text-center max-w-4xl mx-auto text-gray-700 mb-10">
                We believe that effective graphic design is the cornerstone of
                successful digital marketing. By combining creativity with
                data-driven strategies, we ensure every design element
                contributes to your business goals.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {approach.map((item, index) => (
                  <article
                    key={index}
                    className={`rounded-2xl p-8 ${
                      index === 1
                        ? "bg-gradient-to-br from-yellow-500 to-red-500 text-white transform scale-105"
                        : "bg-gradient-to-br from-gray-50 to-yellow-50"
                    } hover:shadow-xl transition-all duration-300`}
                  >
                    <h3
                      className={`text-2xl font-bold mb-4 ${
                        index === 1 ? "text-white" : "text-gray-800"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mb-4 ${
                        index === 1 ? "text-yellow-100" : "text-gray-600"
                      }`}
                    >
                      {item.description}
                    </p>
                    <p
                      className={
                        index === 1 ? "text-yellow-100" : "text-gray-700"
                      }
                    >
                      Our approach ensures designs are not only visually
                      appealing but also aligned with SEO best practices to
                      increase online visibility.
                    </p>
                    <ul
                      className={`space-y-2 ${
                        index === 1 ? "text-yellow-100" : "text-gray-700"
                      }`}
                    >
                      {item.points.map((point, idx) => (
                        <li key={idx} aria-label={`Design point: ${point}`}>
                          ✔ {point}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default Graphic;
