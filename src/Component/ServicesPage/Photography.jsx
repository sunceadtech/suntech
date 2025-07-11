import React from "react";
import { Link } from "react-router-dom";
function Photography() {
  const photography = [
    "/images/photo2.webp",
    "/images/photography.webp",
    "/images/seo.webp",
    "/images/branding.webp",
    "/images/photo3.avif",
    "/images/social3.avif",
  ];

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center">
        <div className="bg-black bg-opacity-50 p-8 rounded-xl text-white text-center max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold">
            Professional Business Photography
          </h1>
          <p className="mt-4 text-lg">
            Elevate your brand with high-quality corporate headshots, workplace
            imagery, and event coverage tailored for businesses.
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-lg leading-relaxed">
          With a passion for storytelling through the lens, we specialize in
          weddings, portraits, fashion, and commercial shoots. Our goal is to
          freeze time and deliver timeless photos that speak louder than words.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="bg-gray-100 py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {photography.map((url, index) => (
            <div
              key={index}
              className="h-64 overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
            >
              <img
                src={url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="text-center py-12 bg-white"
        aria-labelledby="book-session-heading"
      >
        <h2 id="book-session-heading" className="text-3xl font-semibold mb-4">
          Book Your Session Today
        </h2>
        <p className="mb-6 text-lg">
          Let us help you preserve your memories with stunning photography.
        </p>
        <Link
          to="/contact"
          className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          aria-label="Contact us to book a professional photography session"
        >
          Contact Us for a Photography Session
        </Link>
      </section>
    </div>
  );
}

export default Photography;
