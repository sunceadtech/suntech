import React, { useState } from "react";

const PortfolioCard = ({ title, category, url, images }) => {
  const [isHovered, setIsHovered] = useState(false);

  // One image = h-52 (13rem), so scroll all except the first one
  const scrollDistance = (images.length - 1) * 13;

  return (
    <div
      className="bg-white border rounded-lg shadow overflow-hidden group transition hover:shadow-xl max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Scroll Area */}
      <div className="relative h-52 w-full overflow-hidden">
        <div
          className="flex flex-col w-full transition-transform duration-[8000ms] ease-linear"
          style={{
            transform: isHovered
              ? `translateY(-${scrollDistance}rem)`
              : "translateY(0)",
          }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`project-${idx}`}
              className="w-full h-52 object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;



